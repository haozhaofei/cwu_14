<?php
/* 
* @Author:denglan
* @Date:   2017-05-17 19:14:57
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-17 21:34:16
*/
    $uname = $_POST['uname'];
    $pwd = $_POST['pwd'];
    //echo "hello!";

      $user=array(
        array('name'=>'denglan','pwd'=>'denglan034'),
        array('name'=>'yangying','pwd'=>'yangying02'),
        array('name'=>'yemenghan','pwd'=>'menghan018'),
        array('name'=>'xuhuaping','pwd'=>'huaping026')
        ); 

     foreach($user as $k=>$val){
        if($uname==$val['name']){
            if($pwd==$val['pwd']){
                echo "恭喜你，登录成功！";
            }else{
                echo "密码错误！";
            }
        }       
    }
?>
