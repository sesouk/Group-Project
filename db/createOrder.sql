-- insert into orders (orderuserid,orderamount,ordershipaddress,ordercity,orderstate,orderzip,orderphone,ordershipping,ordertax,orderemail	,orderdate)
-- values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
-- returning *;


insert into orders(orderemail ,ordershipaddress ,orderzip , orderstate, ordercity,orderphone)
values($1,$2,$3,$4,$5,$6)
returning *;