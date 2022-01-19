# PRODUCTS API

/api/v1/products => get all products
/api/v1/products?name=string => get products by name
/api/v1/products?featured=boolean => get products by featured property 
/api/v1/products?page=number => get products by page
/api/v1/products?company=string => get products by company name
/api/v1/products?fields=string => get products with only the fields passed 
/api/v1/products?sort=price => sort products by property name, to invert order use '-'. To sort with more than one property use comma, 
/api/v1/products?limit=number => limit the quantity of results
/api/v1/products?numericFilters=string => Filter the results my numeric filters ex: numericFilters=price>30,rating>=4