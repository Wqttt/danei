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