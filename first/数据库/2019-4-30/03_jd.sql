#�������ݿ⣬�������
DROP DATABASE IF EXISTS jd;

#�������ݿ�
CREATE DATABASE jd;

#����jd���ݿ�
USE jd;

#��������ѧ�����ݵı�
CREATE TABLE student(
   sid INT,#integer
   name VARCHAR(16),#variable character
   sex VARCHAR(1),
   score INT
);

#��������
INSERT INTO student VALUES('1','tom','M','82');
INSERT INTO student VALUES('2','Jerry','F','93');
INSERT INTO student VALUES('3','����','M','79');

#�޸�����
UPDATE student SET sex='M',score='100' WHERE sid='2';

#ɾ������
DELETE FROM student WHERE sid='3';

#��ѯ����
SELECT * FROM student;