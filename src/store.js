import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    busTripList: [
      {
        id: Math.random() * Date.now(),
        number: 2,
        driver: "Ivan Ivanov",
        price: 120,
        departureTown: "Kiev",
        departureDate: "2020-303-3",
        arrivalTown: "Lviv",
        arrivalDate: "2020-03-3",
      },
      {
        id: Math.random() * Date.now(),
        number: 1,
        driver: "Petro",
        price: 95,
        departureTown: "Lviv",
        departureDate: "2020-303-3",
        arrivalTown: "Kiev",
        arrivalDate: "2020-03-3",
      },
    ],
  },
  getters: {
    getBusTripList(state) {
      return state.busTripList;
    },
  },
  mutations: {
    addNewBusTrip(state, payload) {
      state.busTripList.push(payload);
    },
    removeBusTripById(state, payload) {
      const busTripIndex = state.busTripList.findIndex((t) => t.id === payload);
      state.busTripList.splice(busTripIndex, 1);
    },
  },
  actions: {
    addNewBusTrip({ commit }, payload) {
      commit("addNewBusTrip", {
        id: Math.random() * Date.now(),
        ...payload,
      });
    },
    removeBusTripById({ commit }, payload) {
      commit("removeBusTripById", payload);
    },
  },
});
