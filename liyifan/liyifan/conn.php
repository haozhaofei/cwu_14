<?php
$conn = @mysql_connect("localhost","root","root") or die ("MySql���Ӵ���"); 
 mysql_select_db("test",$conn); 
 mysql_query("set names 'utf8'"); 
?>