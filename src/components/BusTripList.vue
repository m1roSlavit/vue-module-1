<template>
  <div>
    <p>Search <input type="text" v-model="searchSlug" /></p>
    <p @click="toggleFirstLowPrice">
      [sort by price]
      <span v-if="filterfirstByPrice === 'low'">&#8593;</span>
      <span v-if="filterfirstByPrice === 'high'">&#8595;</span>
    </p>
    <div class="list-wrapper">
      <bus-trip-item
        v-for="busTrip in filteredBusTripList"
        :key="busTrip.id"
        :busTrip="busTrip"
      />
    </div>
    <p v-if="filteredBusTripList.length === 0">No searched bus trips!!!</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import BusTripItem from "./BusTripItem.vue";

export default {
  components: { BusTripItem },
  name: "BusTripList",
  data() {
    return {
      searchSlug: null,
      filterfirstByPrice: null,
    };
  },
  methods: {
    toggleFirstLowPrice() {
      this.filterfirstByPrice =
        this.filterfirstByPrice === "low" ? "high" : "low";
    },
  },
  computed: {
    ...mapGetters(["getBusTripList"]),
    filteredBusTripList() {
      let list = this.getBusTripList;
      if (this.searchSlug) {
        list = list.filter(
          (t) =>
            t.arrivalTown
              .toLowerCase()
              .includes(this.searchSlug?.toLowerCase()) ||
            t.departureTown
              .toLowerCase()
              .includes(this.searchSlug?.toLowerCase())
        );
      }

      if (this.filterfirstByPrice) {
        if (this.filterfirstByPrice == "low") {
          list = list.sort((a, b) => a.price - b.price);
        }
        if (this.filterfirstByPrice == "high") {
          list = list.sort((a, b) => b.price - a.price);
        }
      }

      return list;
    },
  },
};
</script>

<style lang="css" scoped>
.list-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
