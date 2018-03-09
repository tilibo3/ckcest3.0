// copyright by ZJU CS 201 LAB]
//navigation
$(".navTitle").hover(function(){$(this).children(".navList1").show();},
	function(){$(this).children(".navList1").hide();});
$(".listItem1").hover(function(){$(this).children(".navList2").show();},
	function(){$(this).children(".navList2").hide();});
$(".listItem3").hover(function(){$(this).children(".navList4").show();},
	function(){$(this).children(".navList4").hide();});	
$(".navSearchBar2 .searchSubmit2").hover(function(){
	$(this).parent().children(".searchText").show();
	$(this).parent().children(".searchText").focus();},
	function(){$(this).parent().children(".searchText").hide();});

//page mark
$(".pageNum").click(function(e) {
    $(this).siblings(".currentPage").removeClass("currentPage");
	$(this).addClass("currentPage");
});

$(".arrowhead").click(function(e){
    var before = $(this).nextAll(".currentPage")
	if(!before.prev().is(".arrowhead")){
		before.removeClass("currentPage");
		before.prev().addClass("currentPage");
	}
});
$(".arrowtail").click(function(e){
    var before = $(this).prevAll(".currentPage")
	if(!before.next().is(".arrowtail")){
		before.removeClass("currentPage");
		before.next().addClass("currentPage");
	}
});
// colors design for circle distributions
var colorStore=new Array();
colorStore[0]="#6975d1";
colorStore[1]="#9b9bd3";
colorStore[2]="#dd8e37";
colorStore[3]="#f6b319";
colorStore[4]="#ffd150";
colorStore[5]="#007f79";
colorStore[6]="#21b7a9";
//dashboard
function appendDashboardItem(hrefURL, imgSrc){
	$(".dashboardAdd").before("<span class='dashboardItem'><a class='dashboardBtn' href="+hrefURL+"><img src="+imgSrc+"?\"/></a></span>");
	}
$(".dashboardItem").hover(function(){$(this).children(".dashboardDesc").show();},
	function(){$(this).children(".dashboardDesc").hide();});

