<template>
  <div id="shopping-cart">
    <md-span>{{ cartLength }}</md-span>
    <div class="md-layout" v-for="(item, index) in cart" :key="index">
      <div class="md-layout-item">{{ item.name }}</div>
      <div class="md-layout-item">{{ '$' + item.price }}</div>
      <div class="md-layout-item">
        <md-button class="md-primary" @click="removeFromCart(index)">Remove Cart</md-button>
      </div>
    </div>
    <p>Total {{ '$' + total }}</p>
  </div>
</template>

<script>
export default {
  name: "Shopping",
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },
    cartLength() {
      return this.inCart.length;
    },
    cart() {
      return this.$store.getters.inCart.map(cartproduct => {
        return this.$store.getters.products.find(itemForSale => {
          return cartproduct === itemForSale.id;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    }
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
    }
  }
};
</script>

<style lang="scss" scoped>
#shopping-cart {
  width: 100%;
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
  .md-layout {
    margin-top: 2%;
    width: 100%;
    max-width: calc(100vw - 125px);
    .md-layout-item {
      margin-top: 2%;
    }
  }
}
</style>