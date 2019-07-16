#丢弃数据库，如果存在
DROP DATABASE IF EXISTS tedu;

#创建数据库
CREATE DATABASE tedu;

#进入tedu数据库
USE tedu;

#创建保存员工数据的表
CREATE TABLE emp(
   eid INT,
   ename VARCHAR(20),
   addr VARCHAR(50),
   phone VARCHAR(11)
);

#插入数据
INSERT INTO emp VALUES('1','Jack','kunming','15245678912');
INSERT INTO emp VALUES('2','Rose','beijing','13756789123');
INSERT INTO emp VALUES('3','Scott','qujing','13867891234');
INSERT INTO emp VALUES('4','Lisa','xuanwei','13789123456');
INSERT INTO emp VALUES('5','Smith','laibing','15178912345');

#修改数据

#查询数据
SELECT * FROM emp;