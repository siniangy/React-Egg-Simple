show databases;
create database test;
use test;

CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8; 

alter table runoob_tbl rename to user;
alter table user drop runoob_title;
alter table user change runoob_id id int;
alter table user change runoob_author user_name varchar(40);
alter table user change submission_data create_date date;
insert into user (id,user_name,create_date) values (1,'sinian',NOW());
alter table user modify id int auto_increment;
insert into user (user_name,create_date) values ('gy',NOW());
delete from user; // 保留自增
truncate table user; // 不保留自增
alter table user change create_date create_date vachar(40);
insert into user (id,user_name,create_date) values(1,'小黄鸭','2020-07-11');
insert into user (user_name,create_date) values('小黄鸡','2020-07-11')
