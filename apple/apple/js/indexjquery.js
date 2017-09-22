$(function(){
	var now =next=0;
	var lis = $(".ban-ul li")
	var btns = $(".ban-bottom li");
	var flag=true;
	var appleT=setInterval(move,2000);
	
	btns.click(function(){
		var wid=lis.eq(0).width();
		var index=$(this).index();
		if(index==now){return;}
		btns.removeClass("hot");
		$(this).addClass("hot");
		if(index>now){
			lis.eq(index).css("left",wid);
			lis.eq(now).animate({left:-wid},500);
			lis.eq(index).animate({left:0},500);
		}else if(index<now){
			lis.eq(index).css("left",-wid);
			lis.eq(now).animate({left:wid},500);
			lis.eq(index).animate({left:0},500);
		}
		next=now=index;
	})
	
	$(".ban-ul").hover(function(){
		clearInterval(appleT);
	},function(){
		appleT=setInterval(move,2000)
	})
	
	$(".ban-left").click(function(){
		if(flag){
			flag=false;
			move();
		}
	})
	$(".ban-right").click(function(){
		if(flag){
			flag=false;
			move1();
		}
	})
	
	function move(){
		var wid=lis.eq(0).width();
		next++;
		if(next==3){
			next=0;
		}
		lis.eq(next).css("left",wid);
		lis.eq(now).animate({left:-wid},500);
		lis.eq(next).animate({left:0},500,function(){flag=true;});
		btns.removeClass("hot");
		btns.eq(next).addClass("hot");
		now=next;
	}
	function move1(){
		var wid=lis.eq(0).width();
		next--;
		if(next==-1){
			next=2;
		}
		lis.eq(next).css("left",-wid);
		lis.eq(now).animate({left:wid},500);
		lis.eq(next).animate({left:0},500,function(){
			flag=true;
		});
		btns.removeClass("hot");
		btns.eq(next).addClass("hot");
		now=next;
	}
})
