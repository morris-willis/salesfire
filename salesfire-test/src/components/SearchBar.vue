<script setup lang="ts">
    import { useResultsStore } from '@/store/products';
    import { onMounted } from 'vue';
    const store = useResultsStore()
    let search: string = ''
    function handleKeyPress(){
        store.fetchProducts(search)
    } 
    onMounted(()=> {
        store.fetchProducts()
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