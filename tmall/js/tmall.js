$(function(){
	//自动轮播
	let img = $('.banner-box')[0];
	let imgs = $('li',img);
	let now = next = 0;
	let t;
	t = setInterval(move,3000);
	let btn = $('.banner-bottom')[0];
	let btns = $('div',btn);
	
	//鼠标移入暂停
	img.onmouseenter = function(){
		clearInterval(t);
	}
	img.onmouseleave = function(){
		t = setInterval(move,3000);
	}
	
	//鼠标移入，图片切换
	for(let i=0;i<btns.length;i++){
		btns[i].onmouseenter = function(){
			btns[now].classList.remove('spot');
			btns[i].classList.add('spot');
			animate(imgs[now],{opacity:0});
			animate(imgs[i],{opacity:1});
			now = next =i;
		}
	}
	
	//移动函数
	function move(){
		next++;
		if(next == imgs.length){
			next = 0;
		}
		btns[now].classList.remove('spot');
		btns[next].classList.add('spot');
		animate(imgs[now],{opacity:0});
		animate(imgs[next],{opacity:1});
		now = next;
	}
	
	
	
	//侧导航
	let ch = window.innerHeight;
	let beauty = document.querySelectorAll('section.beauty');

	let btyArr = [];
	beauty.forEach(element=>{
		btyArr.push(element.offsetTop);
	})
	
	let btynum = 0;
	let sidenav = document.querySelector('.sidenav');
	let slis = document.querySelectorAll('.sidenav>li');
	let divs = $('div',sidenav)[1];
	
	//顶部
	divs.onclick = function(){
		animate(document.body,{scrollTop:0})
	}
	//鼠标点击
	slis.forEach(function(element,index){
		element.onclick = function(){
			animate(document.body,{scrollTop:`${btyArr[index]-70}`});
		}
	})
	
	//滚动条滚动
	let bodyFlag= bFlag =fixFlag = true;
	window.onscroll = function(){
		let bodyt = document.body.scrollTop;
		if(bodyt>620){
			if(bodyFlag){
				bodyFlag = false;				
				sidenav.style.left = '5px';
			}
		}else{
			if(!bodyFlag){
				bodyFlag = true;
				sidenav.style.left = '-40px';
			}
		}
		if(bodyt<1200){
			if(bFlag){
				bFlag = false;
				slis[0].classList.remove('active0');
			}
		}else{
			bFlag = true;
		}
		
		//侧导航颜色变化
		btyArr.forEach(function(value,index){
			if(ch+bodyt>=value+350){
				slis[btynum].classList.remove(`active${btynum}`);
				slis[index].classList.add(`active${index}`);
				btynum = index;
			}
			
		})
		
		
		//固定搜索
		let fixSe = $('.fixSearch')[0];
		if(bodyt>800){
			if(fixFlag){
				fixFlag = false;
//				fixSe.style.top = '0';
				animate(fixSe,{top:0});
			}
		}else{
			if(!fixFlag){
				fixFlag = true;
//				fixSe.style.top = '-50px';
				animate(fixSe,{top:`-50`})
			}
		}
		let fixInput = $('input',fixSe);
		fixInput[0].onfocus = function(){
			this.value= '';
		}
		fixInput[0].onblur = function(){
			this.value= '大牌原装女包';
		}
		
		
		//fixRight返回顶部
		let fixlis = document.querySelectorAll('.fixRight>ul>li');
		
		if(bodyt!=0){
			fixlis[8].style.height = '35px';
		}else{
			fixlis[8].style.height = '0';
		}
		fixlis[8].onclick = function(){
			animate(document.body,{scrollTop:0})
		}
		
		
	}
	
	
	
	//aside模块
	let aside = $('aside');
	let asidelis = document.querySelectorAll('aside>ul>li');
	
	asidelis.forEach(function(element,index){
		let content = $('.content-con',element)[0];
		element.onmouseenter = function(){
			content.style.display = 'block';
		}
		element.onmouseleave = function(){
			content.style.display = 'none';
		}
	})
	
	//header
	let headlis = document.querySelectorAll('.head-r>li');
	headlis.forEach(function(element,index){
		element.onmouseenter = function(){
			if(index == 0||index==3||index==5||index==7||index ==8){
				let headhid = $('.head-r-hid',element)[0];
				let heada = $('a',element)[0];
				if(index!=5){
					element.style.background = '#fff';
					heada.style.borderBottom = '1px solid #FF0036';
				}
				headhid.style.display = 'block';
			}
		}
		element.onmouseleave = function(){
			if(index == 0||index==3||index==5||index==7||index ==8){
				let headhid = $('.head-r-hid',element)[0];
				let heada = $('a',element)[0];
				if(index!=5){
					element.style.background = 'none';
					heada.style.borderBottom = 'none';
				}
				headhid.style.display = 'none';
			}
		}
	})
	
})
