#丢弃数据库，如果存在
DROP DATABASE IF EXISTS jd;

#创建数据库
CREATE DATABASE jd;

#进入jd数据库
USE jd;

#创建保存学生数据的表
CREATE TABLE student(
   sid INT,#integer
   name VARCHAR(16),#variable character
   sex VARCHAR(1),
   score INT
);

#插入数据
INSERT INTO student VALUES('1','tom','M','82');
INSERT INTO student VALUES('2','Jerry','F','93');
INSERT INTO student VALUES('3','张三','M','79');

#修改数据
UPDATE student SET sex='M',score='100' WHERE sid='2';

#删除数据
DELETE FROM student WHERE sid='3';

#查询数据
SELECT * FROM student;