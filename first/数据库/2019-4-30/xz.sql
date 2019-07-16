#设置客户端连接服务器端的编码
SET NAMES UTF8;

#丢弃
DROP DATABASE IF EXISTS xz;

#创建数据库xz,设置存储的编码为UTF8
CREATE DATABASE xz CHARSET=UTF8;

#进入
USE xz;

#创建保存用户数据的表user
CREATE TABLE user(
   uid INT,
   uname VARCHAR(16),
   upwd VARCHAR(32),
   email VARCHAR(32),
   phone VARCHAR(11),
   userName VARCHAR(5),
   regTime VARCHAR(10),
   isOnline INT    #1  0
);

#插入数据
INSERT INTO user VALUES('1','king','123456','king@qq.com','18445678912','托姆','2019-1-1','1');
INSERT INTO user VALUES('2','queen','234567','queen@qq.com','13745678912','Jerry','2019-2-2','0');
INSERT INTO user VALUES('3','tian','345678','tian@qq.com','13845678912','Marry','2019-3-3','1');
INSERT INTO user VALUES('4','value','456789','value@qq.com','15245678912','Tim','2019-4-4','0');
INSERT INTO user VALUES('5','start','567894','start@qq.com','15145678912','杰克','2019-5-5','1');

#删除数据
DELETE FROM user WHERE uid='2';

#修改数据
UPDATE user SET regTime='2019-6-6' WHERE uid='4';

#查询数据
SELECT * FROM user;