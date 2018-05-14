
class ConfiguredChart{
	constructor(ctx,chartConfig,valueColumns,datasets){
		this.ctx=ctx;
		this.chartConfig=chartConfig;
		this.valueColumns=valueColumns;
		this.data={labels:[],datasets:[]};
		this.options=chartConfig;
		this.datasets=datasets;

	}

	parseDataSets(){
		for(var i=0;i<this.datasets.length;i++){
			this.data.labels.push(this.datasets[i].label);
		}
		
		for(i=0;i<this.valueColumns.length;i++){
			var data=[];
		    for(var j=0;j<this.datasets.length;j++){
               data.push(this.datasets[j].values[i]);
			}
			var dataset=new Dataset(this.valueColumns[i],data,null,'','');
			this.data.datasets.push(dataset);
		}
	}

	setChartConfig(){
		console.alert("this method can only be called in concrete object");
	}

	chart(){
		console.alert("this method can only be called in concrete object");
	}
		
}