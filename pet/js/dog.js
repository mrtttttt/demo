$(function(){
	let lis = $(".banner-box li");
	let btns = $(".btn li");
	let next=0;
	let t = setInterval(move,4000);
	function move(){
		next++;
		if(next==6){
			next=0;
		}
		lis.css("opacity","0").eq(next).css("opacity","1");
		btns.removeClass("hot").eq(next).addClass("hot");
	}
	btns.click(function(){
		let btnIndex=$(this).index();
		lis.css("opacity","0").eq(btnIndex).css("opacity","1");
		btns.removeClass("hot").eq(btnIndex).addClass("hot");
		next=btnIndex;
	})
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(move,4000);
	})
})
