select lineitem.orderid,lineitem.productid,lineitem.quantity,products.productname,products.productprice,products.productImage,users.username,orders.orderid,orders.orderamount, orders.orderdate from orders
join users
on orders.orderuserid = users.userid
left join lineitem 
on lineitem.orderid=orders.orderid
join products
on lineitem.productid = products.productid
