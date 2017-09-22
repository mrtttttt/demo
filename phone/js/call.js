window.onload = function(){
    let dl = document.querySelector('dl');
	let aside = document.querySelector('.aside');
    let tip = document.querySelector('.tip');
    let header = document.querySelector('header');
    let input = document.querySelector('header>input');
    let height = header.offsetHeight;
    let tipH = header.offsetHeight;
    let fh = height+tipH;
	let add = document.querySelector(".add");
	let remove = document.querySelector(".remove");
	let submit = document.querySelector(".submit");
	let view = document.querySelector(".view");
	let hid = document.querySelector(".hid");
    
    //获取data
    let data = [
		{"name":"李茹","phone":"15582408548","eng":"liru"},
		{"name":"李默然","phone":"17835424211","eng":"limoran"},
		{"name":"王婷婷","phone":"17835423011","eng":"wangtingting"},
		{"name":"薛倪萍","phone":"18234401545","eng":"xueniping"},
		{"name":"胡莹玮","phone":"17835424209","eng":"huyingwei"},
		{"name":"郭鹏勇","phone":"17835424170","eng":"guopengyong"},
		{"name":"齐传峰","phone":"17835424911","eng":"qichuanfeng"},
		{"name":"薛阳飞","phone":"17835422205","eng":"xueyangfei"},
        {"name":"默然","phone":"17835424211","eng":"moran"},
        {"name":"婷婷","phone":"17835423011","eng":"tingting"},
        {"name":"倪萍","phone":"18234401545","eng":"niping"},
        {"name":"莹玮","phone":"17835424209","eng":"yingwei"},
        {"name":"鹏勇","phone":"17835424170","eng":"pengyong"},
        {"name":"传峰","phone":"17835424911","eng":"chuanfeng"},
        {"name":"阳飞","phone":"17835422205","eng":"yangfei"}
	];
	
	
    let newData = getData();
    render(newData);
    input.onkeyup = function () {
        let val = this.value.trim();
		let filter = newData.filter(function (element) {
			return element.name.includes(val)||element.phone.includes(val)||element.eng.includes(val);
        })
		render(filter);
		add.style.display = "none";
    }
    input.onblur = function(){
    	if(input.value ==''){
			add.style.display = "block";
    	}
    }
	



    //展示
    function render(data) {
        let dataObj = {};
        data.forEach(element=>{
			let first = element.eng.charAt(0).toUpperCase();
			if(!dataObj[first]){
				dataObj[first] =[];
			}
			dataObj[first].push(element);
		})
		let keys = Object.keys(dataObj).sort();
		dl.innerHTML = '';
		aside.innerHTML = '';
        keys.forEach(element=>{
            aside.innerHTML+= `
				<li>${element}</li>
				`;
			dl.innerHTML += `
				<dt>${element}</dt>
			`;
			dataObj[element].forEach(value=>{
				dl.innerHTML +=`
					<dd>
						<a href="tel:${value.phone}">${value.name}</a>
						<div>删除</div>
					</dd>
				`;
			})
		})

		//删除
		let dd = document.querySelectorAll("dl dd");
		dd.forEach(function(obj,index){
			let delDiv = obj.querySelector("div");
			obj.addEventListener("touchstart",function(e){
				let touch1 = e.changedTouches[0];
				let ox = touch1.clientX;
				obj.addEventListener("touchmove",function(e){
					let touch2 = e.changedTouches[0];
					let cx = touch2.clientX;
					if(ox-cx > 30){
						document.querySelectorAll("dl dd div").forEach(obj=>{
							obj.style.width = 0;
						})
						delDiv.style.width = "1rem";
					}
					if(cx-ox > 30){
						delDiv.style.width = "0";
					}
				})
			})
			delDiv.onclick = function(){
				let delName = this.previousElementSibling.innerText;
				data.forEach(function(obj,index){
					if(obj.name ==delName){
						data.splice(index,1)
					}
				})
				localStorage.setItem('data',JSON.stringify(data))
				newData = JSON.parse(localStorage.data);
	    		render(newData);
			}
		})
		

		//提交添加的
		add.onclick = function(){
			view.style.display = "none";
			hid.style.display = "block";
		}
		remove.onclick = function(){
			hid.style.display = "none";
			view.style.display = "block";
		}
		let inputs = document.querySelectorAll("form input");
		let valArr=[];
		submit.onclick = function(){
			inputs.forEach(function(obj,index){
				if(obj.value !=''){
					valArr.push(obj.value)
				}
			})
			data.push({"name":valArr[0],"phone":valArr[1],"eng":valArr[2]})
	    	localStorage.setItem('data',JSON.stringify(data))
			/*newData = JSON.parse(localStorage.data);
			render(newData);
			hid.style.display = "none";
			view.style.display = "block";*/
			location.href='call.html';
		}
		
		
		//提示栏，侧边栏
        tip.innerText = keys[0]?keys[0]:'';
        let arr = [];
        let asideli = document.querySelectorAll('.aside>li');
		aside.style.marginTop = `-${aside.offsetHeight/2}px`;

        let dts = document.querySelectorAll('dl>dt');
        dts.forEach(function (element) {
            element.style.background = `${bgColor()}`;
            arr.push(element.offsetTop);
            window.onscroll = function () {
                let st = document.body.scrollTop;
                arr.forEach((element,index)=>{
                    if(element + dts[0].offsetHeight/2 < fh+ st){
                    	asideli.forEach(ele=>{ele.style.background = 'none';ele.style.color = '#1E2D41'})
                        asideli[index].style.background = '#FEBF23';
                        asideli[index].style.color = '#fff';
                        tip.innerText = keys[index];
                    }
				})
            }
        })
       
        
		
		
    }
	function getData(){
		let dt = localStorage.getItem('data')?JSON.parse(localStorage.data):false;
		if(!dt){
			localStorage.setItem('data',JSON.stringify(data));	//添加localStroage
			let dt = JSON.parse(localStorage.data);
		}
		return dt;
	}
	
	







	//随机颜色
	function bgColor(){
		let r = Math.floor(Math.random()*256);
		let g = Math.floor(Math.random()*256);
		let b = Math.floor(Math.random()*256);
		return `rgb(${r},${g},${b})`;
	}
}
