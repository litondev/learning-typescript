class Pet { } 

class Dog extends Pet {     
	bark() {         
		console.log("woof");     
	} 
} 

class Cat extends Pet {     
	purr() {         
		console.log("meow");     
	} 
} 

function example(foo: any) {     
	if (foo instanceof Dog) {         
	// foo is type Dog in this block         
	foo.bark();     
	}     

	if (foo instanceof Cat) {
	// foo is type Cat in this block         
	foo.purr();     
	} 
} 

example(new Dog()); 
example(new Cat());