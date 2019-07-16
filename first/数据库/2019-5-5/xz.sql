#设置客户端连接服务器端的编码
SET NAMES UTF8;
#丢弃原有的数据库
DROP DATABASE IF EXISTS xz;
#创建数据库，设置存储的编码为UTF8
CREATE DATABASE xz CHARSET=UTF8;
#进入该数据库
USE xz;
#创建保存笔记本家族数据的表
CREATE TABLE laptop_family(
   fid SMALLINT PRIMARY KEY,
   #给家族名称添加非空约束
   fname VARCHAR(8) UNIQUE NOT NULL,
   laptopCount SMALLINT DEFAULT 0
);
#插入数据
INSERT INTO laptop_family VALUES(10,'Apple',1);
INSERT INTO laptop_family VALUES(20,'联想',2);
INSERT INTO laptop_family VALUES(30,'华硕',1);
INSERT INTO laptop_family VALUES(40,'小米',DEFAULT);
INSERT INTO laptop_family(fid,fname) VALUES(50,'戴尔');
INSERT INTO laptop_family(fid,fname) VALUES(60,'外星人'),(70,'神州'),(80,'华为');
#创建保存笔记本数据的表
CREATE TABLE laptop(
   lid SMALLINT PRIMARY KEY AUTO_INCREMENT,
   title VARCHAR(64) UNIQUE,
   price DECIMAL(7,2) NOT NULL DEFAULT 6999,
   spec VARCHAR(32),
   details VARCHAR(3000),
   shelfTime DATE,
   isOnsale BOOL,
   familyId SMALLINT,
   FOREIGN KEY(familyId) REFERENCES laptop_family(fid)
);
#插入数据
INSERT INTO laptop VALUES(1,'Apple MacBook Air1',6988.00,'流光银','详情一','2016-3-2',1,10);
INSERT INTO laptop VALUES(2,'Apple MacBook Air2',8268.00,'游戏版',NULL,'2016-3-2',1,10);
INSERT INTO laptop VALUES(NULL,'Apple MacBook Air3',7488.00,'定制版','详情三','2016-3-2',0,10);
INSERT INTO laptop VALUES(4,'联想E480C 轻薄1',3499.00,'金色版','详情四','2018-11-25',0,20);
INSERT INTO laptop VALUES(NULL,'联想E480C 轻薄2',4499.00,'游戏版','详情五','2018-11-25',1,20);
INSERT INTO laptop VALUES(NULL,'华硕RX310 超极1',4299.00,'定制版','详情六','1998-8-25',1,30);
INSERT INTO laptop VALUES(7,'华硕RX310 超极2',DEFAULT,'定制版','详情七','1998-8-25',1,30);
INSERT INTO laptop(lid,title) VALUES(8,'华硕RX310 超极3');
INSERT INTO laptop VALUES(9,'神州Ari 超本1',3699,'测试本','详情九','2015-10-2',1,50);