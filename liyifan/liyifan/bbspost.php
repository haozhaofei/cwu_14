<?php 
include("conn.php");
$title = $_POST["title"]; //��ȡtitle 
$content = $_POST["content"]; //��ȡcontent 
$username = $_POST["username"]; //��ȡusername 
$threadId = $_POST["threadid"]; //��ȡthreadid 

 
$sql="insert into bbs_post (title,content,username,threadid) " . 
    "values ('$title','$content','$username','$threadId')"; 
   mysql_query($sql); 
  //�������һ��ʹ�� INSERT ָ��� ID 
 $responseId=mysql_insert_id(); 
 echo $responseId; 
?> 