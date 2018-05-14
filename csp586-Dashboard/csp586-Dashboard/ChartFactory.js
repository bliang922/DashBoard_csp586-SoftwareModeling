class ChartFactory{
	createChart(ctx,type,valueColumns,dataSets){
		var chartConfig=new ChartConfig();
		console.log(type);
		if(type=="Bar"){
			var chart=new BarChart(ctx,chartConfig,valueColumns,dataSets);
            return chart;
		} else if (type=="Line"){
			var chart=new LineChart(ctx,chartConfig,valueColumns,dataSets);
			 return chart;

		}else if(type=="Stacked Bar"){
			var chart=new StackedBarChart(ctx,chartConfig,valueColumns,dataSets);
			return chart;

		}
		else if(type=="Pie"){
			var chart=new PieChart(ctx,chartConfig,valueColumns,dataSets);
			return chart;

		}
		else if(type=="Doughnut"){
            var chart=new DoughnutChart(ctx,chartConfig,valueColumns,dataSets);
            return chart;
		}
        else if(type=="polarArea"){
            var chart=new PolarAreaChart(ctx,chartConfig,valueColumns,dataSets);
            return chart;
        }
		else
		{
			console.log("input chart type is not acceptable");
		}
	}
}