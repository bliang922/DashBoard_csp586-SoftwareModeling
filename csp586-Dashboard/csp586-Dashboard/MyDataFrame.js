class MyDataFrame{
	constructor(df){
		this.df=df;
		this.observers=[];
	}
	registerObservers(observer){
		this.observers.push(observer);
	}
	removeObserver(observer){
		this.observers.slice(this.observer.indexOf(observer),1);
	}
    notifyObservers(){
		for(var i=0;i<this.observers.length;i++)
		this.observers[i].update(this.df);
	}	
}