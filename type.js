var a = 10;
var b = 'string';
var c = true;
var d = ['a', 1];
var e = ['a', 'b'];
var f = [1, 's'];
// {}
// let g = {
// 	Red,
// 	Blue,
// 	Green
// }
var h = function (param) {
    console.log(param);
};
var i = function () {
    return 1;
};
var j = function (a, b) {
    if (b === void 0) { b = true; }
    console.log(a + " " + b);
};
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
// console.log(g)
h(10);
console.log(i());
j('sjs');
