window.onload = function(){
	
	//搜索框
	let shop = document.getElementsByClassName('shop')[0];
	let shophid = document.getElementsByClassName('shop-hid')[0];
	shop.onmouseenter = function(){
		shophid.style.height = '100px';
	}
	shop.onmouseleave = function(){
		shophid.style.height = 0;
	}
	
	
	//侧导航
	let banner = document.getElementsByClassName('banner');
	let asideli = document.getElementsByClassName('aside-li');
	for(let i=0;i<asideli.length;i++){
		asideli[i].onmouseenter = function(){
			let ul = this.getElementsByTagName('ul')[0];
			ul.style.display = 'block';
		}
		asideli[i].onmouseleave = function(){
			let ul = this.getElementsByTagName('ul')[0];
			ul.style.display = 'none';
		}
	}
	
	
	//图片
	let img = document.getElementsByClassName('banner-box')[0];
	let imgs = img.getElementsByTagName('li');
	let btn = document.getElementsByClassName('btn')[0];
	let btns = btn.getElementsByTagName('li');
	
	let back = document.getElementsByClassName('banner-r-left')[0];
	let forward = document.getElementsByClassName('banner-r-right')[0];
	
	//点击点
	let num= 0;
	for(let i=0;i<btns.length;i++){
		btns[i].onclick  = function(){
			btns[num].classList.remove('hot');
			btns[i].classList.add('hot');
			imgs[num].style.display = 'none'
			imgs[i].style.display = 'block';
			num = i;
		}
	}
	
	//自动播放
	let t;
	t = setInterval(fn,3000);
	//鼠标移入暂停
	img.onmouseenter = function(){
		clearInterval(t);
	}
	img.onmouseleave = function(){
		t = setInterval(fn,3000)
	}
	btn.onmouseenter = function(){
		clearInterval(t);
	}
	btn.onmouseleave = function(){
		t = setInterval(fn,3000)
	}
	
	function fn(){
		num++;
		if(num == imgs.length){
			num=0;
		}
		for(let i=0;i<imgs.length;i++){
			btns[i].classList.remove('hot');
			imgs[i].style.display = 'none';
		}
		btns[num].classList.add('hot');
		imgs[num].style.display = 'block';
	}
	
	
	//前进后退
	forward.onclick = fn;
	back.onclick = function(){
		num--;
		if(num == -1){
			num = imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			btns[i].classList.remove('hot');
			imgs[i].style.display = 'none';
		}
		btns[num].classList.add('hot');
		imgs[num].style.display = 'block';
	}
	
	
	//导航下拉列表
	let nav = document.getElementsByTagName('nav')[0];
	let navlis = nav.getElementsByClassName('navli');
	let navhids =document.getElementsByClassName('navi-hid');
	let navhid1 =document.getElementsByClassName('navi-hid1')[0];
	
	for(let i=0;i<navlis.length-2;i++){
		navlis[i].onmouseenter = function(){
			navhids[i].style.display = 'block';
		}
		navlis[i].onmouseleave = function(){
			navhids[i].style.display = 'none';
		}
	}
	
	//搜索下拉
	let naviri = document.getElementsByClassName('navi-right')[0];
	let inputs = naviri.getElementsByTagName('input');
	let search_a1 = naviri.getElementsByClassName('input-a')[0];
	let search_a2 = naviri.getElementsByClassName('input-b')[0];
	let search_item = naviri.getElementsByClassName('navi-item')[0];
	inputs[0].onfocus = function(){
		for(let i=0;i<inputs.length;i++){
			inputs[i].style.borderColor = '#ff6700';
		}
		search_item.style.display ='block';
		search_a1.style.display = 'none';
		search_a2.style.display = 'none';
	}
	inputs[0].onblur = function(){
		for(let i=0;i<inputs.length;i++){
			inputs[i].style.borderColor = '#e0e0e0';
		}
		search_item.style.display ='none';
		search_a1.style.display = 'block';
		search_a2.style.display = 'block';
	}



	//明星单品
	//第一种
	let starbig = document.getElementsByClassName('star-big')[0];
	let starleft = document.getElementsByClassName('star-qie-left')[0];
	let starright = document.getElementsByClassName('star-qie-right')[0];
	
	let child = starbig.childElementCount;
	let childW = starbig.children[0].offsetWidth + parseInt(getComputedStyle(starbig.children[0],null).marginRight);
	starbig.style.width =`${childW*10}px`;
	
	let starindex = 0;
	let flag =true;
	let star = setInterval(fnstar,4000);
	function fnstar(){
		if(flag){
			if(starindex ==1){
				flag = false;
				return ;
			}
			starleft.classList.add('abled')
			starindex++;
			if(starindex >0){
				starright.classList.remove('abled');
			}
		}else{
			if(starindex ==0){
				flag = true;
				return ;
			}
			starright.classList.add('abled');
			starindex--;
			if(starindex <1){
				starleft.classList.remove('abled');
			}
		}
		starbig.style.marginLeft = `${-1240*starindex}px`;
	}
	
	starright.onclick = function(){
		if(starindex ==1){
			return ;
		}
		starleft.classList.add('abled')
		starindex++;
		starbig.style.marginLeft = `${-1240*starindex}px`;
		if(starindex >0){
			this.classList.remove('abled');
		}
		
	}
	starleft.onclick = function(){
		if(starindex==0){
			return ;
		}
		starright.classList.add('abled');
		starindex--;
		starbig.style.marginLeft = `${-1240*starindex}px`;
		if(starindex <1){
			this.classList.remove('abled');
		}
	}
	
	
	
	
	//智能家电
	let znjd = document.getElementsByClassName('jiadian-text-right');
	let znbox = document.getElementsByClassName('zhineng-r-box');
	for(let k=0;k<4;k++){
		let znjds = znjd[k].getElementsByTagName('a');
		let znrights = znbox[k].getElementsByClassName('zhineng-right');
		for(let i=0;i<znjds.length;i++){
			znjds[i].onmouseenter = function(){
				for(let j=0;j<znrights.length;j++){
					znjds[j].classList.remove('znjd');
					znrights[j].style.display = 'none';
				}
				znjds[i].classList.add('znjd');
				znrights[i].style.display = 'block';
			}
		
		}
	}
	
	
	
	//为你推荐
	let tjbig = document.getElementsByClassName('tuijian-big')[0];
	let tjleft = document.getElementsByClassName('tuijian-qie2')[0];
	let tjright = document.getElementsByClassName('tuijian-qie1')[0];
	
	let tjbox = tjbig.childElementCount;		//总共有多少个个数
	let tjboxW = tjbig.children[0].offsetWidth + parseInt(getComputedStyle(tjbig.children[0],null).marginRight);	//一个li占的宽度

	tjbig.style.width = `${tjbox*tjboxW}px`;
	
	let tjindex = 0;

	tjleft.onclick = function(){
		if(tjindex ==0){
			return ;
		}
		tjright.classList.add('abled');
		tjindex--;
		tjbig.style.marginLeft = `${-1240*tjindex}px`;
		if(tjindex <1){
			this.classList.remove('abled');
		}
	}
	tjright.onclick= function(){
		if(tjindex ==3){
			return ;
		}
		tjleft.classList.add('abled');
		tjindex++;
		tjbig.style.marginLeft = `${-1240*tjindex}px`;
		if(tjindex >2){
			this.classList.remove('abled');
		}
	}
	

	//内容
	let nrul = document.getElementsByClassName('neirong-ul')[0];
	let nrli = nrul.getElementsByTagName('li');
	for(let i=0;i<nrli.length;i++){
		let nrspotbox = nrli[i].getElementsByClassName('neirong-li-b')[0];
		let nrspot = nrspotbox.getElementsByTagName('div');
		let nrbig = nrli[i].getElementsByClassName('nr-big')[0];
//		let nrbody = nrli[i].getElementsByClassName('nrbody');
		let nrnum = 0;
		//按钮
		for(let i=0;i<nrspot.length;i++){
			nrspot[i].onclick = function(){
				nrbig.style.marginLeft = `${-296*i}px`;
				for(let j=0;j<nrspot.length;j++){
					nrspot[j].classList.remove('nr');
					nrspot[j].classList.add('neirong-li-b2');
				}
				this.classList.remove('neirong-li-b2');
				this.classList.add('nr');
				nrnum = i;
			}
//		console.log(i);
		}
		let nrl = nrli[i].getElementsByClassName('neirong-l')[0];
		let nrr = nrli[i].getElementsByClassName('neirong-r')[0];
		nrr.onclick = function(){
			if(nrnum<nrspot.length-1){
				nrnum++;
				nrbig.style.marginLeft = `${-296*(nrnum)}px`;
			}
				for(let j=0;j<nrspot.length;j++){
					nrspot[j].classList.remove('nr');
					nrspot[j].classList.add('neirong-li-b2');
				}
				nrspot[nrnum].classList.remove('neirong-li-b2');
				nrspot[nrnum].classList.add('nr');
		}
		nrl.onclick = function(){
			if(nrnum>0){
				nrnum--;
				nrbig.style.marginLeft = `${-296*(nrnum)}px`;
			}
			for(let j=0;j<nrspot.length;j++){
					nrspot[j].classList.remove('nr');
					nrspot[j].classList.add('neirong-li-b2');
				}
				nrspot[nrnum].classList.remove('neirong-li-b2');
				nrspot[nrnum].classList.add('nr');
		}
	}
	
	
	
}
