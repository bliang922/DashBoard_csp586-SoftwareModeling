
class DoughnutChart extends ConfiguredChart{
    setChartConfig(){
        this.chartConfig.colorSet=[
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",

            "#F7564A",
            "#46CFBD",
            "#FDC45C",
            "#94AFB1",
            "#4D6360",

            "#17464A",
            "#66BFBD",
            "#1DB45C",
            "#B49FB1",
            "#6D5360",
        ];
        var dtst = this.data.datasets[0];
        dtst.backgroundColor = new Array(dtst.data.length);
        //for(var i=0;i<this.data.datasets[0].data.length;i++){
        for(var i=0; i<dtst.data.length; i++){
            console.log(arguments);
            var random=Math.round(Math.random()*15);
            console.log(this.data);
            console.log(this.chartConfig);
            //this.data.datasets[0].backgroundColor[i]=this.chartConfig.colorSet[random];
            //this.data.datasets[0].backgroundColor=this.chartConfig.colorSet[random];
            dtst.backgroundColor[i] = this.chartConfig.colorSet[random];

        }
        this.chartConfig.options={
            title:{
                display:true,
                text:"Doughnut Chart"
            }

        }
    }

    chart(){
        this.type='doughnut';
        if(myChart!=null) myChart.destroy();

        var myChart = new Chart(this.ctx, {
            type: this.type,
            data: this.data,
            options: {
                text: this.chartConfig.options.title.text
            }
        });
    }
}




