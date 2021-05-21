class Car {
	public position : number = 40;
	protected speed :  number = 50;

	move(){
		this.position += this.speed;
	}
}

class MyCar extends Car {
	move(){
		super.move()
	}
}

let myCar = new MyCar();
myCar.move();
console.log(myCar.position);