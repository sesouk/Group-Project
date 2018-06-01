insert into lineitem(orderid,productid,quantity)
values ($1,$2,$3)
returning *;