//circle percentage function
function circleSort(target,a,b,c,d,e,f,g){
	if(!a){
		a=0;
		}
	if(!b){
		b=0;
		}
	if(!c){
		c=0;
		}
	if(!d){
		d=0;
		}
	if(!e){
		e=0;
		}
	if(!f){
		f=0;
		}
	if(!g){
		g=0;
		}
	parseInt(a);
	parseInt(b);
	parseInt(c);
	parseInt(d);
	parseInt(e);
	parseInt(f);
	parseInt(g);
	var sum=a+b+c+d+e+f+g;
	var aA=(a/sum);
	var bA=(b/sum);
	var cA=(c/sum);
	var dA=(d/sum);
	var eA=(e/sum);
	var fA=(f/sum);
	var gA=(g/sum);
	
	
	var countSort=$("#countSort");
	var cc=document.getElementById(target);
    var cxt=cc.getContext("2d");
    cxt.fillStyle=colorStore[0];
    cxt.beginPath();
	cxt.moveTo(60, 60);
    cxt.arc(60,60,60,0,Math.PI*2*aA,false);
    cxt.closePath();
    cxt.fill();
	if(!a==0){
	countSort.append("<div id='countRect' class='floatLeft'><div class='rectColor floatLeft'>"+"</div><p class='fontMiddle'>"+a+"</p><p class='fontSmallestGray'>"+"Batch"+"</p></div>");
	countSort.children("div").eq(0).children("div").eq(0).css({"background-color":colorStore[0],"margin-right":"8px"});
	}
	//
	cxt.fillStyle=colorStore[1];
    cxt.beginPath();
	cxt.moveTo(60, 60);
	cxt.arc(60,60,60,Math.PI*2*aA,Math.PI*2*(aA+bA),false);
    cxt.closePath();
    cxt.fill();
	if(!b==0){
	countSort.append("<div id='countRect' class='floatLeft'><div class='rectColor floatLeft'>"+"</div><p class='fontMiddle'>"+b+"</p><p class='fontSmallestGray'>"+"Batch"+"</p></div>");
	countSort.children("div").eq(1).children("div").eq(0).css({"background-color":colorStore[1],"margin-right":"8px"});
	}
	//
	cxt.fillStyle=colorStore[2];
    cxt.beginPath();
	cxt.moveTo(60, 60);
    cxt.arc(60,60,60,Math.PI*2*(aA+bA),Math.PI*2*(aA+bA+cA),false);
    cxt.closePath();
    cxt.fill();
	if(!c==0){
	countSort.append("<div id='countRect' class='floatLeft'><div class='rectColor floatLeft'>"+"</div><p class='fontMiddle'>"+c+"</p><p class='fontSmallestGray'>"+"Batch"+"</p></div>");
	countSort.children("div").eq(2).children("div").eq(0).css({"background-color":colorStore[2],"margin-right":"8px"});
	}
	//
	cxt.fillStyle=colorStore[3];
    cxt.beginPath();
	cxt.moveTo(60, 60);
    cxt.arc(60,60,60,Math.PI*2*(aA+bA+cA),Math.PI*2*(aA+bA+cA+dA),false);
    cxt.closePath();
    cxt.fill();
	if(!d==0){
	countSort.append("<div id='countRect' class='floatLeft'><div class='rectColor floatLeft'>"+"</div><p class='fontMiddle'>"+d+"</p><p class='fontSmallestGray'>"+"Batch"+"</p></div>");
	countSort.children("div").eq(3).children("div").eq(0).css({"background-color":colorStore[3],"margin-right":"8px"});
	}
	//
	cxt.fillStyle=colorStore[4];
    cxt.beginPath();
	cxt.moveTo(60, 60);
    cxt.arc(60,60,60,Math.PI*2*(aA+bA+cA+dA),Math.PI*2*(aA+bA+cA+dA+eA),false);
    cxt.closePath();
    cxt.fill();
	if(!e==0){
	countSort.append("<div id='countRect' class='floatLeft'><div class='rectColor floatLeft'>"+"</div><p class='fontMiddle'>"+e+"</p><p class='fontSmallestGray'>"+"Batch"+"</p></div>");
	countSort.children("div").eq(4).children("div").eq(0).css({"background-color":colorStore[4],"margin-right":"8px"});
	}
	//
	cxt.fillStyle=colorStore[5];
    cxt.beginPath();
	cxt.moveTo(60, 60);
    cxt.arc(60,60,60,Math.PI*2*(aA+bA+cA+dA+eA),Math.PI*2*(aA+bA+cA+dA+eA+fA),false);
    cxt.closePath();
    cxt.fill();
	if(!f==0){
	countSort.append("<div id='countRect' class='floatLeft'><div class='rectColor floatLeft'>"+"</div><p class='fontMiddle'>"+f+"</p><p class='fontSmallestGray'>"+"Batch"+"</p></div>");
	countSort.children("div").eq(5).children("div").eq(0).css({"background-color":colorStore[5],"margin-right":"8px"});
	}
	//
	cxt.fillStyle=colorStore[6];
    cxt.beginPath();
	cxt.moveTo(60, 60);
    cxt.arc(60,60,60,Math.PI*2*(aA+bA+cA+dA+eA+fA),Math.PI*2*(aA+bA+cA+dA+eA+fA+gA),false);
    cxt.closePath();
    cxt.fill();
	if(!g==0){
	countSort.append("<div id='countRect' class='floatLeft'><div class='rectColor floatLeft'>"+"</div><p class='fontMiddle'>"+g+"</p><p class='fontSmallestGray'>"+"Batch"+"</p></div>");
	countSort.children("div").eq(6).children("div").eq(0).css({"background-color":colorStore[6],"margin-right":"8px"});
	}
	//
	cxt.fillStyle="#fff";
    cxt.beginPath();
	cxt.moveTo(60, 60);
    cxt.arc(60,60,44,0,Math.PI*2,true);
    cxt.closePath();
    cxt.fill();
	}










// 新添加部分
    $(document).ready(function(){
		var navigationArea=$("#tags");
		var elementNum=$("#classification").children(".element").length;
		for(var i=0; i<elementNum; i++){
			var obj=$("#classification").children(".element").eq(i);
			var name=obj.children().children().eq(0).attr("class");
            //var jump=obj.children().children().children().eq(0).attr("name");
            obj.eq(0).attr("id","element"+i);
            var jump= obj.eq(0).attr("id");
            //console.log(jump);
            //var jump=obj.children().children().eq(0).attr("name");
			navigationArea.append("<div><a href='#"+jump+"'class='EN_M Button floatLeft'>"+name+"</a></div>");
			}

		var navigationArea2=$("#menu-tag").children();
		//console.log("hello world");
		var elementNum2=$("#classification").children(".element").length;
		//navigationArea2.append("<ul>");
		for(var i=0; i<elementNum2; i++){
			var obj=$("#classification").children(".element").eq(i);
			var name=obj.children().children().eq(0).attr("class");
            //var jump=obj.children().children().children().eq(0).attr("name");
            obj.eq(0).attr("id","element"+i);
            var jump= obj.eq(0).attr("id");
            //console.log(jump);
            //var jump=obj.children().children().eq(0).attr("name");
			//navigationArea2.append("<div><a href='#"+jump+"'class='EN_M Button floatLeft'>"+name+"</a></div>");
			navigationArea2.append("<li><a href='#"+jump+"'>"+name+"</a></li>");
			}
		//navigationArea2.append("</ul>");

	$("#welcomePage img").click(function(){
		$(this).parent().animate({height:"0px"},600);
		$("#header").animate({height:"260px"},1200);
		})

	//
	
	// $(".element").mouseenter(function(){
	// 	//alert("accessed");
	// 	var elementHeight = $(this).height();
	// 	//
	// 	//
	// 	$(this).children(".displayView").animate({width:"65%"}, 500);
	// 	$(this).children(".displayView2").animate({width:"65%"}, 500);
	// 	$(this).children("textarea").css("height", elementHeight);
	// 	$(this).children("textarea").animate({width:"30%"}, 500);
	// 	})
	// $(".element").mouseleave(function(){
	// 	//alert("leave");
	// 	$(this).children(".displayView").css("width", "100%");
	// 	$(this).children(".displayView2").css("width", "100%");
	// 	$(this).children("textarea").css("width", "0");
	// 	})
		
		})


