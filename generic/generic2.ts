class Result<T> { 
	constructor(public wasSuccessful: boolean, public error: T) { 
	}

	public clone(): Result<T> { 
		return new Result(this.wasSuccessful, this.error); 
	}
}

let r1 = new Result(false, 'error: 42'); 
// Compiler infers T to string 
let r2 = new Result(false, 42);           
// Compiler infers T to number 
let r3 = new Result<string>(true, null);  
// Explicitly set T to string 
let r4 = new Result<number>(true, 4);  

console.log(r4.clone())