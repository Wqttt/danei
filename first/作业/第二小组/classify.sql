#设置编码格式
SET NAMES UTF8;

#丢弃存在数据库
DROP DATABASE IF EXISTS classify;

#创建新的数据库 book 设置编码格式
CREATE DATABASE classify CHARSET=UTF8;

#进入数据库
USE classify;

#创建数据表contents
CREATE TABLE contents(
     c_id INT PRIMARY KEY AUTO_INCREMENT,
     c_name VARCHAR(20) UNIQUE NOT NULL
);

#插入数据
INSERT INTO contents VALUES(10,'计算机类');
INSERT INTO contents VALUES(20,'医学类');
INSERT INTO contents VALUES(30,'天文类');
INSERT INTO contents VALUES(40,'生物类');
INSERT INTO contents VALUES(50,'机械类');


#创建保存计算机类数据表book
CREATE TABLE book(
     b_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
     b_name VARCHAR(20) UNIQUE NOT NULL,
     b_witer VARCHAR(10),
     b_pub VARCHAR(20),
     b_date DATE,
     b_borrow BOOL,
     c_id INT,
     FOREIGN KEY(c_id) REFERENCES contents(c_id)
);

INSERT INTO book VALUES(1,'web前端设计','某某某编写','清华大学出版社','2003-3-30',1,10);
INSERT INTO book VALUES(2,'计算机文化','帕金斯编写','机械工业出版社','2011-1-1',0,10);
INSERT INTO book VALUES(3,'java高级程序设计','Nicholas C.Zakas编写','未知','2012-03-23',1,10);
INSERT INTO book VALUES(4,'深入浅出node.js','朴灵编写','人民邮电出版社','2013-12-01',0,10);
INSERT INTO book VALUES(5,'锋利的jQuery','单东林等人编写','人民邮电出版社','2012-7-1',1,10);
INSERT INTO book VALUES(6,'中医入门','中医世家编写','中医古籍出版社','2017-01-01',1,20);
INSERT INTO book VALUES(7,'中药学专业知识','国家药品监督管理局执业药师资格认证中心编写','中国医药科技出版社','2017-12-01',1,20);
INSERT INTO book VALUES(8,'放射医学','放射世家编写','人民卫生出版社','2015-7-1',0,20);
INSERT INTO book VALUES(9,'宇宙七大奇观','J·V·纳利卡','xxx出版社','2012-03-23',1,30);
INSERT INTO book VALUES(10,'天文学新概论','苏宜','XXX出版社','2013-12-01',0,30);
INSERT INTO book VALUES(11,'星座与传说','小尾信弥','XXX出版社','2012-7-1',1,30);
INSERT INTO book VALUES(12,'自私的基因','理查德·道金斯','牛津大学出版社','1976-5-12',0,40);
INSERT INTO book VALUES(13,'现代遗传学','赵寿元','高等教育出版社','2008-6-1 ',0,40);
INSERT INTO book VALUES(14,'细胞分子生物学','不详','化学工业出版社','2009-5-1',1,40);
INSERT INTO book VALUES(15,'3D机械制图','续丹',' 机械工业出版社 ',' 2009年01月',1,50);
INSERT INTO book VALUES(16,'机械识图基础 ','魏巍','中国林业出版社 ','2010-08-01',0,50);
INSERT INTO book VALUES(17,'名画法几何及机械制图','马晓湘','华南理工大学出版社','2000-6-1',0,50);

#查询计算机类所有图书
SELECT * FROM book WHERE c_id=(SELECT c_id FROM contents WHERE c_name="计算机类");

#查询“web前端设计”该本图书是借出还是已还；
select b_borrow from book where b_name="web前端设计";

#将“web前端设计”改为“web网页设计”
UPDATE book SET b_name='web网页设计' WHERE b_name="web前端设计";

#查询出所有图书的分类
SELECT c_id FROM contents;

#创建保存用户信息表user
CREATE TABLE user(
	u_id INT PRIMARY KEY AUTO_INCREMENT,
	u_name VARCHAR(16) NOT NULL,
	u_age SMALLINT,
	u_class VARCHAR(5),
	u_sex BOOL
);
INSERT INTO user VALUES(1,'小一',18,'16级',1);
INSERT INTO user VALUES(2,'小二',25,'14级',0);
INSERT INTO user VALUES(3,'小三',19,'17级',1);
INSERT INTO user VALUES(4,'小四',21,'16级',0);
INSERT INTO user VALUES(5,'小五',23,'15级',1);

#创建管理员信息数据表admin
CREATE TABLE admin(
	a_id INT PRIMARY KEY AUTO_INCREMENT,
	a_name VARCHAR(16),
	a_sex BOOL,
	a_age SMALLINT,
	a_phone VARCHAR(11),
	c_id INT,
	FOREIGN KEY(c_id) REFERENCES contents(c_id)
);
#插入数据
INSERT INTO admin VALUES(1,'张飞',1,'18','18912345678',10);
INSERT INTO admin VALUES(2,'李信',0,'19','18312345678',10);
INSERT INTO admin VALUES(3,'王昭君','0','20','18412345678',20);
INSERT INTO admin VALUES(4,'赵云','1','18','18713245678',30);
INSERT INTO admin VALUES(6,'李白','0','20','18812345678',40);

#借阅表
CREATE TABLE borrow(
  u_id INT,
  FOREIGN KEY(u_id) REFERENCES user(u_id),
  b_id SMALLINT,
  FOREIGN KEY(b_id) REFERENCES book(b_id),
  a_id INT,
  FOREIGN KEY(a_id) REFERENCES admin(a_id),
  a_name VARCHAR(10),
  bdate DATE,
  rdate DATE
);

INSERT INTO borrow VALUES(1,1,1,'李一','2019-5-3','2019-5-10');
INSERT INTO borrow VALUES(2,2,2,'李二','2019-5-3','2019-5-10');
INSERT INTO borrow VALUES(3,3,3,'李三','2019-5-3','2019-5-10');
INSERT INTO borrow VALUES(4,4,4,'李四','2019-5-3','2019-5-10');