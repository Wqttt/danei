#����
DROP DATABASE IF EXISTS dang;

#����
CREATE DATABASE dang;

#����
USE dang;

#��������ͼ�����ݵı�book
CREATE TABLE book(
   bid INT,
   title VARCHAR(50),
   price INT
);

#��������
INSERT INTO book VALUES('1','king','29.5');
INSERT INTO book VALUES('2','gelin','50');
INSERT INTO book VALUES('3','yujian','80');
INSERT INTO book VALUES('4','jianai','57');
INSERT INTO book VALUES('5','aiguo','28');

#ɾ������
DELETE FROM book WHERE bid='3';

#�޸�����
UPDATE book SET title='book',price='15' WHERE bid='4';

#��ѯ����
SELECT * FROM book;