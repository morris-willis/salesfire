<script setup lang="ts">
    // on search input call api
    // set products 
    import { useResultsStore } from '@/store/products';
    import type { Product } from '@/models/product'
    import { onMounted } from 'vue';
    const store = useResultsStore()
    let search: string = ''
    let controller: AbortController | null; 

    async function callAPI(search? : string ){
        if(controller){
            controller.abort()
        }
        controller = new AbortController()
        let url = 'https://aix.salesfire.co.uk/api/searcha?client_id=dbf1dbc9-a940-48c2-b44b-0bb6dc63924e'
        if(search){
            url += `&query=${search}`
        } 
        fetch(url)
        .then((res)=> (res.json()))
        .then((data)=> store.setProducts(data.products))
   
    }


    function handleKeyPress(){
        callAPI(search)
    } 

    onMounted(()=> {
        callAPI()
    })
    
</script>
<template>
    <div class="searchbar-wrapper">
        <input class="searchbar" v-model="search" @keypress="handleKeyPress"> 
    </div>
</template>
<style>
.searchbar{
    width: 95%;
    font-size: medium;
    height: 30px;
}
.searchbar-wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>