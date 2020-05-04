import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "Green Sock",
        image:
          "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        price: 340,
      },

      {
        id: 2,
        name: "Blue Sock",
        image:
          "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
        price: 500,
      },

      {
        id: 3,
        name: "Sully and Boo",
        image:
          "https://www.stance.com/dw/image/v2/BBBN_PRD/on/demandware.static/-/Sites-masterCatalog_Stance/default/dw7b3e42d7/prod_images/A546A20SUL_PUL.jpg?sw=2000&sh=2000&sm=fit",
        price: 600,
      },

      {
        id: 4,
        name: "Black Sock",
        image:
          "https://schoolkits.ng/wp-content/uploads/2019/08/Trainer-Socks-Black.jpg",
        price: 700,
      },

      {
        id: 5,
        name: "Roco",
        image:
          "https://cdn.pixabay.com/photo/2016/06/25/14/39/baseball-cap-1479012__340.png",
        price: 720,
      },

      {
        id: 6,
        name: "Red Sock",
        image:
          "https://dictionary.cambridge.org/images/thumb/sock_noun_001_15890.jpg",
        price: 750,
      },
    ],

    inCart: [],
  },
  getters: {
    products: (state) => {
      return state.products;
    },

    inCart: (state) => state.inCart,
  },

  mutations: {
    ADD_TO_CART(state, id) {
      state.inCart.push(id);
    },

    REMOVE_FROM_CART(state, index) {
      state.inCart.splice(index, 1);
    },
  },
  actions: {
    addToCart(context, id) {
      context.commit("ADD_TO_CART", id);
    },

    removeFromCart(context, index) {
      context.commit("REMOVE_FROM_CART", index);
    },
  },
  modules: {},
});
