interface IStatus<U> { 
    code: U; 
}

interface IEvents<T> { 
    list: T[]; 
    emit(event: T): void; 
    getAll(): T[]; 
}

class State<T> implements IEvents<T> { 
    list: T[]; 

    constructor() { 
        this.list = [];
    }

    emit(event: T): void { 
        this.list.push(event); 
    }

    getAll(): T[] { 
        return this.list; 
    }
}

const s = new State<IStatus<number>>(); 

s.emit({ code: 200 }); // works 
s.emit({ code: '500' }); // type error 
s.getAll().forEach(event => console.log(event.code));

const s2 = new State<IStatus<Code>>(); 
s2.emit({ code: { message: 'OK', status: 200 } }); 
s2.getAll().map(event => event.code).forEach(event => { 
    console.log(event.message); 
    console.log(event.status); 
});