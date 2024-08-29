//切换商品展示区中的图像
function changeGoodsImage(thumb) {
    //设置当前缩略图在商品展示区显示对应的大图
    var showGoodsPicture = document.getElementById("showGoodsPicture");   
    showGoodsPicture.src = thumb.src;
    //获取商品缩略图对应的li元素集合
    var goodsList = document.getElementById("goodsList");
    var items=goodsList.getElementsByTagName("li");
    //遍历li元素集合，将所有的图像边框颜色改为默认样式
    for (var i = 0; i < items.length; i++) {
        var thumbImages=items[i].getElementsByTagName("img");
        thumbImages[0].style.borderColor = "";
    }
    //设置当前缩略图为选中状态
    thumb.style.borderColor = "red";
}
//Tab标签的切换
function changeGoodsInfo(obj){
    var currentSelect=0;
    var goodsTabs=document.getElementById("goodsTabs");
    //获得商品的信息标签（商品详情、商品评价、成交记录）
    var goodsTitles=goodsTabs.getElementsByTagName("li");
    for(var i=0;i<goodsTitles.length;i++){
        goodsTitles[i].className="";
        //判断当前元素对应的位置
        if(obj==goodsTitles[i]){
            currentSelect=i;
        }
    }
    //当前标签处于激活状态
    obj.className="tab_active";
    //设置标签对应的内容部分
    var middleDiv=document.getElementsByClassName("middle");
    var tabCotents=middleDiv[0].getElementsByTagName("article");
    for(var j=0;j<tabCotents.length;j++){
        if(currentSelect==j){
            tabCotents[j].className="tab_content"+(j);
        }else{
            tabCotents[j].className="none tab_content"+(j);
        }
        console.log(tabCotents[j].className);
    }
}
//在onload事件中调用zoomPicture()函数
window.onload=function(){
    //默认第一个缩略图为选中状态
    var goodsList=document.getElementById("goodsList");
    var thumb_images=goodsList.getElementsByTagName("li")[0]
        .getElementsByTagName("img");
    changeGoodsImage(thumb_images[0]);
    zoomPicture();
};