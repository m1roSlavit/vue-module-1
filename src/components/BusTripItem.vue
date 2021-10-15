<template>
  <div class="item-wrapper">
    <button class="remove-button" @click="removeBusTripById(busTrip.id)">
      X
    </button>
    <div>[{{ busTrip.number }}]. {{ busTrip.price }}$</div>
    <div>
      <small>{{ busTrip.departureTown }} -> {{ busTrip.arrivalTown }}</small>
      <br />
      <small>{{ busTrip.departureDate }} -> {{ busTrip.arrivalDate }}</small>
    </div>
    <div>{{ busTrip.driver }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BusTripItem",
  props: {
    busTrip: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions(["removeBusTripById"]),
  },
};
</script>

<style lang="css" scoped>
.item-wrapper {
  border: 1px solid #ccc;
  padding: 20px;
  text-align: left;
  position: relative;
}

.remove-button {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
