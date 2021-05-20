class Gretter{
	gretting: String;

	constructor(message: String){
		this.gretting = message
	}

	great(): String {
		return this.gretting
	}
}

let greeter = new Gretter('testing')
console.log(greeter.great())