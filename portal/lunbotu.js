//初始化
var imgs = [articles[0].img, articles[1].img, articles[2].img, articles[3].img]
var lunboDiv = $(".lunbotu");//jqObject为轮播图的父元素
var lunboBar = $(".lunbobar");
var index = 1;//一开始为第一张图片，所以index从第二张开始

//在DIV中添加图片
(function(imgs){
	for(var i in imgs) {
		lunboDiv.append('<a href="' + articles[i].uri+ '"><img class="img-responsive lunbo-img" src="' + imgs[i] + '"></a>');
	}
	lunboDiv.find("a").eq(0).siblings("a").hide();//隐藏除了第一张以为的图片
})(imgs);
//添加第0篇简介
$(".recommend-brief").text('"' + articles[0].brief + '"');
//展示序号为n的图片及简介，并修改链接
var showImg = function(n){
	lunboDiv.find("a").eq(n).fadeIn(200).siblings("a").hide();
	$(".recommend-brief").text('"' + articles[n].brief + '"');
}

//轮播
setInterval(function(){
	showImg(index);
	lunboBar.find("ul").children().eq(index).find("div").css({"height": lunboBarSize*1.5 + "px", "width": lunboBarSize*1.5 + "px", "border-radius": lunboBarSize*1.5/2 + "px", "margin-top": (0-lunboBarSize*.5)/2 + "px", "margin-left": (0-lunboBarSize*.5)/2 + "px"});
	lunboBar.find("ul").children().eq(index).siblings().find("div").css({"height": lunboBarSize + "px", "width": lunboBarSize + "px", "border-radius": lunboBarSize/2 + "px", "margin": 0});
	var len = imgs.length
	index = (index + 1) % len;
},2000);


var lunboBarSize = 8;//轮播条点的大小
var lunboPointColor = "#00a67c"; //轮播点的颜色
//添加ul并居中
lunboBar.append('<ul class="clear-float"></ul>');
lunboBar.find("ul").css({"width": lunboBarSize*2*imgs.length,"margin-left": "auto", "margin-right": "auto"});
//根据轮播图数量，添加点
for(var i in imgs) {
	lunboBar.find("ul").append('<li class="float-left"><div class="point"></div></li>');
}
lunboBar.find("ul").children().css({"height": lunboBarSize + "px", "width": lunboBarSize + "px", "margin-right": lunboBarSize});
//初始化圆点，并将第一个变大&调整位置
lunboBar.find("ul").children().find("div").css({"height": lunboBarSize + "px", "width": lunboBarSize + "px", "border-radius": lunboBarSize/2 + "px", "background-color": lunboPointColor,});
lunboBar.find("ul").children().eq(0).find("div").css({"height": lunboBarSize*1.5 + "px", "width": lunboBarSize*1.5 + "px", "border-radius": lunboBarSize*1.5/2 + "px",  "margin-top": (0-lunboBarSize*.5)/2 + "px", "margin-left": (0-lunboBarSize*.5)/2 + "px"});
//绑定点击事件
lunboBar.find("ul").children().click(function(){
	index = $(this).index();
	showImg(index);
	lunboBar.find("ul").children().eq(index).find("div").css({"height": lunboBarSize*1.5 + "px", "width": lunboBarSize*1.5 + "px", "border-radius": lunboBarSize*1.5/2 + "px", "margin-top": (0-lunboBarSize*.5)/2 + "px", "margin-left": (0-lunboBarSize*.5)/2 + "px"});
	lunboBar.find("ul").children().eq(index).siblings().find("div").css({"height": lunboBarSize + "px", "width": lunboBarSize + "px", "border-radius": lunboBarSize/2 + "px", "margin": 0});
});