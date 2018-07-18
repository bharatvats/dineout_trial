-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: dineout
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking_orders`
--

DROP TABLE IF EXISTS `booking_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `booking_orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `restaurant_id` int(11) DEFAULT NULL,
  `offer_availed_id` int(11) DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `guest_count` int(11) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `booking_time` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `bill_amount` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_offer_id` (`offer_availed_id`),
  KEY `FK_BookRest` (`restaurant_id`),
  CONSTRAINT `FK_BookRest` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`),
  CONSTRAINT `fk_offer_id` FOREIGN KEY (`offer_availed_id`) REFERENCES `offers` (`offer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_orders`
--

LOCK TABLES `booking_orders` WRITE;
/*!40000 ALTER TABLE `booking_orders` DISABLE KEYS */;
INSERT INTO `booking_orders` VALUES (1,1,1,'shah',5,'1000000000','2018-07-20 21:00:00','2018-07-18 18:04:38',1000),(2,1,2,'Dikne',1,'2300000000','2018-07-20 21:00:00','2018-07-18 18:05:16',1000),(3,1,3,'Dikne',1,'2300000000','2018-07-21 21:00:00','2018-07-18 18:05:30',1000);
/*!40000 ALTER TABLE `booking_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offers` (
  `offer_id` int(11) NOT NULL AUTO_INCREMENT,
  `restaurant_id` int(11) DEFAULT NULL,
  `offer_name` varchar(50) DEFAULT NULL,
  `discount_val` int(11) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`offer_id`),
  KEY `FK_RestOffer` (`restaurant_id`),
  CONSTRAINT `FK_RestOffer` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (1,1,'50% Off on IMFL',50,'2018-07-16 12:00:00','2018-07-17 19:00:00',1),(2,1,'50% Off on IMFL',50,'2018-07-16 12:00:00','2018-07-24 19:00:00',1),(3,1,'20% Off on IMFL',20,'2018-07-16 12:00:00','2018-07-24 19:00:00',1),(4,2,'20% Off on itl',20,'2018-07-16 12:00:00','2018-07-24 19:00:00',1),(5,2,'10% Off on lim',10,'2018-07-16 12:00:00','2018-07-24 19:00:00',1),(6,3,'20% Off on ess',20,'2018-07-16 12:00:00','2018-07-24 19:00:00',1),(7,3,'30% Off on itl',30,'2018-07-16 12:00:00','2018-07-24 19:00:00',1),(8,4,'40% Off on night',40,'2018-07-16 12:00:00','2018-07-24 19:00:00',1),(9,4,'50% Off on ravi',50,'2018-07-16 12:00:00','2018-07-24 19:00:00',1),(10,5,'50% Off on IMFL',50,'2018-07-16 12:00:00','2018-07-24 19:00:00',1),(11,6,'40% Off on Corporate',40,'2018-07-16 12:00:00','2018-07-24 19:00:00',1),(12,6,'50% Off on sangaria',50,'2018-07-16 12:00:00','2018-07-24 19:00:00',1);
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant_timings`
--

