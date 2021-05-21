abstract class Machine {
	constructor(public manufacture : string){}

	summary() : string {
		return `${this.manufacture} make this machine`;
	}

	abstract moreInfo() : string;
}

class Car extends Machine {
	constructor(public manufacture : string,public position : number){
		super(manufacture);
	}

	moreInfo() : string {  
		return "this more info"
	}
}

let myCar = new Car('Test',10);
console.log(myCar.summary());
console.log(myCar.moreInfo());