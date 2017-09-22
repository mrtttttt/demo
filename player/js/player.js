window.onload = function(){
	let audio=document.querySelector('audio');
	let img = document.querySelector('.imgbox>img');
	let img1 = document.querySelector('.img>img');
	let song = document.querySelector('.song');
	let songer = document.querySelector('.songer');
	let lyrics = document.querySelector('.lyrics');
	
	//下方控件
	let pause = document.querySelector('.pause');
	
	//上/下一首
	let before = document.querySelector('.beforeSong');
	let after = document.querySelector('.afterSong');
	
	let mSong = document.querySelector('.mSong');
	let current = document.querySelector('.current');
	let duration = document.querySelector('.duration');
	let processBar = document.querySelector('.processBar')
	
	//音量
	let volume = document.querySelector('.volume');
	let volumeBar = document.querySelector('.volumeBar');
	let volumeBtn = document.querySelector('.volumeBtn');
	
	//播放模式
	let model = document.querySelector('.model');
	let loop = document.querySelector('.loop');
	let ran = document.querySelector('.random');
	
	let i=0;
	render(database[i]);
	
	//model
	let m=0;
	model.onclick = function(){
		model.classList.toggle('over');
	}
	ran.onclick = function(){
		this.style.top =0;
		loop.style.top = '-30px';
		m=1;
	}
	loop.onclick = function(){
		this.style.top =0;
		ran.style.top = '-30px';
		m=0;
	}
	//上一首
	before.onclick = function(){
		if(m==0){
			if(i==0){
				i=database.length;
			}
			i--;
		}else if(m==1){
			i = Math.floor(Math.random()*database.length);
		}
		render(database[i]);
		pause.innerHTML='&#xe66a;';
		audio.play();
	}
	//下一首
	after.onclick = function(){
		if(m==0){
			i++;
			if(i==database.length){
				i=0;
			}
		}else if(m==1){
			i = Math.floor(Math.random()*database.length);
		}
		render(database[i]);
		pause.innerHTML='&#xe66a;';
		audio.play();
	}
	//播放完
	audio.onended = function(){
		if(m==0){
			i++;
			if(i==database.length){
				i=0;
			}
		}else if(m==1){
			i = Math.floor(Math.random()*database.length);
		}
		render(database[i]);
		audio.play();
	}
	//播放暂停
	pause.onclick = function(){
		if(audio.paused){
			audio.play();
			this.style.marginTop='-4px';
			this.innerHTML='&#xe66a;';
		}else{
			audio.pause();
			this.innerHTML='&#xe678;';
			this.style.marginTop='0px';
		}
	}
	
	//调节音量
	volumeBtn.onmousedown = function(e){
		e.preventDefault();
		let cx = e.clientX;
		let L = this.offsetLeft;
		let pL;
		volume.onmousemove = function(e){
			e.preventDefault();
			let ox = e.clientX;
			pL = ox-cx+L;
			console.log(ox-cx)
			if(pL<=-5){
				pL=-5;
			}
			if(pL>=(volume.offsetWidth-volumeBtn.offsetWidth/2)){
				pL=(volume.offsetWidth-volumeBtn.offsetWidth/2);
			}
			volumeBtn.style.left = pL+'px';
			volumeBar.style.width = pL+5+'px';
			audio.volume=(pL+5)/100;
		}
		volumeBtn.onmouseup = function(){
			volume.onmousemove= null;
			volumeBtn.onmouseup =null;
		}
	}
	
	audio.ontimeupdate=function(){
		let ct = audio.currentTime;
		let dura = audio.duration;
		let a=Math.floor(audio.currentTime/60)>10?Math.floor(audio.currentTime/60):`0${Math.floor(audio.currentTime/60)}`;
		let b=Math.floor(audio.currentTime%60)>10?Math.floor(audio.currentTime%60):`0${Math.floor(audio.currentTime%60)}`;
		let curT = `${a}:${b}`;
		current.innerText= curT;
		processBar.style.width = `${ct/dura*100}%`;
		database[i].lyrics.forEach((ele,index)=>{
			if(ele.time==curT){
				let k=index;
				if(index<4){
					index = 0;
				}else{
					index-=4;
				}
				lyrics.innerHTML='';
				for(let j=index;j<database[i].lyrics.length;j++){
					lyrics.innerHTML+=`
						<li class="list${j}">${database[i].lyrics[j].lyric}</li>
					`;
				}
				document.querySelector(`.list${k}`).style.color = '#01E5FF';
			}
		})
		
	}
	
	function render(data){
		img.src=data.photo;
		img1.src=data.photo;
		song.innerText=data.songs;
		mSong.innerText=data.songs;
		songer.innerText=data.name;
		duration.innerText=data.alltime;
		audio.src=data.src;
		audio.volume=0.5;
		processBar.style.width='0';
		for(let i=0;i<data.lyrics.length;i++){
			lyrics.innerHTML+=`
				<li class="list${i}">${data.lyrics[i].lyric}</li>
			`;
		}
	}
}
