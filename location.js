
//定位div 的位置和控制div大小
window.onload=function(){


	var middle=document.getElementById('middle');
	middle.style.left='507px';
	middle.style.backgroundColor='#373737';
	new_ele=document.createElement('script');
	new_ele.setAttribute("type","text/javascript");
	new_ele.setAttribute("src","progressbar.js");// 在這裡引入了a.js
	document.body.appendChild(new_ele);
	new_ele1=document.createElement('script');
	new_ele1.setAttribute("type","text/javascript");
	new_ele1.setAttribute("src","control_slider.js");// 在這裡引入了a.js
	document.body.appendChild(new_ele1);
	show_current_data();
	widthlen_init();
	current_temp();

}





