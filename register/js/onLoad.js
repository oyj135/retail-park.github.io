window.onload=function(){
	initProvince();
	province.onchange=provinceChange;
	city.onchange=cityChange;
	var myform=document.forms[0];
	myform.onsubmit=checkForm;
	var inputs=document.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
		var type=inputs[i].type;
		if(type=="text"||type=="password"){
			inputs[i].onfocus=onFocus;
			inputs[i].onblur=onBlur;
		}
	}
	document.getElementById("tj1").onclick=function(){
	var userName=document.getElementById("userName").value;
	var userPwd=document.getElementById("userPwd").value;
	var email=document.getElementById("email").value;
	var realName=document.getElementById("realName").value;
	var mobile=document.getElementById("mobile").value;
	
	window.localStorage.setItem('用户名',userName);
	window.localStorage.setItem('邮箱地址',email);
	window.localStorage.setItem('密码',userPwd);
	window.localStorage.setItem('真实姓名',realName);
	window.localStorage.setItem('电话',mobile);
	
	window.location="DL.html";
	}
}



