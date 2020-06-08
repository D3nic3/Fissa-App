export class Festival{
    getFestival(id: number): Festival {
        throw new Error("Method not implemented.");
    }
    name: string;

    constructor(){

    }

set newName(newName: string){
    this.name= newName;
}
}
