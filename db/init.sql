drop table if exists users CASCADE;
drop table if exists orders;
drop table if exists orderdetails;
drop table if exists products;
drop table if exists productoptions;
drop table if exists productcategories;
drop table if exists options;
drop table if exists optiongroups;

create table users(
userID serial primary key,
userName varchar(100),
userEmail varchar(100),
userCity varchar(100),
userState varchar(20),
userZip varchar(20),
userPhone varchar(20),
userAddress varchar(100)
)

create table orders(
orderID int,
orderUserID int references users(userID),
orderAmount float,
orderShipAddress varchar(100),
orderCity varchar(100),
orderState varchar(100),
orderZip varchar(20),
orderPhone varchar(20),
orderShipping float,
orderTax float,
orderEmail varchar(100),
orderDate timestamp,
orderShipped int,
orderTrackingNumber varchar(80)
)

create table orderdetails(
detailID int,
detailOrderID int references orders(orderID),
detailProductID int reference products(productID), 
detailName varchar(250),
detailPrice float,
detailSKU varchar(50),
detailQuantity int))

create table products(
productID int,
productSKU varchar(50),
productName varchar(100),
productPrice float,
productWeight float,
productCartDesc varchar(250),
productShortDesc varchar(1000),
productLongDesc text,
productThumb varchar(100),
productImage varchar(100),
productCategoryID int references productcategories(categoryID),
productUpdateDate timestamp,
productStock float,
productLive tinyint(1),
productUnlimited tinyint(10),
productLocation varchar(250)
)

create table productcategories(
categoryID int,
categoryName varchar(50))

create table productoptions(
productOptionID int,
optionID int references options(optionID),
productID int references products(productID),
optionGroupID int,
optionPriceIncrement double)

create table options(
optionID int,
optionName varchar(50) references optionGroupID int)

create table optiongroups(
optionGroupID int,
optionGroupName varchar(50))