/* CONSTRAINTS */

/* Ex 1 */
interface IRunnable { 
    run(): void; 
}

interface IRunner<T extends IRunnable> { 
   runSafe(runnable: T): void; 
}
/* Ex 1 */

/* Ex 2 */
interface IRunnble<V> { 
    run(parameter: U): V; 
}

interface IRunner<T extends IRunnable<U, V>, U, V> { 
    runSafe(runnable: T, parameter: U): V; 
}
/* Ex 2 */

/* Ex 3 */
interface IRunnable<T extends { run(): void }> { 
   runSafe(runnable: T): void; 
}
/* Ex 3 */