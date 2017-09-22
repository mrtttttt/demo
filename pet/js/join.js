//登录注册
window.addEventListener("load",function(){
	$(".registe").click(function(){
		$(".two").css("display","none");
		$(".three").css("display","block");
	})
	$(".join").click(function(){
		$(".two").css("display","block");
		$(".three").css("display","none");
	})
	$(".two button").click(function() {
		$(".two").css("display", "none");
	})
	$(".rege").click(function(){
		$(".two").css("display","none");
		$(".three").css("display","block");
	})
	$(".joi").click(function(){
		$(".two").css("display","block");
		$(".three").css("display","none");
	})
	$(window).scroll(function(){
		var t=$("body").scrollTop();
		var tFlag=true;
		if(t>160){
			tFlag=false;
			$(".navList").css("height","60px");
		}else{
			tFlag=true;
			$(".navList").css("height","0");
		}
	})
	
})
