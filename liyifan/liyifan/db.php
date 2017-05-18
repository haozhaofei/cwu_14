<?php

//设定字符集
//header('Content-Type:text/html;charset=utf-8');

$error = array();	//保存错误信息

//连接数据库，设置字符集，选择数据库
mysql_query('set names utf8');
$link = mysql_connect('localhost','root',''); 
$db_selected=mysql_select_db("test",$link); 
var_dump($db_selected); die;
$username = "xxx";
$password = "xxxx";

//拼接SQL语句
$sql = "insert into `user` (`id`,`username`,`password`) values (null,'$username','$password')";
$rst = mysql_query($sql,$link);
var_dump($rst); die;
	//获取新注册用户的ID
	$id = mysql_insert_id();
