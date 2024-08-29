window.onload=function(){
	document.getElementById("dl").onclick=function(){
		var yhm=window.localStorage.getItem('用户名');
		var mm=window.localStorage.getItem('密码');
		var yhm1=document.getElementById("yhm1").value;
		var mm1=document.getElementById("userPwd1").value;
		var Ftk=document.getElementById("ft");
		if(Ftk.checked!=true){
			alert("未选中用户条例！！！");
		}else if(yhm1==""||yhm1=="请输入用户名"||mm1==""||mm1=="请输入密码"){
			alert("账号或密码为空！！！")
		}else if(yhm==yhm1&&mm==mm1){
			alert("登陆成功！！！");
			window.location="../aa/index.html";
		}else{
			alert("账号或密码错误！！！");
		}
	}
}

