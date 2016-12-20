/*add window onload event*/

window.onload = function(){
	var shitou = document.getElementById('shitou');
	var jiandao = document.getElementById('jiandao');
	var bu = document.getElementById('bu');
	shitou.onclick = picClickEvent;
	jiandao.onclick = picClickEvent;
	bu.onclick = picClickEvent;
	shitou.onmouseout = change;
	jiandao.onmouseout = change;
	bu.onmouseout = change;
}
/*鼠标离开修改透明度*/
function change(){
	var computer = document.getElementById('computer');
	var note = document.getElementById('note');
	computer.className = 'low-opacity';
	this.className = 'low-opacity';
	note.innerHTML = '<br>';
	//alert(this);
}

/*玩家选择图片事件*/
function picClickEvent(){
	this.className = 'high-opacity';
	var computer = document.getElementById('computer');
	var note = document.getElementById('note');
	var math = Math.floor(Math.random()*3+1)//产生1-3的随机整数，表示电脑出的拳
	if(math == 1){
		computer.setAttribute('src','assets/bu.jpg');
		
	}else if(math == 2){
		computer.setAttribute('src','assets/jiandao.jpg');
	}
	else{
		computer.setAttribute('src','assets/shitou.jpg');
	}
	computer.className = 'high-opacity';

	var math2;
	switch(this.id){
		case 'shitou':math2 = 3;break;
		case 'jiandao':math2 = 2;break;
		case 'bu':math2 = 1;break;
		default:math2 = 0;break;
	}
	if(math == math2){//平局
		note.innerHTML = 'Tie!';
	}
	if((math == 1 && math2 == 3) || (math == 2 && math2 == 1) || (math == 3 && math2 == 2)){//电脑赢
		note.innerHTML = 'You Lose!';
	}
	if((math == 3 && math2 == 1) || (math == 1 && math2 == 2) || (math == 2 && math2 == 3)){//玩家赢
		note.innerHTML = 'You Win!';
		var count = document.getElementById('count');
		var i = parseInt(count.innerHTML);
		//alert(i);
		count.innerHTML = (i+1).toString();
	}
	//alert(this.style);
	//alert(shitou.className);
}


