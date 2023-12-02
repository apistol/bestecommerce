export interface ProductData {
    id: number;
    name: string;
    price: number;
    images: {src: string};
}

export interface CartItem {
    product: ProductData;
    qty: number;
}