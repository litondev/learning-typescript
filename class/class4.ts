class Car {
	private _speed : number = 10;

	get speed() : number {
		return this._speed;
	}

	set speed(value : number){
		this._speed = value;
	}
}

let myCar = new Car();
console.log(myCar.speed);
myCar.speed = 100;
console.log(myCar.speed);
