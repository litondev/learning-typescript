interface IResult<T>{ 
    result: boolean; 
    error: T; 
    clone(): IResult<T>; 
}

class StringResult implements IResult<string> { 
	constructor(public result: boolean, public error: string) { }

	public clone(): IResult<string> { 
		return new StringResult(this.result, this.error); 
	}
}

let stringResult = new StringResult(true,'asd');
console.log(stringResult.clone())