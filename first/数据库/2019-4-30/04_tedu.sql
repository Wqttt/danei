#�������ݿ⣬�������
DROP DATABASE IF EXISTS tedu;

#�������ݿ�
CREATE DATABASE tedu;

#����tedu���ݿ�
USE tedu;

#��������Ա�����ݵı�
CREATE TABLE emp(
   eid INT,
   ename VARCHAR(20),
   addr VARCHAR(50),
   phone VARCHAR(11)
);

#��������
INSERT INTO emp VALUES('1','Jack','kunming','15245678912');
INSERT INTO emp VALUES('2','Rose','beijing','13756789123');
INSERT INTO emp VALUES('3','Scott','qujing','13867891234');
INSERT INTO emp VALUES('4','Lisa','xuanwei','13789123456');
INSERT INTO emp VALUES('5','Smith','laibing','15178912345');

#�޸�����

#��ѯ����
SELECT * FROM emp;