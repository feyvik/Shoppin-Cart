import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "Samsung Galaxy A8 Spy Phone",
        image:
          "https://www.mobilitaria.com/wp-content/uploads/2019/10/Samsung-Galaxy-A8-Spy-Phone.jpg",
        price: 340,
      },

      {
        id: 2,
        name: "Asus Rog Phone",
        image:
          "https://i.gadgets360cdn.com/products/large/1543479620_635_asus_rog_phone_db.jpg",
        price: 500,
      },

      {
        id: 3,
        name: "Cat Phone",
        image:
          "https://www.catphones.com/wp-content/uploads/2018/08/cat-s41-front.png",
        price: 600,
      },

      {
        id: 4,
        name: "Trainer Socks Black",
        image:
          "https://schoolkits.ng/wp-content/uploads/2019/08/Trainer-Socks-Black.jpg",
        price: 700,
      },
    ],

    StoreCart: [],
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart,
  },

  mutations: {
    ADD_Item(state, id) {
      state.StoreCart.push(id);
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    },
  },
  actions: {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    },
  },
  modules: {},
});
