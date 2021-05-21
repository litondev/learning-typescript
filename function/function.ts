// valid
function buildName(firstName: string, lastName?: string) { 

}

// invalid
// function buildName(firstName?: string, lastName: string) // Invalid


// function as Paramter
function foo(otherFunc: Function): void { 
}




// get constructor function
function foo(constructorFunc: { new() }) {     
	new constructorFunc(); 
} 

// get constructor function with param
function foo(constructorWithParamsFunc: { new(num: number) }) {
	new constructorWithParamsFunc(1); 
} 

// constructor function with interface
interface IConstructor { 
    new(); 
}

function foo(contructorFunc: IConstructor) { 
    new constructorFunc();
}


// constructor funciton with interface and param
interface INumberConstructor { 
    new(num: number); 
}

function foo(contructorFunc: INumberConstructor) { 
    new contructorFunc(1);
}

// constructor function with generic
interface ITConstructor<T, U> { 
   new(item: T): U;
}

function foo<T, U>(contructorFunc: ITConstructor<T, U>, item: T): U { 
    return new contructorFunc(item);
}



// simple funciton
function foo(func: { (): void }) { 
    func();
}

function foo(constructorWithParamsFunc: { (num: number): void }) { 
	new constructorWithParamsFunc(1);
}

// simple funciton with interface
interface IFunction { 
    (): void; 
}

function foo(func: IFunction ) { 
	func(); 
}

// simple function with interface and paramter
interface INumberFunction { 
   (num: number): string;
}

function foo(func: INumberFunction ) { 
    func(1);
}

// simple function with generic
interface ITFunc<T, U> { 
    (item: T): U; 
}

function foo<T, U>(contructorFunc: ITFunc<T, U>, item: T): U { 
    return func(item);
}

// funciton union type
function whatTime(hour : number | string, minute : number | string) : string{ 
    return hour + ' : ' + minute; 
}

whatTime(1,30)   
