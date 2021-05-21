class SomeClass {     
	public static SomeStaticValue: string = "hello";
	public someMemberValue: number = 15;
	private somePrivateValue: boolean = false;

	constructor () {         
		SomeClass.SomeStaticValue = SomeClass.getGoodbye();
		this.someMemberValue = this.getFortyTwo();
		this.somePrivateValue = this.getTrue();
	}

	public static getGoodbye(): string {
	   return "goodbye!";     
	}     

	public getFortyTwo(): number {
	   return 42;     
	}     

	private getTrue(): boolean {
	     return true;     
	} 
}

console.log(SomeClass.getGoodbye())