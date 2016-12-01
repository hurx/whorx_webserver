var numPerPage = 8;//每页目录文章数量
var curPageNum = 0;//当前加载到第几页
var articleList = [];//根据分类获取到的文章目录
//点击分类
$(document).ready(function(){
	$(".category-li").click(function(){
		// 改变样式
		$(this).find(".category-div").css({"background-color": "#00a67c", "color": "#fff", "font-size" :"18px"});
		$(this).siblings().find(".category-div").css({"background-color": "#fff", "color": "#00a67c", "font-size" :"16px"});
		//根据index修改目录
		var index = $(this).index();
		articleList = getList(index);
		curPageNum = 0;//当前页归零
		$(".articles-ul").empty();//清空目录
		$(".next-page").hide();//隐藏下一页按钮
		for(var i in articleList){
			if(i > numPerPage -1 ){//只显示前八项
				curPageNum++;
				$(".next-page").show();
				break;
			}
			$(".articles-ul").append(setTemplate(template,articleList[i]));
		}
	});
});

window.onload = function(){
	//初始化目录
	$(".category-ul").children().first().find(".category-div").css({"background-color": "#00a67c", "color": "#fff", "font-size" :"18px"});
	articleList = getList(0);
	$(".articles-ul").empty();//清空目录
	$(".next-page").hide();//隐藏下一页按钮
	for(var i in articleList){
		if(i > numPerPage -1 ){//只显示前八项
			curPageNum++;
			$(".next-page").show();
			break;
		}
		$(".articles-ul").append(setTemplate(template,articleList[i]));
	}
}
window.onresize = function(){

}

//点击下一页
$(".next-page").click(function(){
	var lastOne = (articleList.length - curPageNum*numPerPage) < numPerPage ? articleList.length : curPageNum*numPerPage+numPerPage;
	$(".next-page").hide();//隐藏下一页按钮
	for(var i = curPageNum*numPerPage ; i < lastOne; i++){
		$(".articles-ul").append(setTemplate(template,articleList[i]));
	}
	if((articleList.length - curPageNum*numPerPage) > numPerPage){
		$(".next-page").show();//剩余数量大于8，显示下一页
		curPageNum++;
	}
});

$(".weiboLink img").mouseover(function(){
	$(this).attr("src", "./imgs/weibo1.png");
});
$(".weiboLink img").mouseout(function(){
	$(this).attr("src", "./imgs/weibo0.png");
});
$(".weixinLink img").mouseover(function(){
	$(this).attr("src", "./imgs/weixin1.png");
});$(".weixinLink img").mouseout(function(){
	$(this).attr("src", "./imgs/weixin0.png");
});

$(".weixin-pic").hide();
$(".weixinLink").mouseover(function(){
	$(".weixin-pic").show();
	$(".weixin-pic").css({"margin-top": 0-$(".weixin-pic").height()});
});
$(".weixinLink").mouseout(function(){
	$(".weixin-pic").hide();
});
$(".weixinLink").click(function(){
	$(".weixin-pic").show();
	$(".weixin-pic").css({"margin-top": 0-$(".weixin-pic").height()});
});
