/*
Navicat MySQL Data Transfer

Source Server         : aaa
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : abc

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2020-09-18 11:38:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `zhuce`
-- ----------------------------
DROP TABLE IF EXISTS `zhuce`;
CREATE TABLE `zhuce` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '序号',
  `yonghu` varchar(255) NOT NULL COMMENT '用户名',
  `youx` varchar(255) NOT NULL COMMENT '邮箱',
  `pass` varchar(255) NOT NULL COMMENT '密码',
  `quepass` varchar(255) NOT NULL COMMENT '确认密码',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhuce
-- ----------------------------
INSERT INTO `zhuce` VALUES ('1', '22334455', '1410099232@qq.com', '123456', '123456');
INSERT INTO `zhuce` VALUES ('2', '223344', '1410099232@pp.com', '123456', '123456');
INSERT INTO `zhuce` VALUES ('3', '223344', '1410099232@pp.com', '123456', '123456');
INSERT INTO `zhuce` VALUES ('4', '223344', '1410099232@pp.com', '123456', '123456');
