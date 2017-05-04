<?php 
$name = $_GET['name'];
if(in_array($name,array("1,2"))){
	echo "yes";
}else{
	echo "no";
}