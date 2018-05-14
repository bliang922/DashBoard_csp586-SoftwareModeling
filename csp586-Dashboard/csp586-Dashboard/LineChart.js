
class LineChart extends ConfiguredChart{
	    
        setChartConfig(){
                this.chartConfig.colorSet={
                    backgroundColor:[
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'],
                    borderColor:[
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'],
                    borderWidth:2
                }

                var errdata = this.data.datasets[0].data;
                var crrdata = new Array(errdata.length);
                for (let k of crrdata.keys()) {
                    crrdata[k] = Number.parseFloat(errdata[k][0]);
                }
                this.data.datasets[0].data = crrdata;

                for(var i=0;i<this.data.datasets.length;i++){

                    var random=Math.round(Math.random()*5);

                    this.data.datasets[i].backgroundColor=this.chartConfig.colorSet.backgroundColor[random];
                    this.data.datasets[i].borderColor=this.chartConfig.colorSet.borderColor[random];
                    this.data.datasets[i].borderWidth=this.chartConfig.colorSet.borderWidth;               
                }
                var max=0;
                for(var i=0;i<this.data.datasets.length;i++){
                var number=Math.max.apply(null,this.data.datasets[i].data);
                    if(max<number) max=number;
                }
                var step= Math.round(max/10);

                for(var i=0;i<max/5+1;i++){
                    if(step>i*5&&step<5*(i+1)) {
                        step=5*(i+1);
                        break;
                    }
                }

                max=step*10;
                
                this.chartConfig.options={
                    scales:{
                            yAxes: [{
                                ticks: {
                                beginAtZero:true,
                                steps:step,
                                max:max
                                }
                            }]
                        },
                    title:{
                            display:true,
                            text:"Line Chart"
                        }
                };
        }

        
        
        chart(){
            this.type='line';
            //console.log(this.data);
            //console.log(JSON.stringify(this.data));



            //console.log(this.chartConfig.options);
            myChart = new Chart(this.ctx, {
                type: this.type,
                //data: data2222,
                data: this.data,
                options: this.chartConfig.options
            });
        }
}


