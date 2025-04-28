<script setup lang="ts">
    import { useResultsStore } from '@/store/products';
    import type { Product } from '@/models/product'
    import { storeToRefs } from 'pinia';
    import ProductCard from './ProductCard.vue';
    const store = useResultsStore()
    // const products: Product[] = store.getProducts
    const { products } = storeToRefs(store)
</script>
<template>
    <div class="products">
        <ProductCard v-for="item in products" :item="item"></ProductCard>
    </div>
</template>
<style>
    .products{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>