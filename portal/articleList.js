var articles = [];
var articlePos = "./articles/";//文章路径
var imgPos = "./imgs/";//图片路径
var addArticle = function(iname,iuri,iclass,iimg,icreatetime,ibrief){
	articles.push({name:iname, uri:articlePos+iuri, class:iclass,img:imgPos+iimg, createTime:icreatetime,brief:ibrief});
}
//新增文章加在最上面
addArticle("UI测试自动化实例","article11.html","--术业--","12.png","2016-10-24","这是一篇关于构建UI自动化测试的一篇文章，实现基于python的selenium框架。同时介绍了unittest案例组织方式，以及Cx_oracle的中文处理等。");
addArticle("摆渡人","article12.html","--闻道--","13.png","2016-10-21","也曾在南京待过一年，那是一座很有韵味的城市。只可惜，自己是不善喝酒的。 没能去见识1912，没能去见识那些传说，自然也没能过一把酒肉穿肠的瘾。");
addArticle("苏打绿是什么绿","article10.html","--闻道--","1.png","2016-04-23","苏打里哪有什么气泡，那是心思晃动出的小情绪。王国维在人间词话里提到“词以境界为上。有境界则自成高格，自有名句。”愚以为，歌曲亦如是。");
addArticle("愿无岁月可回首","article9.html","--闻道--","2.png","2016-04-08","愿无岁月可回首。让过去的过去，让未来的到来。八千年玉老，一叶枯荣，问苍天此生何必？人生如梦，刹那芳华！");
addArticle("阿里云搭建nodejs服务器不完全指北","article8.html","Node.js","3.png","2016-03-27","在搭建Node.js服务器时，记录了一些操作步骤和一些所需的琐碎细节。");
addArticle("一本正经瞎扯淡，装模作样吹牛逼","article7.html","--闻道--","4.png","2016-03-03","侠之大者，为国为民。金庸把它写在了小说里，我希望把它写在程序里。文字和程序只是不同的载体。虽然练的是三脚猫功夫，但也有颗武侠梦。");
addArticle("写在2015岁末","article6.html","--闻道--","5.png","2015-12-31","我们曾经如此渴望命运的波澜，到最后才发现，人生最曼妙的风景，竟是内心的淡定与从容。我们曾经如此期盼外界的认可，到最后才知道，世界是自己的，与他人毫无关系。");
addArticle("体脂从18到15的记录与思考","article5.html","--修身--","6.png","2015-12-27","总体是 以平均小于5%的损失，获得了平均大于20%以上的收获。即以小幅度肌肉、维度、代谢水平的减少换来了大量的脂肪减少。");
addArticle("ThanksHaving","article4.html","--闻道--","7.png","2015-11-30","遇见对的人，大概就是“一切繁复的表相都会褪去，一切喧嚣的浮世都会静好，变得简单，简单到无需刻意讨好，无需处心积虑，无需心机手段，无需防范戒备，无需步步为营，只觉得，就是他了。然后现世安稳，岁月静好，感动常在，慢慢变老。”");
addArticle("臣附议","article3.html","--闻道--","8.png","2015-10-25","江山无处埋忠骨，满朝文武皆佞臣。说到底，皇朝天下，不过嫖客相争。“持身不正，持心不纯，则权势富贵皆如云烟。无论何情何景，勿忘本心之善念。”");
addArticle("年少不再，何以荒唐","article2.html","--闻道--","9.png","2015-10-11","不知道从什么时候起，想当年披风上的“不”字已隐隐不可见。但仍旧手提三尺剑，一身素色青衣，迎风而立。与年少时一样，只是眼里看得明白，山还是山，水还是水。");
addArticle("健身的形而上学","article1.html","--修身--","10.png","2015-06-18","圈里圈外都流行一句话，健身先健脑——TRAIN SMART AS WELL AS HARD。愿灵魂和肉体，相识相知相融。");
addArticle("测试的形而上学","article0.html","--术业--","11.png","2015-06-17","知识、经验的作用是辅助思考，而不是禁锢思想。切记本末倒置。");

//根据类型，筛选文章。0.ALL;1.术业；2.闻道；3.修身；4.Python；5.FrontEnd；6.NodeJs；
var getList = function(index) {
	var homeList = [];
	var category = ["ALL", "--术业--", "--闻道--", "--修身--"]
	if(index === 0) {
		homeList = articles;
	}else if(index === 1){
		for(var i in articles){
			if((articles[i].class != category[2]) && (articles[i].class != category[3])) {
				homeList.push(articles[i]);
			}
		}
	}else{
		for(var i in articles){
			if(articles[i].class === category[index]) {
				homeList.push(articles[i]);
			}
		}
	}
	return homeList;
}

//根据生成list
var setList = function(index){
	var articleList = getList(index);
	for(var i in articleList){
		setTemplate(template,articleList[i]);
	}
}