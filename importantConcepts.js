// ***** GET Request *****
// http://localhost:3000/products
// http://localhost:3000/reviews

// to get only particular product
// http://localhost:3000/products/2(id)

// ***** Filtering *****
// http://localhost:3000/products?category=smartphones

// for nested queries
// http://localhost:3000/products?category=smartphones&discount.type=shipping

// ***** Sorting *****
// you can set the order of sorting
// http://localhost:3000/products?_sort=price&_order=desc

// for next level of sorting just use comma
// http://localhost:3000/products?_sort=price,category&_order=desc,asc

// ***** Pagination *****
// http://localhost:3000/products?_page=1&_limit=2
// http://localhost:3000/products?_page=3&_limit=2

// it also supports pagination urls like next and prev in response headers use dev tools
// to see

// ***** Operators *****
// work with range of values
// http://localhost:3000/products?price_gte=20&price_lte=1000

// not equal to operator
// http://localhost:3000/products?id_ne=2

// like operator
// http://localhost:3000/products?category_like=^s
// ^ means starts with

// ***** Full text search *****
// if we want search in particular field use operator like category_like
// if we want full text search on entire json use full text search
// http://localhost:3000/products?q=h
// http://localhost:3000/products?q=sm
// http://localhost:3000/products?q=hu

// ***** Relationships *****
// some data is associated with other like reviews of product 1 are associted with
// product 1
// embed add review array as new field in each object
// http://localhost:3000/products?_embed=reviews
// http://localhost:3000/products/1?_embed=reviews

// joins the products to reviews
// http://localhost:3000/reviews?_expand=product
// http://localhost:3000/reviews/1?_expand=product

// ***** Post request *****
// use postman or other to make a post request to json server
// use post req on url http://localhost:3000/products

// ***** Put,Patch and Delete request *****
// use postman to make these req
// put - http://localhost:3000/products/id
// patch - http://localhost:3000/products/id
// delete - http://localhost:3000/products/id

// ***** Configurations *****
// Port
// default port is 3000 to run it on another port use script like
// "serve-json": "json-server --watch db.json --port 4000"

// Route configurations
// to use custom routes add script
// "serve-json": "json-server --watch db.json --port 4000 --routes routes.json"

// ***** Generating Random data *****
// for realistic data use library like
// faker , casual,  chancejs
// while using data.js change --watch data.js in script file
