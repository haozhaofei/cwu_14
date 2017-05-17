<?php 
$name = $_GET['name'];
if(in_array($name,array("李甜媛","叶梦晗"))){
	echo "yes";
}else{
	echo "no";
}