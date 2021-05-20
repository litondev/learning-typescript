let a : number = 10
let b : string = 'string'
let c : boolean = true
let d : Array<any> = ['a',1]
let e : Array<string> = ['a','b']
let f : [number,string] = [1,'s']

// {}

// let g = {
// 	Red,
// 	Blue,
// 	Green
// }

let h = function(param: number){
	console.log(param)
}

let i = function() : number {
	return 1
}

// let j = function(a: string,b?:) : void{
let j = function(a: string,b: boolean = true) : void {
	console.log(a + " " + b)
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
// console.log(g)

h(10)
console.log(i())
j('Testing')