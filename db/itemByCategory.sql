select * from products;
select * from productcategories;
select products.productname,products.productprice, products.productcategoryid,products.productPrice, products.productCartDesc, products.productShortDesc,products.productImage ,productcategories.categoryname
from products, productcategories
where products.productid = productcategories.categoryid;