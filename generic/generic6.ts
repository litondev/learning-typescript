interface IRunnable { 
    run(): void; 
}

interface IRunner { 
    runSafe<T extends IRunnable>(runnable: T): void; 
}

class Runner implements IRunner { 
    public runSafe<T extends IRunnable>(runnable: T): void { 
     	try {             
     		runnable.run();         
     	} catch(e) {         
     	}
    }
}

function runSafe<T extends IRunnable>(runnable: T): void { 
	try {         
		runnable.run();     
	} catch(e){
	}
}