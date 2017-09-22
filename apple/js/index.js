$(function(){
	let banul = $('.ban-ul')[0];
	let lis = document.querySelectorAll('.ban-ul>li');
	let l = document.querySelector('.ban-left');
	let r = document.querySelector('.ban-right');
	let btns = document.querySelectorAll('.ban-bottom>li');
	let now = next = 0;
	let t;
	let flag = true;
	t = setInterval(move,4000);


	for(let i=0;i<btns.length;i++){
		btns[i].onclick = function(){
			if(now ==i){return }
			btns[now].classList.remove('hot');
			btns[i].classList.add('hot');
			if(now<i){
				lis[i].style.left = '1349px';
				animate(lis[now],{left:'-1349'});
				animate(lis[i],{left:0});
			}else if(now>i){
				lis[i].style.left = '-1349px';
				animate(lis[now],{left:'1349'});
				animate(lis[i],{left:0});
			}
			now =next =i;
		}
	}
	
	
	banul.onmouseenter = function(){
		clearInterval(t);
	}
	banul.onmouseleave = function(){
		t = setInterval(move,2000);
	}
//	btn.onmouseenter = function(){
//		clearInterval(t);
//	}
//	btn.onmouseleave = function(){
//		t = setInterval(move,2000);
//	}
	
	
	
	l.onclick = function(){
		if(flag){
			flag =false;
			move();
		}
	}
	r.onclick = function(){
		if(flag){
			flag = false;
			move1();
		}
	}
	
	function move(){
		next++;
		
		if(next == lis.length){
			next = 0;
		}
		btns[now].classList.remove('hot');
		btns[next].classList.add('hot');
		lis[next].style.left = '100%';
		animate(lis[now],{left:'-1349'});
		animate(lis[next],{left:0},function(){flag = true;});
		now =next;
	}
	function move1(){
		next--;
		if(next == -1){
			next = lis.length-1;
		}
		btns[now].classList.remove('hot');
		btns[next].classList.add('hot');
		lis[next].style.left = '-1349px';
		animate(lis[now],{left:'1349'});
		animate(lis[next],{left:0},function(){
			flag = true;
		});
		now =next;
	}

})
