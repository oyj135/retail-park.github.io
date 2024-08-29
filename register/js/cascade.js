var provinces=["湖南省","河北省","山东省"];
var cities=[["岳阳市","张家界市"],["石家庄市","廊坊市"],["济南市","青岛市"]];
var areas=[
	[
		["岳阳楼区","岳阳县","平江县"],
		["永顺县","桑植县","保靖县"]
	],
	[
		["桥西区","新华区","长安区","裕华区","井陉区","鹿泉区","栾城区"],
		["安次区","广阳区","三河市","霸州市","香河县","永清县","固安县","文安县"]
	],
	[
		["市中区","历下区","天桥区","槐荫区","历城区","长清区"],
		["市南区","市北区","四方区","李沧区","城阳区","崂山区"]
	],
]

var province,city,area;

function initProvince(){
	province=document.getElementById("province");
	city=document.getElementById("city");
	area=document.getElementById("area");
	province.options.length=1;
	for(var i=0;i<provinces.length;i++){
		var option=new Option(provinces[i],provinces[i]);
		province.options.add(option);
	}
}

function provinceChange(){
	cityChange();
	city.options.length=1;
	if(province.selectedIndex==0){
		return;
	}
	var pIndex=province.selectedIndex;
	for(var i=0;i<cities[pIndex-1].length;i++){
		var optionValue=cities[pIndex-1][i];
		var option=new Option(optionValue,optionValue);
		city.options.add(option);
	}
}

function cityChange(){
	area.options.length=1;
	if(city.selectedIndex==0){
		return;
	}
	var pIndex=province.selectedIndex;
	var cIndex=city.selectedIndex;
	for(var i=0;i<areas[pIndex-1][cIndex-1].length;i++){
		var optionValue=areas[pIndex-1][cIndex-1][i];
		var option=new Option(optionValue,optionValue);
		area.options.add(option);
	}
}