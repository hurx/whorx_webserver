var template = '<li class="articles-li clear-float">'+
				'<div class="article-pic float-left">'+
			    '<img src="<%img%>" alt="" class="img-responsive">'+
				'</div>'+
				'<div class="article-brief float-left">'+
				'<div class="article-title clear-float">'+
				'<a href="<%uri%>">'+
				'<div class="title-content float-left"><%name%></div>'+
				'</a>'+
				'<div class="article-category float-right"><%class%></div>'+
				'</div>'+
				'<a href="<%uri%>">'+
				'<div class="article-content"><%brief%></div>'+
				'</a>'+
				'<div class="article-create-time">@&nbsp;<%createTime%></div>'+
				'</div>'+
				'</li>';

var setTemplate = function(tpl,article){
	var re = /<%([^%>]+)?%>/g;
	while(match = re.exec(tpl)) {
		tpl = tpl.replace(match[0],article[match[1]]);
	}
	return tpl;
}


