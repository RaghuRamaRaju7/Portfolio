export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('TypeScript','brown');
    static readonly PYTHON = new Tag('Python','pink');
    static readonly HTML = new Tag('Html','purple');
    static readonly CSS = new Tag('Css','green');
    static readonly JAVA = new Tag('Java','orange');
    static readonly JAVASCRIPT = new Tag('JavaScript','orange');
    static readonly REACT = new Tag('React','blue');



    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}