require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const notFoundMiddleware = require('./middleware/error-handler')
const errorHandlerMiddleware = require('./middleware/error-handler')
const productsRouter = require('./routes/products')
//middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('<a href="/api/v1/products">SEE PRODUCTS</a>')
})
app.use('/api/v1/products', productsRouter )
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try{
       await connectDB(process.env.MONGO_URI)
       app.listen(3000, console.log('server is running on port:', port))
    }catch(e){
        console.log(e)
    }
}

start()