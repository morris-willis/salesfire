import { defineStore } from "pinia";
import type { Product } from "@/models/product";

export type RootState = {
    products: Product[]
}
let controller: AbortController | null; 
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
        },
        async fetchProducts(query?: string){
            if(controller){
                controller.abort()
            }
            controller = new AbortController()
            let url = 'https://aix.salesfire.co.uk/api/searcha?client_id=dbf1dbc9-a940-48c2-b44b-0bb6dc63924e'
            if(query){
                url += `&query=${query}`
            } 
            fetch(url)
            .then((res)=> (res.json()))
            .then((data)=> this.products = data.products)
        }
        
    }
})