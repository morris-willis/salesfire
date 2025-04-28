import { defineStore } from "pinia";
import type { Product } from "@/models/product";

export type RootState = {
    products: Product[]
}
export const useResultsStore = defineStore('results', {
    state: () => ({
        products: []
    } as RootState ),

    getters: {
        getProducts: (state) => state.products
    },
    
    actions: {
        setProducts(products: Product[]){
            this.products = products
        }
    }
})