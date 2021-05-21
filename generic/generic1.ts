/* Ex 1 

interface IResult<T> {     
    error: T
}

var result: IResult<string> = {
	error : 'My Error'
};

console.log(result);

*/


/* Ex 2

interface IResult<T> {     
	wasSuccessfull: boolean;     
	error: T; 
} 

var result: IResult<string> = {
	error : 'My Error',
	wasSuccessfull : true
}

console.log(result)

*/

/* Ex 3 

interface IResult<T,U> {
	success : U,
	error : T
}

var result: IResult<boolean,boolean> = {
	error : true,
	success :  false
}

console.log(result);

*/

/* Ex 4 

interface IResult<T> { 
	wasSuccessfull: boolean;
	error: T; 
}

var result: IResult<string> = {
	wasSuccessfull : true,
	error : 'Test'
} 
var error: string = result.error;

console.log(error);

*/

/* Ex 5 

interface IRunnable<T, U> { 
	run(input: T) : U;
}

var runnable: IRunnable<string, number> = {
	run : function(input: string) : number {
		return 1;
	}
}

var input: string = '4'; 
var result: number = runnable.run(input);
console.log(result);
*/