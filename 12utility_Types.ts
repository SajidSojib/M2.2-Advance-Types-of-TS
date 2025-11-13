type Product = {
    readonly id: number;
    name: string;
    price: number;
    stock: number;
    color?: string;
}

type ProductSummery = Pick<Product, 'id' | 'name' | 'price'>;
type ProductWithoutStockColor = Omit<Product, 'stock'|'color'>;
type ProductWithColor = Required<Product>;  //? all properties are required
type OptionalProduct = Partial<Product>;    //? all properties are optional
type ReadonlyProduct = Readonly<Product>;   //? all properties are readonly

const emptyObj: Record<string, unknown> = {};   //? keys->string, values->any