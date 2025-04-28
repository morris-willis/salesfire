<script setup lang="ts">
    import { useResultsStore } from '@/store/products';
    import type { Product } from '@/models/product'
    import { storeToRefs } from 'pinia';
    import ProductCard from './ProductCard.vue';
    const store = useResultsStore()
    const { products } = storeToRefs(store)
</script>
<template>
    <div class="products">
        <ProductCard v-if="products.length > 0" v-for="item in products" :item="item"></ProductCard>
        <div v-else>
            <h3 class="empty-products-text">No results found, please search for something else</h3>
        </div>
    </div>
</template>
<style>
    .products{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .empty-products-text{
        align-self: center;
        color: red;
        font-weight: bold;
    }
</style>