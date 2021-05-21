enum SomeEnum { A, B } 

let enumValues: Array <string>= []; 

for(let value in SomeEnum) {
	console.log(value)     

	if(typeof SomeEnum[value] === 'number') {         		
		enumValues.push(value);     
	} 
} 

enumValues.forEach(v => console.log(v)) 

enum MimeTypes {   
 JPEG = <any>'image/jpeg',  
 PNG = <any>'image/png',   
 PDF = <any>'application/pdf' 
}

/*
enum MimeTypes {
 JPEG = 'image/jpeg',   
 PNG = 'image/png',   
 PDF = 'application/pdf',
}

enum MyNumber {
	myValue1 = 10,
	myValue2 = 40
}
*/

for(let value in MimeTypes){
	console.log(value)
	console.log(MimeTypes[value])
}