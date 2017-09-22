$(function(){
	
	//header
	$(".head-r li").hover(function(){
		$(this).find(".head-r-hid").css("display","block");
		$(this).find(".head-r-hid").parent(".head-r li").css("background","#fff");
	},function(){
		$(this).find(".head-r-hid").css("display","none");
		$(this).find(".head-r-hid").parent(".head-r li").css("background","none");
		
	})
	//侧边菜单
	$(".banner>main li").hover(function(){
		$(this).children(".content-con").css("display","block")
	},function(){
		$(this).children(".content-con").css("display","none")
	})
	
	//轮播
	let num=0;
	let tmallT =setInterval(move,3000);
	function move(){
		num++;
		if(num==$(".banner-box li").length){
			num=0;
		}
		$(".banner-box li").animate({opacity:"0.1","z-index":"1"},300);
		$(".banner-box li").eq(num).animate({opacity:"1","z-index":"2"},300);
		$(".banner-bottom div").removeClass("spot")
		$(".banner-bottom div").eq(num).addClass("spot")
	}
	//轮播点
	$(".banner-bottom div").click(function(){
		$(".banner-bottom div").removeClass("spot")
		$(this).addClass("spot")
		num = $(this).index();
		$(".banner-box li").animate({opacity:"0.1","z-index":"1"},300);
		$(".banner-box li").eq(num).animate({opacity:"1","z-index":"2"},300);
	})
	//移入暂停
	$(".banner-box").hover(function(){
		clearInterval(tmallT)
	},function(){
		tmallT =setInterval(move,3000);
	})
	
	//回到顶部
	$(".fixRight li").last().click(function(){
		$("body").animate({scrollTop:0},200)
	})
	$(".sidenav div").last().click(function(){
		$("body").animate({scrollTop:0},200)
	})
	
	//侧导航
	let arr=[];
	$(".sidenav li").each(function(index,obj){
		arr.push($("section.beauty").eq(index).offset().top)
	})
	$(".sidenav li").click(function(){
		let that=this;
		$(".sidenav li").removeClass();
		$("body").animate({scrollTop:`${arr[$(that).index(".sidenav li")]-70}`});
		$(this).addClass(`active${$(that).index(".sidenav li")}`)
	})
	
	let bodyFlag= bFlag =fixFlag=fFlag = true;
	$(window).scroll(function(){
		let bodyT = $("body").scrollTop();
		//侧导航显示
		if(bodyT>620){
			if(bodyFlag){
				bodyFlag=false;
				$(".sidenav").css("left","5px")
			}
		}else{
			if(!bodyFlag){
				bodyFlag=true;
				$(".sidenav").css("left","-40px")
			}
		} 
		//顶部搜索框显示
		if(bodyT>800){
			if(fixFlag){
				fixFlag=false;
				$(".fixSearch").animate({top:0},300)
			}
		}else{
			if(!fixFlag){
				fixFlag=true;
				$(".fixSearch").animate({top:-50},300)
			}
		} 
		//右侧回到顶部显示
		if(bodyT!=0){
			if(fFlag){
				fFlag = false;
				$(".fixRight li").last().css("height","35px")
			}
		}else{ 
			if(!fFlag){
				fFlag=true;
				$(".fixRight li").last().css("height","0px")
			}
		}
		
		//去掉li的颜色
		if(bodyT<1200){
			if(bFlag){
				bFlag =false;
				$(".sidenav li").removeClass();
			}
		}else{
			if(bFlag){
				bFlag =true;
			}
		} 
		
		//侧导航颜色变化
		arr.forEach(function(value,index){
			if(value <= bodyT+300){
				$(".sidenav li").removeClass();
				$(".sidenav li").eq(index).addClass(`active${index}`)
			}
		})
	})
})
