export interface Product{
    id: string, 
    title: string,
    brand: string,
    price: {
        original_min: number, 
        original_max: number, 
        min: number,
        max: number, 
        savings: number,
        currency: string,
        unit: null,
    },
    image_url: string,
    link: string,
    in_stock: boolean
}