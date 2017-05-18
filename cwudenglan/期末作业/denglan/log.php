<?php 
	//PHP和MySQL合体
	$user = $_POST['uname'];
    $pwd = $_POST['pwd'];
	//1.连接数据库服务器(如果连接成功是一个对象，如果失败呢则返回一个false)
	$link = mysqli_connect("localhost","root","") or die("数据库连接失败！");
	
	//2.设置编码
	mysqli_set_charset($link,"utf8");
	
	//3.选择数据库
	mysqli_select_db($link,"test");
	
	//4.定义sql语句，并发送执行(如果发送执行成功，是一个对象，如果失败，是一个false)
	$sql = "select * from user where username='{$user}';";
	$result = mysqli_query($link,$sql);
	
	
		
	//5.解析结果集
	if($result && mysqli_num_rows($result)>0){
		$rows = mysqli_fetch_assoc($result);
		if($rows['password']=='{$pwd}'){
			echo "登录成功！";
		}else{
			echo "密码错误！";
		}
	}else{
		die("手机号不正确！");
	}
	
	//6.关闭数据库，释放结果集
	mysqli_free_result($result);
	mysqli_close($link);
?>