$(document).ready(
	function changeState(){
		$(".Thumbup").children("img").click(function(){
			var nowPic=$(this).attr("src");
				//console.log(nowPic)
			if(nowPic=="images/Thumbup.png"){
	    		$(this).attr("src","images/Thumbup2.png");
			}
			else{
				$(this).attr("src","images/Thumbup.png");

			}
		});
		$(".Collect").children("img").click(function(){
			var nowPic=$(this).attr("src");
				//console.log(nowPic)
			if(nowPic=="images/Collect.png"){
	    		$(this).attr("src","images/Collect2.png");
			}
			else{
				$(this).attr("src","images/Collect.png");

			}
		});
		$(".Share").children("img").click(function(){
			if($('.shareList').is(':hidden')){
       			 $('.shareList').show();
       		}	        
	        else
	        { 
	        $('.shareList').hide();
	        } 
		});
		$(".box").click(function(){
			$(this).addClass("active-0");
			$(this).siblings().removeClass("active-0");
			$(".content").eq($(".choiceList li").index(this))
							.addClass("active-1")
							.siblings().removeClass("active-1");
		});

	}
)