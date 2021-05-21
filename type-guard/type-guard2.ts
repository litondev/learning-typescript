function example(foo: any) {     
	if (typeof foo === "number") {         
	// foo is type number in this block         
	console.log(foo + 100);     
	}     

	if (typeof foo === "string") {         
	// fooi is type string in this block         
	console.log("not a number: " + foo);     
	} 
} 

example(23); 
example("foo");