function isString(test: any): test is string {
     return typeof test === "string"; 
} 

function example(foo: any) {     
	if (isString(foo)) { 
	    // foo is type as a string in this block         
	    console.log("it's a string: " + foo);     
	    } else {
	    // foo is type any in this block         
	    console.log("don't know what this is! [" + foo + "]");     
	} 
} 

example("hello world");          // prints "it's a string: hello world" 
example({ something: "else" });  // prints "don't know what this is! [[object Object]]