window.onload = function(){
  
  // var oTop = document.getElementById("toTop");
  // var screenw = document.documentElement.clientWidth || document.body.clientWidth;
  // var screenh = document.documentElement.clientHeight || document.body.clientHeight;
  // oTop.style.left = screenw - oTop.offsetWidth +"px";
  // oTop.style.top = screenh - oTop.offsetHeight + "px";
  // window.onscroll = function(){
  //   var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
  //   oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
  // }
  // oTop.onclick = function(){
  //   document.documentElement.scrollTop = document.body.scrollTop =0;
  // }
  <!--小雪改动的部分开始-->
	var starRate = document.getElementsByClassName("star");
	var heartRate = document.getElementsByClassName("heart");
	var tempstarRate = 0;
	var tempheartRate = 0;
	
	for(var i = 0, len = starRate.length; i < len; i++){
		starRate[i].index = i;
		
		starRate[i].onmouseover = function(){
			clearStar();
			for(var j = 0; j < this.index + 1; j++){
				starRate[j].style.backgroundImage="url(images/icons/blueStar.png)";
			}
		}
		
		starRate[i].onmouseout = function(){
			for(var j = 0; j < this.index + 1; j++){
				starRate[j].style.backgroundImage="url(images/icons/grayStar.png)";
			}
			currentStar(tempstarRate);
		}
		
		starRate[i].onclick = function(){
			tempstarRate = this.index + 1;
			var Rateobj = document.getElementsByClassName("RateText")[0];
			switch(this.index)
			{
				case 0 :
					Rateobj.getElementsByTagName('p')[0].innerHTML = tempstarRate + '/5 poor';
					break;
				case 1:
					Rateobj.getElementsByTagName('p')[0].innerHTML = tempstarRate + '/5 Not Bad';
					break;
				case 2 :
					Rateobj.getElementsByTagName('p')[0].innerHTML = tempstarRate + '/5 Good';
					break;
				case 3:
					Rateobj.getElementsByTagName('p')[0].innerHTML = tempstarRate + '/5 Excellent';
					break;
				case 4:
					Rateobj.getElementsByTagName('p')[0].innerHTML = tempstarRate + '/5 Awesome';
					break;
			}
			currentStar(tempstarRate);
		}
	}
	
	for(var i = 0, len = heartRate.length; i < len; i++){
		heartRate[i].index = i;
		
		heartRate[i].onmouseover = function(){
			clearHeart();
			for(var j = 0; j < this.index + 1; j++){
				heartRate[j].style.backgroundImage="url(images/icons/yellowHeart.png)";
			}
		}
		
		heartRate[i].onmouseout = function(){
			for(var j = 0; j < this.index + 1; j++){
				heartRate[j].style.backgroundImage="url(images/icons/grayHeart.png)";
			}
			currentHeart(tempheartRate);
		}
		
		heartRate[i].onclick = function(){
			tempheartRate = this.index + 1;
			var Rateobj = document.getElementsByClassName("RateText")[1];
			switch(this.index)
			{
				case 0 :
					Rateobj.getElementsByTagName('p')[0].innerHTML = tempheartRate + '/5 poor';
					break;
				case 1:
					Rateobj.getElementsByTagName('p')[0].innerHTML = tempheartRate + '/5 Not Bad';
					break;
				case 2 :
					Rateobj.getElementsByTagName('p')[0].innerHTML = tempheartRate + '/5 Good';
					break;
				case 3:
					Rateobj.getElementsByTagName('p')[0].innerHTML = tempheartRate + '/5 Excellent';
					break;
				case 4:
					Rateobj.getElementsByTagName('p')[0].innerHTML = tempheartRate + '/5 Awesome';
					break;
			}
			currentHeart(tempheartRate);
		}
	}
	
	function clearStar(){
		for(var i = 0, len = starRate.length; i < len; i++){
			starRate[i].style.backgroundImage="url(images/icons/grayStar.png)";
		}
	}
	function clearHeart(){
		for(var i = 0, len = starRate.length; i < len; i++){
			heartRate[i].style.backgroundImage="url(images/icons/grayHeart.png)";
		}
	}
	
	function currentStar(temp){
		for(var i = 0; i < temp; i++){
			starRate[i].style.background="url(images/icons/blueStar.png)";
		}
	}	
	
	function currentHeart(temp){
		for(var i = 0; i < temp; i++){
			heartRate[i].style.background="url(images/icons/yellowHeart.png)";
		}
	}
	<!--小雪改动的部分结束-->
  
}