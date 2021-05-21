interface IResult<T>{ 
    result: boolean; 
    error: T; 
    clone(): IResult<T>; 
}

class Result<T> implements IResult<T> { 
    constructor(public result: boolean, public error: T) { }

    public clone(): IResult<T> { 
        return new Result<T>(this.result, this.error);
    }
}

// let result = new Result(true,'asd');
// console.log(result.clone());

let result = new Result<number>(true,49);
console.log(result.clone());