class StackedBarChart extends ConfiguredChart{
	    

        
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

            for (let m of this.data.datasets.keys()) {
                var errdata = this.data.datasets[m].data;
                var crrdata = new Array(errdata.length);
                for (let n of crrdata.keys()) {
                    crrdata[n] = Number.parseFloat(errdata[n][0]);
                }
                this.data.datasets[0].data = crrdata;
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
                    title:{
                        display:true,
                        text:"Stacked Bar Chart"
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            ticks: {
                            beginAtZero:true,
                            steps:step,
                            max:max
                            },
                            stacked: true
                        }]
                    }
                }

            }

        chart(){
            this.type='bar';
             if(myChart!=null) myChart.destroy();
             console.log(this.data.datasets);
            myChart = new Chart(this.ctx, {
                type: this.type,
                data: this.data,

                options: {
                    title:{
                        display:true,
                        text:"Chart.js Bar Chart - Stacked"
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
            });
           /*     options: {
                    scales: {

                        yAxes: [{
                            ticks: {
                                    beginAtZero:true,
                                    steps: 10,
                                    max:100
                                },
                   stacked: true
                        }]
                    },
                    title:{
                        display:true,
                        text:"Chart.js Bar Chart - Stacked"
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    responsive: true,
                    /*scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }
                options:{
                    title:{
                        display:true,
                        text:"Chart.js Bar Chart - Stacked"
                    },
                    tooltips: {
                        mode: 'label'
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            stacked: true,
                        }],
                        yAxes: [{
                            ticks: {
                                    beginAtZero:true,
                                    steps: 10,
                                    max:100
                                },
                            stacked: true
                        }]
                    }
                }
            });*/
        }
}


