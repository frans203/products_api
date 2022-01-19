const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Product
    .find({price: {$gt:30}})
    .select('name price company')
    .sort('price')
    // .skip(2)
    // .limit(12)
   
    res.status(200).json({
        quantity: products.length,
        products
    })
}


const getAllProducts = async (req, res) => {
    const {featured, name, company, sort, fields, numericFilters} = req.query
    const queryObj = {}
    if(name){
        queryObj.name = {$regex: name, $options: "i"}
    }
    if(company){
        queryObj.company = company
    }
    if(featured){
        queryObj.featured = (featured === 'true') ? true : false
    }
    if(numericFilters){
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }

        const regEx = /\b(<|>|=|>=|<=)\b/g
        let filters= numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if(options.includes(field)){
                queryObj[field] = {[operator]:Number(value)}
            }
        })
        // console.log(filters)

    }
    
    let results = Product.find(queryObj)

    if(sort){
        const sortList = sort.split(',').join(' ')
        results = results.sort(sortList)
    }else{
        results = results.sort('createdAt')
    }

    if(fields){
        const fieldsList = fields.split(',').join(' ')
        results = results.select(fieldsList)
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit 
    
    results = results.limit(limit).skip(skip)

    const products = await results
    res.status(200).json({
        quantity: products.length,
        products
    })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}