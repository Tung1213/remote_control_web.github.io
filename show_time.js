
var name='早上',time=null,noname=null;

function clock(){

	this.cur_date=new Date();
	this.hours=this.cur_date.getHours();
	this.minutes=this.cur_date.getMinutes();
	this.seconds=this.cur_date.getSeconds();

}
clock.prototype.run = function(first_argument) {
	
	first_argument=null;
	setInterval(this.update.bind(this),1000);//bind方法回傳的是綁定 this 後的原函數
	// 1. this:cloc 2. this: cloc


};
clock.prototype.update=function(){

	var state=document.getElementById('time');
	cloc.updateTime(1);
	time=name+": "+this.hours+":"+this.minutes+":"+this.seconds;
	state.innerHTML="<h3>"+time+"</h3>";
	noname=this.hours+":"+this.minutes+":"+this.seconds;
	//console.log(time);
};
clock.prototype.checktimeperiod=function(get_hour) {

	if(get_hour>12)name='下午';
	else if(get_hour>24)name='晚上';
}
clock.prototype.updateTime = function(secs) {
	this.seconds+=secs;
	if(this.seconds>=60){
		this.minutes++;
		this.seconds=0;
	}
	if(this.minutes>=60){

		this.hours++;
		this.minutes=0;
	}

	if(this.hours>=24){

		this.hours=0;
	}
	this.checktimeperiod(this.hours);
	



};
var cloc=new clock();
cloc.run();

