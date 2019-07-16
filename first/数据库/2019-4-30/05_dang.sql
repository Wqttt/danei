#丢弃
DROP DATABASE IF EXISTS dang;

#创建
CREATE DATABASE dang;

#进入
USE dang;

#创建保存图书数据的表book
CREATE TABLE book(
   bid INT,
   title VARCHAR(50),
   price INT
);

#插入数据
INSERT INTO book VALUES('1','king','29.5');
INSERT INTO book VALUES('2','gelin','50');
INSERT INTO book VALUES('3','yujian','80');
INSERT INTO book VALUES('4','jianai','57');
INSERT INTO book VALUES('5','aiguo','28');

#删除数据
DELETE FROM book WHERE bid='3';

#修改数据
UPDATE book SET title='book',price='15' WHERE bid='4';

#查询数据
SELECT * FROM book;