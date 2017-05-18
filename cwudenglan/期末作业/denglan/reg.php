<?php 
	//PHP和MySQL合体
	$username = $_POST['uname'];
	$password = $_POST['pwd'];

	if($username==null||$username==""){
		echo "注册失败！";
	}else{
		echo "注册成功！";
	}
	//1.连接数据库服务器(如果连接成功是一个对象，如果失败呢则返回一个false)
	//$link = mysqli_connect("localhost","root","") or die("数据库连接失败！");
	
	//2.设置编码
	//mysqli_set_charset($link,"utf8");
	
	//3.选择数据库
	//mysqli_select_db($link,"test");
	
	//4.定义sql语句，并发送执行(如果发送执行成功，是一个对象，如果失败，是一个false)
	//$sql = "insert into user values (null,'{$username}','{$password}')";
	//$result = mysql_query($link,$sql);
	//echo "{$sql}";
	//echo "{$result}";
	
	//5.解析结果集(判断result是否为真，并且影响行数是否大于0)
	//if($result && mysqli_affected_rows($link)>0){
		//echo "注册成功！";
		//获取新添加数据的id
		//$newid = mysqli_insert_id($link);
		//echo $newid;
	//}else{
		//echo "注册失败！";
	//}
	
	//6.关闭数据库，释放结果集
	/*mysql_free_result($result);
	mysqli_close($link);*/
?>