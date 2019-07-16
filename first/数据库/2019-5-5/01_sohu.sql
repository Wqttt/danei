#设置客户端连接服务器端的编码UTF8
SET NAMES UTF8;

#丢弃
DROP DATABASE IF EXISTS sohu;

#创建，设置存储编码
CREATE DATABASE sohu CHARSET=UTF8;

#进入
USE sohu;

#创建保存新闻数据的表news
CREATE TABLE news(
   nid INT,
   title VARCHAR(32),
   pubTime VARCHAR(10),
   origin VARCHAR(10),
   content VARCHAR(200)
);

#插入数据
INSERT INTO news VALUES('1','昆明持续高温','2019-5-5','气象局','据报道，昆明地区将持续高温');
INSERT INTO news VALUES('2','青年榜样习近平','2019-5-4','央视网','习近平的青春成长故事常被提起。');
INSERT INTO news VALUES('3','练就过硬本领，锤炼品德修为','2019-5-3','新华社','千锤百炼才能造就英才，珍惜韶华方能不负青春。');
INSERT INTO news VALUES('4','奋斗是青春最亮丽的底色','2019-5-2','人民日报','“奋斗精神一点都不能少，中国青年永久奋斗的好传统一点都不能丢。”');
INSERT INTO news VALUES('5','“青山遮不住，毕竟东流去” ','2019-5-1','人民日报','越走近世界舞台中央，聚光灯光线越强。');
INSERT INTO news VALUES('6','今天昆明持续高温','2019-5-8','中国气象局','据报道，昆明地区将持续高温');
INSERT INTO news VALUES('7','今天昆明持续高温','2019-5-9','中国气象局','据报道，昆明地区将持续高温');

#修改
UPDATE news SET title='清洁能源让青海更“风光”',origin='人民日报',content='刺眼的阳光，白花花、毒辣辣，晒黑了脸、灼脱了皮。' WHERE nid='6';

#删除
DELETE FROM news WHERE nid='7';

#查询数据
SELECT * FROM news;