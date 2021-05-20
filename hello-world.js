var Gretter = /** @class */ (function () {
    function Gretter(message) {
        this.gretting = message;
    }
    Gretter.prototype.great = function () {
        return this.gretting;
    };
    return Gretter;
}());
var greeter = new Gretter('testing');
console.log(greeter.great());
