const id = <T>(x: T): T => x
console.log(id<number>(1))

const id1 = function <T> ( x: T ) :T {
	return x;
};
console.log(id1<number>(2))

// mutli type generic
const id2 =  function <T,U,P> (x : T,a : U,y : P) {
	return (x + ' ' + a + ' ' + y);
}
console.log(id2<number,number,number>(2,3,4));

// type T harus object
const id3 = <T extends {}>(hasToObj: T) => Object.keys(hasToObj)
console.log(id3({id : 1}))