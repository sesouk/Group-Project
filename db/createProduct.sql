insert into products(productname, productprice, productshortdesc, productstock)
values($1, $2, $3, $4) 
returning *;
