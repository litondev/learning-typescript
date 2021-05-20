var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function addMetadata(target) {
    // Add some metadata     
    target.__customMetadata = {
        someKey: "someValue"
    };
    return target;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Person.prototype.greet = function () {
        return this._name;
    };
    Person = __decorate([
        addMetadata
    ], Person);
    return Person;
}());
function getMetadataFromClass(target) {
    return target.__customMetadata;
}
function getMetadataFromInstance(target) {
    return target.constructor.__customMetadata;
}
console.log(getMetadataFromClass(Person));
var person1 = new Person("John");
var person2 = new Person("Lisa");
console.log(getMetadataFromInstance(person1));
console.log(getMetadataFromInstance(person2));
