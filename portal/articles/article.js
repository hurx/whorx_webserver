$(".weiboLink img").mouseover(function(){
	$(this).attr("src", "../imgs/weibo1.png");
});
$(".weiboLink img").mouseout(function(){
	$(this).attr("src", "../imgs/weibo0.png");
});
$(".weixinLink img").mouseover(function(){
	$(this).attr("src", "../imgs/weixin1.png");
});$(".weixinLink img").mouseout(function(){
	$(this).attr("src", "../imgs/weixin0.png");
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