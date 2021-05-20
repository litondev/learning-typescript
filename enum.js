var SomeEnum;
(function (SomeEnum) {
    SomeEnum[SomeEnum["A"] = 0] = "A";
    SomeEnum[SomeEnum["B"] = 1] = "B";
})(SomeEnum || (SomeEnum = {}));
var enumValues = [];
for (var value in SomeEnum) {
    console.log(value);
    if (typeof SomeEnum[value] === 'number') {
        enumValues.push(value);
    }
}
enumValues.forEach(function (v) { return console.log(v); });
var MimeTypes;
(function (MimeTypes) {
    MimeTypes[MimeTypes["JPEG"] = 'image/jpeg'] = "JPEG";
    MimeTypes[MimeTypes["PNG"] = 'image/png'] = "PNG";
    MimeTypes[MimeTypes["PDF"] = 'application/pdf'] = "PDF";
})(MimeTypes || (MimeTypes = {}));
for (var value in MimeTypes) {
    console.log(value);
    console.log(MimeTypes[value]);
}
