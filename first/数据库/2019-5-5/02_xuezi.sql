#设置编码
SET NAMES UTF8;

#丢弃
DROP DATABASE IF EXISTS xuezi;

#创建
CREATE DATABASE xuezi CHARSET=UTF8;

#进入
USE xuezi;

#创建laptop
CREATE TABLE laptop(
   lid INT,
   title VARCHAR(64),
   price DECIMAL(7,2),
   stockCount SMALLINT,
   pubTime DATE,
   isIndex BOOL
);

#插入数据
INSERT INTO laptop VALUES('1','Apple MacBook Air 13.3','6988.00','520','2019-5-5','1');
INSERT INTO laptop VALUES('2','戴尔DELL灵越游匣15PR','5999.00','521','2019-5-5',TRUE);
INSERT INTO laptop VALUES('3','联想(ThinkPad)轻薄系','4699.00','522','2019-5-5',FALSE);
INSERT INTO laptop VALUES('4','神舟(HASEE)战神Z6-KP7GT 1','5699.00','523','2019-5-5','0');