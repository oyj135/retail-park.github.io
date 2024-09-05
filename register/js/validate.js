//窗口加载完毕时，完成事件绑定
window.onload = function () {
    //1.初始化省份下拉列表
    initProvince();
    //2.为下拉列表绑定onchange事件
    province.onchange = provinceChange;
    city.onchange = cityChange;
    //3.为表单绑定表单提交事件处理函数
    var myform = document.forms[0];
    myform.onsubmit = checkForm;
    //4.为输入文本框绑定onfocus和onblur事件处理函数
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length ;i++){
        var type = inputs[i].type;
        if(type == "text" || type =="password"){
            inputs[i].onfocus = onFocus;
            inputs[i].onblur = onBlur;
        }
    }  
};
