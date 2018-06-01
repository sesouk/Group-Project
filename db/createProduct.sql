insert into products(productname,productprice	,productcartdesc,productshortdesc,productimage,productstock,productsize	,productcolor,productcategory)
values($1, $2, $3, $4, $5, $6, $7, $8, $9) 
returning *;
