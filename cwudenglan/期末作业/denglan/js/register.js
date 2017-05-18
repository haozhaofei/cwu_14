/* 
* @Author: anchen
* @Date:   2017-05-14 21:27:55
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-15 21:46:30
*//*$(document).ready(function () {

   function validateForm(){

        //alert("恭喜您！注册成功！");

     return checkUserName()&&checkPassword()&&checkRepassword()&&checkHobby();
         //console.log(111111);
       
    }
  
});*/

//验证用户名（为3~16个字符，且不能包含”@”和”#”字符）
function checkUserName(){
    var name=document.getElementById("user-name").value.trim();
    var nameRegex=/^[^@#]{3,16}$/;
    if(!nameRegex.test(name)){
        document.getElementById("nameInfo").innerHTML="用户名为3~16个字符，且不能包含”@”和”#”字符";
        return false;
    }else{
        document.getElementById("nameInfo").innerHTML="";
        return true;
    }

}
//验证密码（长度在8个字符到16个字符）
function checkPassword(){
    var password=document.getElementById("password").value.trim();
    //var password=$("#password").value;
    $("#passwordInfo").innerHTML="";
    //密码长度在8个字符到16个字符，由字母、数字和".""-""_""@""#""$"组成
    //var passwordRegex=/^[0-9A-Za-z.\-\_\@\#\$]{8,16}$/;
    //密码长度在8个字符到16个字符，由字母、数字和"_"组成
    var passwordRegex=/^[0-9A-Za-z_]\w{7,15}$/;
    if(!passwordRegex.test(password)){
        document.getElementById("passwordInfo").innerHTML="密码长度必须在8个字符到16个字符之间";
        return false;
    }else{
        document.getElementById("passwordInfo").innerHTML="";
        return true;
    }
}

//验证校验密码（和上面密码必须一致）
function checkRepassword(){
    var repassword=document.getElementById("repassword").value.trim();
    var password=document.getElementById("password").value.trim();
    //校验密码和上面密码必须一致
    if(repassword==password){
        document.getElementById("repasswordInfo").innerHTML="";
        return true;
        
    }else{
        document.getElementById("repasswordInfo").innerHTML="两次输入的密码不一致";
        return false;
    }
}
//验证兴趣爱好（至少选择一项）即，多选框非空
function checkHobby(){
    var textbox=document.getElementsByName("hobby");
    $('input[type=checkbox]').click(function(){

        if($("input[name='hobby']:checked").length!=0 ) {
            return true;
        }
    });
}
    