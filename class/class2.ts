class Car {
	// simple way
	// constructor(public position: number, protected speed: number) {} 

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

let myCar = new Car(10,10);
myCar.move();
console.log(myCar.position);