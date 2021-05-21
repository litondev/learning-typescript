interface IPerson { 
    name: string; 
    age: number; 
    breath(): void; 
}

interface IManager extends IPerson { 
    managerId: number; 
    managePeople(people: IPerson[]): void; 
    }
}