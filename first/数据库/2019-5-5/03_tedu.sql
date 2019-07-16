#设置客户端连接服务器端的编码
SET NAMES UTF8;
#丢弃数据库
DROP DATABASE IF EXISTS tedu;
#创建数据库tedu,设置存储的编码为UTF8
CREATE DATABASE tedu CHARSET=UTF8;
#进入该数据库
USE tedu;
#创建保存部门数据的表dept
CREATE TABLE dept(
   did SMALLINT PRIMARY KEY,
   dname VARCHAR(16) UNIQUE,
   empCount INT
);
#插入部门数据
INSERT INTO dept VALUES(10,'研发部',3);
INSERT INTO dept VALUES(20,'市场部',2);
INSERT INTO dept VALUES(30,'运营部',2);
INSERT INTO dept VALUES(40,'人力资源部',1);
INSERT INTO dept VALUES(50,'财务部',4);
INSERT INTO dept VALUES(60,NULL,2);
INSERT INTO dept VALUES(70,NULL,3);
#创建保存员工数据的表emp
CREATE TABLE emp(
   eid INT PRIMARY KEY,
   ename VARCHAR(10) UNIQUE,
   sex BOOL,#1->男 0->女
   birthday DATE,
   salary DECIMAL(8,2) UNIQUE,
   deptId SMALLINT
);
#插入员工数据
INSERT INTO emp VALUES(1,'张三',1,'1995-5-6',4500,20);
INSERT INTO emp VALUES(2,'李四',1,'1850-1-15',5900,30);
INSERT INTO emp VALUES(3,'樱桃',1,'1997-9-6',8560,10);
INSERT INTO emp VALUES(4,'草莓',0,'1996-6-15',8950,10);
INSERT INTO emp VALUES(5,'珊珊',0,'1989-11-6',100255,20);
INSERT INTO emp VALUES(6,'小强',NULL,NULL,NULL,NULL);
INSERT INTO emp VALUES(7,'雪梨',0,'1988-10-15',199999,30);