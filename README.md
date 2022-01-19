# PRODUCTS API

/api/v1/products => get all products
<br/>
/api/v1/products?name=string => get products by name
<br/>
/api/v1/products?featured=boolean => get products by featured property 
<br/>
/api/v1/products?page=number => get products by page
<br/>
/api/v1/products?company=string => get products by company name
<br/>
/api/v1/products?fields=string => get products with only the fields passed 
<br/>
/api/v1/products?sort=price => sort products by property name, to invert order use '-'. To sort with more than one property use comma
<br/>
/api/v1/products?limit=number => limit the quantity of results
<br/>
/api/v1/products?numericFilters=string => Filter the results my numeric filters ex: numericFilters=price>30,rating>=4