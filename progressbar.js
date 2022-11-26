//冷氣風速強度控制
var elem = document.getElementById("myBar");  
var up_level=document.getElementById('up');
var down_level=document.getElementById('down');
var level=document.getElementById('level');
//q1:讓progressbar的vale刷新時，保留現有數值
function move() {
  
  
  var width=0,wind=0;
  

  //elem.style.animation='rotate'++'s'+'linear' +'infinite';
  //console.log(typeof(parseInt(mywidth.getItem('width'))));
  //var id = setInterval(frame, 10);
  width=20+parseInt(localStorage.getItem('widthlen')); 
  localStorage.setItem('widthlen',width); 
  if (parseInt(localStorage.getItem('widthlen')) >= 100) {
      
      elem.style.width = '0px';
      localStorage.clear();
      widthlen_init();
      level.innerHTML="<h3>"+"目前冷氣強度:0級強度"+"</h3>";
  } 
  else{
     elem.style.width = (width) + 'px'; 
     
     level.innerHTML="<h3>"+'目前冷氣強度:'+(width/20)+"級強度"+"</h3>";
  }
  control_speed(parseInt(localStorage.getItem('widthlen')));
  show_current_data();
}

function back(){

  var cur_width=localStorage.getItem('widthlen');
  var width=0;
  if(cur_width<20){
      alert('冷氣強度無法在進行調整!!');
      widthlen_init();
  }else{

    width=cur_width-20;
    localStorage.setItem('widthlen',width);
    elem.style.width=width+'px';
    level.innerHTML="<h3>"+'目前冷氣強度:'+(width/20)+"級強度"+"</h3>";

  }
   control_speed(parseInt(localStorage.getItem('widthlen')));

}
function show_current_data(){

  var ele=document.getElementsByTagName('section')[0];
  //console.log(data.childNodes);
  var data=parseInt(localStorage.getItem('widthlen'));
  ele.childNodes[5].innerHTML="<h3>"+"目前冷氣強度:"+(data/20)+"級強度"+"</h3>";
  
    
}
function widthlen_init(){

  var width=0;
  localStorage.setItem('widthlen',width);
  
}
function control_speed(windlevel){

  let w=[5,4,3,2,1];
  //console.log('wind'+windlevel/20); make sure the wind level is from 1 to 4
  document.getElementById('speed-rotate').style.animation='newrotate '+w[windlevel/20]+'s linear infinite';
 
}

