<template>
  <div id="app">
    <Navbar />
    <Shopping />
    <Product
      v-for="product  in  products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :image="product.image"
      :price="product.price"
    />

    <!-- <router-view /> -->
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Product from "./views/Product.vue";
import Shopping from "./components/Shopping.vue";
export default {
  name: "app",
  computed: {
    products() {
      return this.$store.getters.products;
    }
  },
  components: {
    Navbar,
    Product,
    Shopping
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons");
#app {
  font-family: "Roboto", sans-serif;
  text-align: center;
}
</style>
