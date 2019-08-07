#(1)进入数据 xz
USE xz;
#(2)创建表 xz_login
CREATE TABLE xz_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd VARCHAR(32)
);
#(3)添加2条测试数据
INSERT INTO xz_login VALUES(null,'tom',md5('123'));
INSERT INTO xz_login VALUES(null,'jerry',md5('123'));


#-----------------------------------------
#完成商品分页显示功能
#(1)添加列 xz_laptop img_url VARCHAR(255)
USE xz;
ALTER TABLE xz_laptop ADD img_url VARCHAR(255);
#(2)更新数据
UPDATE xz_laptop SET img_url='01.jpg';
UPDATE xz_laptop SET img_url='01.jpg' WHERE lid=2;

###########################################
#完成功能购物车
#id,   购物车项目id
#lid,  商品id
#uid,  当前登录用户id
#count,购物车项目数量
#lname,商品名称
#price,商品价格 DECIMAL高精度浮点数

DROP TABLE xz_cart;
CREATE TABLE xz_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  lid INT,
  uid INT,
  count INT,
  lname VARCHAR(255),
  price DECIMAL(10,2)
);


USE xz;
ALTER TABLE xz_cart ADD img_url VARCHAR(255);
#(2)更新数据
UPDATE xz_cart SET img_url='01.jpg';