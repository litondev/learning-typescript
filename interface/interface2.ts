interface ISampleClassInterface { 
	sampleVariable: string; 

	sampleMethod(): void; 

	optionalVariable?: string; 
}

class SampleClass implements ISampleClassInterface { 
  public sampleVariable: string; 
  private answerToLifeTheUniverseAndEverything: number; 

  constructor() { 
    this.sampleVariable = 'string value'; 
    this.answerToLifeTheUniverseAndEverything = 42; 
  }

  public sampleMethod(): void { 
  }

  private answer(q: any): number { 
    return this.answerToLifeTheUniverseAndEverything; 
  }
}