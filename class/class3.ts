class Car {
	public position : number;
	protected  speed :  number;

	constructor(position : number,speed : number){
		this.position = position;
		this.speed = speed;
	}	

	move(){
		this.position += this.speed;
	}
}

class MyCar extends Car {
	constructor(startAutoPilot : boolean){
		super(10,10);

		if(startAutoPilot){
			this.move()
		}
	}
}

let myCar = new MyCar(true);
console.log(myCar.position);