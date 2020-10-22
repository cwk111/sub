/*
Navicat MySQL Data Transfer

Source Server         : aaa
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : abc

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2020-09-18 11:38:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `login`
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '序号',
  `name` varchar(255) NOT NULL COMMENT '姓名',
  `pass` varchar(255) NOT NULL COMMENT '密码',
  `scoer` float(10,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1', '张三', '123456', '99');
INSERT INTO `login` VALUES ('2', '丽丽', '1234', '100');
INSERT INTO `login` VALUES ('3', '天文', '456', '89');
