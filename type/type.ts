// type number
let a : number = 10

// type string
let b : string = 'string'

// type boolean
let c : boolean = true

// type array any
let d : Array<any> = ['a',1]

// type array string
let e : Array<string> = ['a','b']

// type array nonly number and string
let f : [number,string] = [1,'s']

// type object option
let g : Record<string,any> = {}
g.prop = 40

// type function with parameter
let h = function(param: number){
	console.log(param)
}

// type function without paranter and return number
let i = function() : number {
	return 1
}

// type function with default value and option paramter and void return
// let j = function(a: string,b?:) : void {
let j = function(a: string,b: boolean = true) : void {
	console.log(a + " " + b)
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
h(10)
console.log(i())
j('Testing')