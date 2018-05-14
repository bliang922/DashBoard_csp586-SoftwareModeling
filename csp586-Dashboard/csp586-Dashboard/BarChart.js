class BarChart extends ConfiguredChart{
	    
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
                    borderWidth:1
                }

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

            for(var i=0;i<max+1;i++){
                if(step>i&&step<i+1) {
                    step=i+1;
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
                        text:"Bar Chart"
                    }
                };
        }
        chart(){
            this.type='bar';
             if(myChart!=null) myChart.destroy();
             myChart = new Chart(this.ctx, {
                type: this.type,
                data: this.data,
                options:this.chartConfig.options
            });

        }
}


