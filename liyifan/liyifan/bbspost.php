<?php 
include("conn.php");
$title = $_POST["title"]; //获取title 
$content = $_POST["content"]; //获取content 
$username = $_POST["username"]; //获取username 
$threadId = $_POST["threadid"]; //获取threadid 

 
$sql="insert into bbs_post (title,content,username,threadid) " . 
    "values ('$title','$content','$username','$threadId')"; 
   mysql_query($sql); 
  //传回最后一次使用 INSERT 指令的 ID 
 $responseId=mysql_insert_id(); 
 echo $responseId; 
?> 