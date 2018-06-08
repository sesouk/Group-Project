drop table if exists users CASCADE;
drop table if exists lineItem;
drop table if exists orders;
drop table if exists products;


create table users(
userID serial primary key,
userName varchar(100),
userEmail varchar(100),
userCity varchar(100),
userState varchar(20),
userZip varchar(20),
userPhone varchar(20),
userAddress varchar(100)
);

create table products(
productID serial primary key,
productName varchar(100),
productPrice float,
productCartDesc varchar(250),
productShortDesc varchar(1000),
productThumb varchar(100),
productImage varchar(100),
productStock float,
productSize varchar(20),
productcolor varchar(20)
productcolor varchar(20),
productcategory varchar(20)
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
orderStatus text,
orderTrackingNumber varchar(80)
);

create table lineItem(
    lineID serial,
    orderID int references orders(orderID),
    productID int references products(productID),
    quantity int

);

insert into users(userName,userEmail,userCity,userState,userZip,userPhone,useraddress) VALUES
('Leanne Graham','Sincere@april.biz','phoenix','arizona','85032','4805273139','abcdef'),
('Ervin Howell','Shanna@melissa.tv','tempe','arizona','85033','45123654','az mill road'),
('Chelsey Dietrich','Telly.Hoeger@billy.biz','Las vegas','Nevada','88901','111111111','1st street avenue'),
('stone cold','stone@gmail.com','New york','new york','10001','222222222','2st street avenue'),
('tripleH','triple@gmail.com','San Francisco','San Francisco','94121','333333333','3rd street avenue');




insert into products(productName, productPrice,productCartDesc,productShortDesc,productImage,productStock,productSize,productcolor,productcategory)VALUES
('Men T-shirt','25','FAKE ReactJS JavaScript Programmer T-Shirt','Cool Programming T-Shirts','https://vangogh.teespring.com/v3/image/dFJEFk0QNNTKVaEuz6fZ_gH5NX8/480/560.jpg','10','M','Red', 'shirt'),
('Men T-shirt','25','FAKE ReactJS JavaScript Programmer T-Shirt','Cool Programming T-Shirts','https://vangogh.teespring.com/v3/image/dFJEFk0QNNTKVaEuz6fZ_gH5NX8/480/560.jpg','10','S','Blue', 'shirt'),
('Men T-shirt','25','FAKE ReactJS JavaScript Programmer T-Shirt','Cool Programming T-Shirts','https://vangogh.teespring.com/v3/image/dFJEFk0QNNTKVaEuz6fZ_gH5NX8/480/560.jpg','10','L','Red', 'shirt'),
('Men Jeans','150','Levis Men  505 Regular Fit Jean','Slim fit Jeans','https://www.supercasuals.com/images/Levis/00501_0193_L.jpg','15','36','Blue', 'pant'),
('Men Shoes','200','MEN VARSITY COMPETE WIDE TRAINING SHOE','best running shoes','https://www.famousfootwear.com/ProductImages/shoes_ia77638.jpg','25','Black','8', 'shoe'),
('Men Watch','225','NEUTRA CHRONOGRAPH NAVY LEATHER WATCH','blue dial watch','http://fossil.scene7.com/is/image/FossilPartners/FS5454_main?$aemResponsive_pdp$','10','One Size','Blue', 'accessory'),
('Classic Angular T-Shirt','44.99','T-shirt with the Angularjs logo.','One of the most classic t-shirts in a basic fit. It is made from 6oz of 100% cotton jersey cotton. It has a seamless double needle 7/8 collar along with a taped neck and shoulders.','http://www.devshirts.io/wp-content/uploads/2016/08/t-shirt_men_angularjs_white_1.png','5','M','White', 'shirt'),
('Javascript T-shirt','27.99','T-shirt with the Javascript logo..','One of the most classic t-shirts in a basic fit. It is made from 6oz of 100% cotton jersey cotton.','http://www.devshirts.io/wp-content/uploads/2016/09/t-shirt_js_white.png','15','L','White', 'shirt'),
('AE DENIM X HIGH-WAISTED JEGGING','47.99','American eagle best jeans','High level stretch holds its shape & would not bag out so you always look and feel great. It is made from 6oz of 100% cotton jersey cotton.','https://s7d2.scene7.com/is/image/aeo/0433_1236_692_of?$PDP_78_Main$','2','30','Blue', 'pant'),
('AE DENIM X HIGH-WAISTED JEGGING','47.99','American eagle best jeans','High level stretch holds its shape & would not bag out so you always look and feel great. It is made from 6oz of 100% cotton jersey cotton.','https://s7d2.scene7.com/is/image/aeo/0433_1236_692_of?$PDP_78_Main$','4','32','Blue', 'pant'),
('G-Shock Watch','99.99','Men Black Resin Strap Round 55mm Watch GA100-1A1','Analog Digital Casio G Shock Watches GL110GB-1A.','http://www.beshopaholic.com/wp-content/uploads/2017/12/Casio-G-Shock.jpg','15','L','Black', 'accessory');

insert into orders(orderUserID,orderAmount,orderShipAddress,orderCity,orderState,orderZip,orderPhone,orderShippingCharges,orderTax,orderEmail,orderDate,orderStatus,orderTrackingNumber)
values(1,'50','abcdef','phoenix','arizona','85032','4805273139','5','2','Sincere@april.biz',CURRENT_DATE,'open','455566');


insert into lineItem(orderID,productID,quantity)
values(1,1,2);


select * from users;
select * from products;
select * from orders;
select * from lineItem;