DROP TABLE IF EXISTS `restaurant_timings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurant_timings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day` tinyint(4) DEFAULT NULL,
  `opening_time` time DEFAULT NULL,
  `closing_time` time DEFAULT NULL,
  `restaurant_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_TimingRest` (`restaurant_id`),
  CONSTRAINT `FK_TimingRest` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_timings`
--

LOCK TABLES `restaurant_timings` WRITE;
/*!40000 ALTER TABLE `restaurant_timings` DISABLE KEYS */;
INSERT INTO `restaurant_timings` VALUES (1,0,'12:00:00','21:00:00',1),(2,1,'12:00:00','21:00:00',1),(3,2,'12:00:00','21:00:00',1),(4,3,'12:00:00','21:00:00',1),(5,4,'12:00:00','21:00:00',1),(6,5,'12:00:00','21:00:00',1),(7,6,'12:00:00','21:00:00',1),(8,0,'12:00:00','22:00:00',2),(9,1,'12:00:00','22:00:00',2),(10,2,'12:00:00','22:00:00',2),(11,3,'12:00:00','22:00:00',2),(12,4,'12:00:00','22:00:00',2),(13,5,'12:00:00','22:00:00',2),(14,6,'12:00:00','22:00:00',2),(15,0,'12:00:00','20:00:00',3),(16,1,'12:00:00','20:00:00',3),(17,2,'12:00:00','20:00:00',3),(18,3,'12:00:00','20:00:00',3),(19,4,'12:00:00','20:00:00',3),(20,5,'12:00:00','20:00:00',3),(21,6,'12:00:00','20:00:00',3),(22,0,'12:00:00','20:00:00',4),(23,1,'12:00:00','20:00:00',4),(24,2,'12:00:00','20:00:00',4),(25,3,'12:00:00','20:00:00',4),(26,4,'12:00:00','20:00:00',4),(27,5,'12:00:00','20:00:00',4),(28,6,'12:00:00','20:00:00',4),(29,0,'12:00:00','20:00:00',5),(30,1,'12:00:00','20:00:00',5),(31,2,'12:00:00','20:00:00',5),(32,3,'12:00:00','20:00:00',5),(33,4,'12:00:00','20:00:00',5),(34,5,'12:00:00','20:00:00',5),(35,6,'12:00:00','20:00:00',5),(36,0,'12:00:00','18:00:00',6),(37,1,'12:00:00','18:00:00',6),(38,2,'12:00:00','18:00:00',6),(39,3,'12:00:00','18:00:00',6),(40,4,'12:00:00','18:00:00',6),(41,5,'12:00:00','18:00:00',6),(42,6,'12:00:00','18:00:00',6),(43,0,'12:00:00','18:00:00',7),(44,1,'12:00:00','18:00:00',7),(45,2,'12:00:00','18:00:00',7),(46,3,'12:00:00','18:00:00',7),(47,4,'12:00:00','18:00:00',7),(48,5,'12:00:00','18:00:00',7),(49,6,'12:00:00','18:00:00',7),(50,0,'09:00:00','18:00:00',8),(51,1,'09:00:00','18:00:00',8),(52,2,'09:00:00','18:00:00',8),(53,3,'09:00:00','18:00:00',8),(54,4,'09:00:00','18:00:00',8),(55,5,'09:00:00','18:00:00',8),(56,6,'09:00:00','18:00:00',8),(57,0,'09:00:00','20:00:00',9),(58,1,'09:00:00','20:00:00',9),(59,2,'09:00:00','20:00:00',9),(60,3,'09:00:00','20:00:00',9),(61,4,'09:00:00','20:00:00',9),(62,5,'09:00:00','20:00:00',9),(63,6,'09:00:00','20:00:00',9),(64,0,'09:00:00','20:00:00',10),(65,1,'09:00:00','20:00:00',10),(66,2,'09:00:00','20:00:00',10),(67,3,'09:00:00','20:00:00',10),(68,4,'09:00:00','20:00:00',10),(69,5,'09:00:00','20:00:00',10),(70,6,'09:00:00','20:00:00',10);
/*!40000 ALTER TABLE `restaurant_timings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `features` varchar(200) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'The G.T. ROAD','Connaught Place, Central Delhi','Air Conditioned,Wifi,Parking,screening','9212340202',1000,'2018-07-17 10:05:05','2018-07-17 16:04:20',1),(2,'FLYP@MTV','Connaught Place, Central Delhi','Air Conditioned,DJ,Lift,Wifi,Parking','9212340202',2000,'2018-07-17 10:12:00','2018-07-17 16:04:31',1),(3,'Garam Dharam','Connaught Place, Central Delhi','Smoking Area,Air Conditioned,Serves Alcohol,DJ,Wifi,Parking','9212340202',1800,'2018-07-17 10:15:08','2018-07-17 16:04:40',1),(4,'Tales & Spirits','Connaught Place, Central Delhi','Home Delivery,Smoking Area,Air Conditioned,Serves Alcohol,DJ,Wifi','9212340202',1500,'2018-07-17 10:33:53','2018-07-17 16:03:53',1),(5,'Odeon Social','Connaught Place, Central Delhi','Home Delivery,Smoking Area,Air Conditioned,Serves Alcohol,DJ,Wifi','9212340202',1500,'2018-07-17 10:54:58','2018-07-17 16:24:58',1),(6,'Tamasha','Connaught Place, Central Delhi','Home Delivery,Smoking Area,Air Conditioned,valet value','9212340202',2000,'2018-07-17 10:55:48','2018-07-17 16:25:48',1),(7,'Ministry Of Beer CP','Connaught Place, Central Delhi','Home Delivery,Smoking Area,Air Conditioned,valet value','9212340202',1500,'2018-07-17 10:56:37','2018-07-17 16:26:37',1),(8,'The Masala Trail by Osama Jalali','Connaught Place, Central Delhi','Home Delivery,Smoking Area,Air Conditioned,valet value','9212340202',600,'2018-07-17 10:57:12','2018-07-17 16:27:12',1),(9,'Hot Mess Kitchen and Bar','Connaught Place, Central Delhi','Home Delivery,Smoking Area,Air Conditioned,valet value','9212340202',600,'2018-07-17 10:57:40','2018-07-17 16:27:40',1),(10,'Informal By Imperfecto','Connaught Place, Central Delhi','Home Delivery,Smoking Area,Air Conditioned,valet value','9212340202',600,'2018-07-17 10:58:04','2018-07-17 16:28:04',1);
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-18 18:12:04
