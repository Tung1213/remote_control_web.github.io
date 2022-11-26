var option=0;
//控制風向
//圖片位置調整
//style="position: absolute;top:170px;left:100px"
function get_wind(){


	let direction=['西風','西北西風','西北風','北北西風','北風'];
	let img =['wind1.png','wind2.png','wind3.png','wind4.png','wind5.png'];
	var path="img/";
	path+=img[option];
	var name=document.getElementsByTagName('section')[0];
	var pic=document.createElement('img');
	pic.setAttribute('width','100');
	pic.setAttribute('height','100');
	pic.setAttribute('src',path);
	pic.style.position='absolute';
	pic.style.top="170px";
	pic.style.left="220px";
	
	name.childNodes[7].innerHTML="<h3>"+'目前風向為:'+direction[option]+"</h3>";
	name.childNodes[7].appendChild(pic).innerHTML+='<img src="'+pic.src+'" >';

	if(option>=direction.length-1)option=0;
	else option++;
	

}
