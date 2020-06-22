/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 5.7.26 : Database - procuyo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`procuyo` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `procuyo`;

/*Table structure for table `offer_data` */

DROP TABLE IF EXISTS `offer_data`;

CREATE TABLE `offer_data` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `type` int(1) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(999) COLLATE utf8_unicode_ci DEFAULT NULL,
  `minimum_risk` int(1) DEFAULT NULL,
  `loan_installment` int(5) DEFAULT NULL,
  `loan_term` int(5) DEFAULT NULL,
  `loan_min_amount` double DEFAULT NULL,
  `loan_max_amount` double DEFAULT NULL,
  `loan_min_flag` tinyint(1) NOT NULL DEFAULT '0',
  `loan_max_flag` tinyint(1) NOT NULL DEFAULT '0',
  `loan_interest_rate` double DEFAULT NULL,
  `retail_price` double DEFAULT NULL,
  `retail_stock` int(5) DEFAULT NULL,
  `retail_provider` varchar(999) COLLATE utf8_unicode_ci DEFAULT NULL,
  `insurance_fee` double DEFAULT NULL,
  `trips_destination` varchar(999) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trips_provider` varchar(999) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trips_price` double DEFAULT NULL,
  `trips_available_seats` int(5) DEFAULT NULL,
  `trips_sold_seats` int(5) DEFAULT NULL,
  `enabled` int(1) NOT NULL DEFAULT '1',
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `offer_data` */

insert  into `offer_data`(`id`,`type`,`name`,`description`,`minimum_risk`,`loan_installment`,`loan_term`,`loan_min_amount`,`loan_max_amount`,`loan_min_flag`,`loan_max_flag`,`loan_interest_rate`,`retail_price`,`retail_stock`,`retail_provider`,`insurance_fee`,`trips_destination`,`trips_provider`,`trips_price`,`trips_available_seats`,`trips_sold_seats`,`enabled`,`created_at`,`updated_at`,`deleted_at`) values 
(1,1,'testname','testdescription',1,234234,234234,222222,23423432,0,0,12,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2020-05-27','2020-05-27',NULL),
(2,2,'food','asdfadsf',1,NULL,NULL,NULL,NULL,0,0,NULL,232323,22222,'Miren',NULL,NULL,NULL,NULL,NULL,NULL,1,'2020-05-27','2020-05-28',NULL),
(5,2,'sport','sdfsdf',1,NULL,NULL,NULL,NULL,0,0,NULL,23324,234234,'Oleg',NULL,NULL,NULL,NULL,NULL,NULL,1,'2020-05-27','2020-05-27',NULL),
(6,3,'adsfadsf','asdfadsf',1,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2020-05-27','2020-05-27',NULL),
(7,3,'asdfadsf','asdfasdf',1,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,234234,NULL,NULL,NULL,NULL,NULL,1,'2020-05-27','2020-05-28',NULL),
(8,2,'electronic','asdfasdf',1,NULL,NULL,NULL,NULL,0,0,NULL,23234,234234,'Alexander',NULL,NULL,NULL,NULL,NULL,NULL,1,'2020-05-27','2020-05-28',NULL),
(9,3,'asdfasdf','asdfasdf',1,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,234234,NULL,NULL,NULL,NULL,NULL,1,'2020-05-27','2020-05-28',NULL),
(10,4,'adsfasdf','sadfadsfasdf',1,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,'asdfasdfasdf','asdfasdfa',2342342,234234,234234234,1,'2020-05-27','2020-05-27',NULL),
(11,1,'asdfasdf','asdfasdf',1,234234,234234,NULL,NULL,1,1,234234234,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'2020-05-27','2020-05-27',NULL),
(12,4,'asdfasdfasdfasdf','asdfasdfadsf',4,NULL,NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,'sdfasdfasdf','dsafasdfasdf',2324,234234,23434,1,'2020-05-28','2020-05-28',NULL);

/*Table structure for table `sales` */

DROP TABLE IF EXISTS `sales`;

CREATE TABLE `sales` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `client_id` int(10) DEFAULT NULL,
  `offer_id` int(10) DEFAULT NULL,
  `loan_amount` int(10) DEFAULT NULL,
  `seats_amount` int(10) DEFAULT NULL,
  `retail_amount` int(10) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `sales` */

insert  into `sales`(`id`,`client_id`,`offer_id`,`loan_amount`,`seats_amount`,`retail_amount`,`created_at`,`updated_at`,`deleted_at`) values 
(1,1,1,23423,0,0,'2020-06-11','2020-06-11',NULL),
(2,4,10,0,234,0,'2020-06-11','2020-06-11',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
