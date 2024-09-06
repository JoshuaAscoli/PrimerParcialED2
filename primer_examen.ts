

class Farmacia {
    private code: any;
    private name: string;
    private cost_price: number;
    private sell_price: number;
    

    constructor(code: any, name: string, cost_price: number, sell_price: number) {
        this.code = code 
        this.name = name
        this.cost_price = cost_price
        this.sell_price = sell_price
    }

    public getCode(): any {
        return this.code
    }

    public getName(): string {
        return this.name
    }

    public getCost_Price(): number {
        return this.cost_price
    }

    public getSell_price(): number {
        return this.sell_price
    }

    public imprimir(): string {
        
        return "Código:" + this.code+ "\n" + "Nombre:" + this.name + "\n" + "Precio costo:" + this.cost_price +"\n"  + "Precio venta:" + this.sell_price ;
    }

        
}

class HashTables {
    private size: number;
    private data: Farmacia[];
    

    constructor() {
        this.size = 11;
        this.data = new Array(11);
    }

    private hash(key: number): number {
        return key % this.size;
    }

    public insert(product: Farmacia): void {
        let num = parseInt(product.getCode())
        
        let index: number = this.hash(num);
        
        while (this.data[index] != null) {
            index = (index + 1) % this.size;
        }
        this.data[index] = product;
    }

    public mostrar(): void {
        console.log("Farmacia:");
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] != null) {
                console.log("[", i, "]", this.data[i]?.imprimir());
            } else {
                console.log("[",i,"] *****");
            }
        }
    }
    
    public search(codigo: number): Farmacia | null {
        let index: number = this.hash(codigo);
        let startIndex: number = index;
        while (this.data[index] != null) {
            if (this.data[index]?.getCode() == codigo) {
                return this.data[index];
            }
            index = (index + 1) % this.size;
            if (index == startIndex) break;
        }
        return null;
    }
}

let producto1: Farmacia = new Farmacia("100", "Acetaminofen", 25, 75)
let producto2: Farmacia = new Farmacia("101", "Ibuprofeno", 12, 45)
let producto3: Farmacia = new Farmacia("102", "Vitamina D", 78, 100)
let producto4: Farmacia = new Farmacia("103", "Calcio", 44, 200)
let producto5: Farmacia = new Farmacia("104", "Pepto-Bismol", 78, 96)
let producto6: Farmacia = new Farmacia("105", "Vitamina C", 25, 75)
let producto7: Farmacia = new Farmacia("106", "Aspirina", 12, 45)
let producto8: Farmacia = new Farmacia("107", "No se ", 78, 100)
let producto9: Farmacia = new Farmacia("108", "Calcio", 44, 200)
let producto10: Farmacia = new Farmacia("109", "Pepto-Bismol", 78, 96)

let miFarmacia: HashTables = new HashTables()
miFarmacia.insert(producto1);
miFarmacia.insert(producto2);
miFarmacia.insert(producto3);
miFarmacia.insert(producto4);
miFarmacia.insert(producto5);
miFarmacia.insert(producto6);
miFarmacia.insert(producto7);
miFarmacia.insert(producto8);
miFarmacia.insert(producto9);
miFarmacia.insert(producto10);
miFarmacia.mostrar()

let codigoABuscar: any = "100";
let productoEncontrado: Farmacia | null = miFarmacia.search(codigoABuscar);
console.log("\n")
if (productoEncontrado != null) {
    console.log("Producto encontrado:", productoEncontrado.imprimir());
} 
else {
    console.log("Producto con codigo:", codigoABuscar, "no encontrado.");
}

