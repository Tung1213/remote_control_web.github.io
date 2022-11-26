


function contorlslider(){

	var ele=document.getElementsByTagName('section')[0];
	var range=document.getElementById('myrange');
	localStorage.setItem('temp',range.value);
    ele.childNodes[3].innerHTML="<h3>"+"目前調整溫度(Current Temperature):"+localStorage.getItem('temp')+"度("+"<sup>"+"o"+"</sup>"+"C"+")"+"</h3>";

}
function current_temp(){

	var ele=document.getElementsByTagName('section')[0];
	ele.childNodes[3].innerHTML="<h3>"+"目前調整溫度(Current Temperature):"+localStorage.getItem('temp')+"度("+"<sup>"+"o"+"</sup>"+"C"+")"+"</h3>";


}