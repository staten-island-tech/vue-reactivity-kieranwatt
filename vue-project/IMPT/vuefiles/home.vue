Homepage with cards

<script setup>
// import { products } from './arraynotes.js';

// export default {
//   data() {
//     return {
//       featuredProducts: bladees
//     };
//   },
//   methods: {
//     addToCart(album) {
//     }
//   }
// };
</script>

<template>
 <div class="home">
    <h1>bladeecity</h1>
    <div class="featured-albums">
      <h2>Featured Albums</h2>
      <div class="album-list">
        <div v-for="album in bladees" :key="album.id" class="album-card">
          <img :src="album.imageUrl" alt="Album Image" class="album-image">
          <h3>{{ album.name }}</h3>
          <p>{{ album.description }}</p>
          <span class="album-price">{{ album.price }}</span>
          <button @click="addToCart(album)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>