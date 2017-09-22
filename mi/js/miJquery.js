

$(function(){ 
	let num=0;
	let t=setInterval(function(){
		move("l")
	},2000);
	
	
	$(".banner-r-left").on('click',function(){
		move("r")
	})
	$(".banner-r-right").on('click',function(){
		move("l")
	})
	$(".btn li").click(function(){
		let index = $(this).index(".btn li");
		num=index;
		move();
	})
	
	$(".banner-box>li,.btn,.banner-r-left,.banner-r-right").hover(
		function(){
		clearInterval(t);
	},function(){
		t =setInterval(function(){
			move("l")
		},2000)
	})
	
	function move(dir){
		if(dir=="l"){
			num++;
			if(num==$(".banner-box>li").length){
				num=0;
			}
		}else if(dir=="r"){
			num--;
			if(num==-1){
				num=$(".banner-box>li").length-1;
			}
		}
		$(".banner-box>li").css("display","none").eq(num).css("display","block");;
		$(".btn>li").removeClass('hot').eq(num).addClass('hot');
	}
	
	//侧导航
	$(".aside-li").hover(
		function(){
			$(this).find(".asidehid").css("display","block");	//next
		},
		function(){
			$(this).find('.asidehid').css("display","none")
		}
	)
	
	//购物车
	$(".shop").hover(function(){
		$(".shop-hid").css("height","100px");
	},function(){
		$(".shop-hid").css("height","0");
	})
	
	//下拉搜索
	$(".navi-r-left").focus(function(){
		$(".navi-right input").css("borderColor","#ff6700");
		$(".navi-right>a").css("display","none");
		$(".navi-item").css("display","block");
	}).blur(function(){
		$(".navi-right input").css("borderColor","#e0e0e0");
		$(".navi-right>a").css("display","block");
		$(".navi-item").css("display","none");
	})
	
	//下拉框
	$(".navli").hover(function(){
		$(this).children(".navi-hid").css("display","block")
		/*$(this).children(".navi-hid").animate({
			height:"230px"
		},1000)*/
	},function(){
		$(this).children(".navi-hid").css("display","none")
	})
	
	//小米明星单品
	let starN=0;
	let starFlag = true;
	let starbig = $(".star-big");
	let w = $(".star-box:first").outerWidth(true);
	starbig.css("width",`${w*$(".star-box").length}px`)
	let starT =setInterval(starFn,4000)
	function starFn(){
		if(starFlag){
			if(starN == 1){
				starFlag=false;
				return ;
			}
			starN++;
			$(".star-qie-left").addClass("abled")
			if(starN>0){
				$(".star-qie-right").removeClass("abled")
			}
		}else{
			if(starN < 1){
				starFlag=true;
				return ;
			}
			starN--;
			$(".star-qie-right").addClass("abled")
			if(starN<1){
				$(".star-qie-left").removeClass("abled")
			}
		}
		starbig.css("margin-left",`${-starN*1240}px`);
	}
	$(".star-qie-left").click(function(){
		if(starN ==0){
			return ;
		}
		$(".star-qie-right").addClass("abled")
		starN--;
		starbig.css("margin-left",`${-starN*1240}px`);
		if(starN<1){
			$(".star-qie-left").removeClass("abled")
		}
	})
	$(".star-qie-right").click(function(){
		if(starN ==1){
			return ;
		}
		$(".star-qie-left").addClass("abled")
		starN++;
		starbig.css("margin-left",`${-starN*1240}px`);
		if(starN>0){
			$(".star-qie-right").removeClass("abled")
		}
	})
	
	//智能家电
	$(".jiadian-text-right").each(function(index,obj){
		$(obj).find("li").hover(function(){
			$(obj).find("a").removeClass("znjd");
			$(obj).find("a").eq($(this).index()).addClass("znjd");
			$(".zhineng-r-box").eq(index).find(".zhineng-right").css("display","none");
			$(".zhineng-r-box").eq(index).find(".zhineng-right").eq($(this).index()).css("display","block");
		})
	})
	
	//为你推荐
	let tjN=0;
	let tjbig = $(".tuijian-big");
	let tjw = $(".tuijian-box:first").outerWidth(true);
	tjbig.css("width",`${tjw*$(".tuijian-box").length}px`)
	$(".tuijian-qie2").click(function(){
		if(tjN ==0){
			return ;
		}
		$(".tuijian-qie1").addClass("abled")
		tjN--;
		tjbig.css("margin-left",`${-tjN*1240}px`);
		if(tjN<1){
			$(".tuijian-qie2").removeClass("abled")
		}
	})
	$(".tuijian-qie1").click(function(){
		if(tjN ==3){
			return ;
		}
		$(".tuijian-qie2").addClass("abled")
		tjN++;
		tjbig.css("margin-left",`${-tjN*1240}px`);
		if(tjN>2){
			$(".tuijian-qie1").removeClass("abled")
		}
	})
	
	//内容
	
	$(".neirong-ul>li").each(function(index,obj){
		let nrN=0;
		$(obj).find(".neirong-li-b>div").each(function(i,OBJ){
			$(OBJ).click(function(){
				$(obj).find(".neirong-li-b>div").removeClass("nr")
				$(obj).find(".neirong-li-b>div").addClass("neirong-li-b2")
				$(this).addClass("nr");
				$(this).removeClass("neirong-li-b2");
				$(".nr-big").eq(index).css("margin-left",`${-i*$(".nrbody").outerWidth(true)}px`);
				nrN =i;
			})
		})
		//左切换
		$(".neirong-l").eq(index).click(function(){
			if(nrN <$(obj).find(".neirong-li-b>div").length-1){
				nrN++;
				$(".nr-big").eq(index).css("margin-left",`${-nrN*$(".nrbody").outerWidth(true)}px`);
				//点的样式
				$(obj).find(".neirong-li-b>div").removeClass("nr")
				$(obj).find(".neirong-li-b>div").addClass("neirong-li-b2")
				$(obj).find(".neirong-li-b>div").eq(nrN).addClass("nr");
				$(obj).find(".neirong-li-b>div").eq(nrN).removeClass("neirong-li-b2");
			}
		})
		//右切换
		$(".neirong-r").eq(index).click(function(){
			if(nrN >0){
				nrN--;
				$(".nr-big").eq(index).css("margin-left",`${-nrN*$(".nrbody").outerWidth(true)}px`);
				//点样式
				$(obj).find(".neirong-li-b>div").removeClass("nr")
				$(obj).find(".neirong-li-b>div").addClass("neirong-li-b2")
				$(obj).find(".neirong-li-b>div").eq(nrN).addClass("nr");
				$(obj).find(".neirong-li-b>div").eq(nrN).removeClass("neirong-li-b2");
			}
		})
	})
	
})
