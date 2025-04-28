<script setup lang="ts">
    const props = defineProps({
        item: {
            title: String,
            image_url: String,
            price: {
                min: Number,
                currency: String
            }
        }
    })
    const alt: string = `image for ${props.item.title}`
    const price: any= new Intl.NumberFormat(undefined, {style:"currency", currency:"GBP"}).format(props.item.price.min)
    console.log(price);
</script>
<template>
    <div class="card">
        <img :src=item.image_url :alt="alt">
        <h3 class="item-description">{{ item.title }}</h3>
        <p class="price"> {{price }}</p>
    </div>

</template>
<style>
    .card{
        border: 1px black solid;
        border-radius: 5px;
        padding: 5px;
        margin:  5px;
        width: 45%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 600px;
    }
    .item-description{
        text-align: center;
    }
    .price{
        text-align: center;
    }
    
</style>