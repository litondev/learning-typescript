class Car {
	public position : number = 10;
	private speed : number = 200;

	public move(){
		this.makeMove()
	}

	private makeMove(){
		this.position += this.position + this.speed;
	}
}

let myCar = new Car();
myCar.move();
console.log(myCar.position);