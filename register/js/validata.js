
function onFocus(){
	this.select();
	this.style.backgroundColor="#FFEC8B";
	this.style.color="#OOOOOO";
}

function onBlur(){
	this.style.backgroundColor="#FFFFFF";
	this.style.color="#OOOOOO";
}

function checkUserName(){
	var userName=document.getElementById("userName");
	if(userName.value==""||userName.value=="请输入用户名"){
		alert("用户名不能为空！！！");
		userName.focus();
		return false;
	}
}

function checkEmail(){
	var email=document.getElementById("email");
	if(email.value==""||email.value=="请输入邮箱地址"){
		alert("邮箱地址不能为空！！！");
		return false;
	}
}

function checkPassword(){
	var userPwd=document.getElementById("userPwd").value;
	var userRePwd=document.getElementById("userRePwd").value;
	if(userPwd==""){
		alert("密码不能为空！！！");
		return false;
	}else if(userPwd.length<6||userPwd.length>20){
		alert("密码长度为6-20位，请重新输入！！！");
		return false;
	}else if(userPwd!=userRePwd){
		alert("新密码与确认密码不一致！！！");
		return false;
	}
	
	if(/\d/.test(userPwd)&&/[a-z]/i.test(userPwd)||/\d/.test(userPwd)&&/[\@\#\$\%\*]/.test(userPwd)||/[\@\#\$\%\*]/.test(userPwd)&&/[a-z]/i.test(userPwd)){
		return true;
	}else{
		alert("密码必须是由字母、数字和符号的两种以上组合！！！");
		return false;
	}
	return false;
}

function checkUName(){
	var realname=document.getElementById("realName");
	if(realname.value==""||realname.value=="请输入真实姓名"){
		alert("真实姓名不能为空！！！");
		return false;
	}
}

function checkPhone(){
	var phone=document.getElementById("mobile");
	if(phone.value==""||phone.value=="请输入手机号"){
		alert("手机号不能为空！！！");
		return false;
	}
}

function checkArea(){
	var area=document.getElementById("address");
	if(area.value==""||area.value=="请输入街道地址"){
		alert("街道地址不能为空！！！");
		return false;
	}
}

function checkForm(){
	return checkUserName()&checkEmail()&checkPassword()&checkUName()&checkPhone()&checkArea();
}