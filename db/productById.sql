
select products.productid,products.productname,products.productprice ,productcategories.categoryname
from products, productcategories
where products.productid = productcategories.categoryid;