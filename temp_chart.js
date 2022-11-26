
    //legendCallback: function(chart) {
    var get_time=null;
	var ctx=document.getElementById('chart1').getContext('2d');
    Chart.defaults.global.defaultFontSize=20;
    Chart.defaults.global.defaultFontFamily='Arial';
    Chart.defaults.global.defaultFontStyle='normal';
	var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '溫度(°C)',
            data: [],
            borderColor: ['#FEFFFF'],
            borderWidth: 3,
            fill:false,
            lineWidth:'round',
            pointStyle:'circle',
            pointBackgroundColor:'#17252A',
        }]
    },
    options: {
          title: {
            display: true,
            text: '室內溫度',
            fontSize:30,
            lineHeight:3
        },
        tooltips:{

            backgroundColor:'rgba(0, 0, 0, 0.8)',
            titleSpacing:5

        },
        scales: {
            xAxes: [{
                
                stacked: true,
                display:true,
                gridLines:{
                    color:'#2B7A78',
                    lineWidth:1,
                    drawTicks:true
                },
                scaleLabel:{
                    display:true,
                    labelString:'時間(sec)',
                    fontSize: 18,
                    fontColor:'#17252A',
                    lineHeight:2
                },
                ticks:{

                     fontColor:'black'
                },
        
            }],
            yAxes:[{
                
                display:true,
                suggestedMin: 16,
                suggestedMax: 30,
                gridLines:{
                    display:false,
                },
                scaleLabel:{
                    display:true,
                    labelString:'攝氏溫度(°C)',
                    fontSize: 18,
                    fontColor:'#17252A',
                    lineHeight:2
                },
                ticks:{

                     fontColor:'#950740',
                }

            }],
        },
        legend:{

            labels:{
                fontColor:'#FEFFFF',
                boxWidth:20,
                padding:10,
                usePointStyle:true,
            },
        },
      
    }
   
});	
 
//add data

 
//time function
var cloc=new clock();//Functions can be instantiated to create special objects called function instances, by invoking them using the 'new' keyword.

function time(){

   
   var temp=0;
   
   temp=16+Math.random()*14;
   cloc.update_time(3);

   addData(myChart,get_time,temp);

   
   
}


//add new data in line chart
function addData(chartobj,cur_time,data){


    chartobj.data.labels.push(cur_time);
    chartobj.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chartobj.update();

    
}


//set time 
function clock(){

    this.cur_date=new Date();
    this.hours=this.cur_date.getHours();
    this.minutes=this.cur_date.getMinutes();
    this.seconds=this.cur_date.getSeconds();

}
clock.prototype.update_time= function(secs) {
  
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
    get_time=this.hours+":"+this.minutes+":"+this.seconds;

    //console.log(this.hours+":"+this.minutes+":"+this.seconds);
}

setInterval(time,3000);