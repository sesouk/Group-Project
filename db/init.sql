drop table if exists users CASCADE;
drop table if exists orders;
drop table if exists orderdetails;
drop table if exists products;
drop table if exists productoptions;
drop table if exists productcategories;
drop table if exists optiontable;
drop table if exists optiongroups;
drop table if exists cart;

create table cart(
cartID serial primary key,
cartTotal float,
cartItems text
)
create table users(
userID serial primary key,
userName varchar(100),
userEmail varchar(100),
userCity varchar(100),
userState varchar(20),
userZip varchar(20),
userPhone varchar(20),
userAddress varchar(100),
cartID int references cart(cartID)
);

create table orders(
orderID serial primary key,
orderUserID int references users(userID),
orderAmount float,
orderShipAddress varchar(100),
orderCity varchar(100),
orderState varchar(100),
orderZip varchar(20),
orderPhone varchar(20),
orderShippingCharges float,
orderTax float,
orderEmail varchar(100),
orderDate timestamp,
orderShipped int,
orderTrackingNumber varchar(80)
);

create table productcategories(
categoryID serial UNIQUE,
categoryName varchar(50)
);

create table products(
productID serial primary key,
productName varchar(100),
productPrice float,
productWeight float,
productCartDesc varchar(250),
productShortDesc varchar(1000),
productThumb varchar(100),
productImage varchar(100),
productCategoryID int references productcategories(categoryID),
productUpdateDate timestamp,
productStock float
);


create table orderdetails(
detailID serial primary key,
detailOrderID int references orders(orderID),
detailProductID int references products(productID), 
detailName varchar(250),
detailPrice float,
detailQuantity int
);

create table optiongroups(
optionGroupID serial primary key UNIQUE,
optionGroupName varchar(50)
);


create table optiontable(
optionID int unique,
optionattribute varchar(50),
value varchar(50),
productID int references products(productID)

);


-- create table productoptions(
-- productOptionID int,
-- optionID int references optiontable(optionID),
-- productID int references products(productID),
-- optionGroupID int,
-- optionPriceIncrement float
-- );

insert into users(userName,userEmail,userCity,userState,userZip,userPhone,useraddress) VALUES
('Leanne Graham','Sincere@april.biz','phoenix','arizona','85032','4805273139','abcdef'),
('Ervin Howell','Shanna@melissa.tv','tempe','arizona','85033','45123654','az mill road'),
('Chelsey Dietrich','Telly.Hoeger@billy.biz','Las vegas','Nevada','88901','111111111','1st street avenue'),
('stone cold','stone@gmail.com','New york','new york','10001','222222222','2st street avenue'),
('tripleH','triple@gmail.com','San Francisco','San Francisco','94121','333333333','3rd street avenue');

insert into productcategories(categoryName)
values ('T-shirts'),
('Jeans'),
('Shoes'),
('Watches');


insert into products(productName, productPrice,productCartDesc,productShortDesc,productImage,productCategoryID,productUpdateDate,productStock)VALUES
('Men T-shirt','25','FAKE ReactJS JavaScript Programmer T-Shirt','Cool Programming T-Shirts','https://vangogh.teespring.com/v3/image/dFJEFk0QNNTKVaEuz6fZ_gH5NX8/480/560.jpg','1',CURRENT_DATE,'10'),
('Men Jeans','150','Levis Men  505 Regular Fit Jean','Slim fit Jeans','https://www.supercasuals.com/images/Levis/00501_0193_L.jpg','2',CURRENT_DATE,'15'),
('Men Shoes','200','MEN VARSITY COMPETE WIDE TRAINING SHOE','best running shoes','https://www.famousfootwear.com/ProductImages/shoes_ia77638.jpg','3',CURRENT_DATE,'25'),
('Men Watch','225','NEUTRA CHRONOGRAPH NAVY LEATHER WATCH','blue dial watch','http://fossil.scene7.com/is/image/FossilPartners/FS5454_main?$aemResponsive_pdp$','4',CURRENT_DATE,'10');

insert into optiontable(optionattribute,value,productID)
values('size','S',1),
('size','M',1),
('size','L',1),
('color','Red',1),
('color','Green',1),
('color','Blue',1),
('waist','30',2),
('waist','32',2),
('waist','34',2),
('waist','36',2),
('waist','38',2);

select * from products;
select * from optiontable;

select products.productname,products.productid,optiontable.optionattribute,optiontable.value
from products, optiontable
where products.productid = optiontable.productID;