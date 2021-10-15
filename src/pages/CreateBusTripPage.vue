<template>
  <div>
    <form @submit="onCreateHandle">
      <div>
        <label>
          Номер рейсу
          <input type="number" required v-model.number="busTripNumber" />
        </label>
      </div>
      <div>
        <label>
          Водій
          <input type="text" required v-model="busTripDriver" />
        </label>
      </div>
      <div>
        <label>
          Вартість квитка
          <input type="number" required v-model.number="busTripPrice" />
        </label>
      </div>
      <div>
        <label>
          Місто відправлення
          <input type="text" required v-model="busTripDepartureTown" />
        </label>
      </div>
      <div>
        <label>
          Час відправлення
          <input type="date" required v-model="busTripDepartureDate" />
        </label>
      </div>
      <div>
        <label>
          Місто прибуття
          <input type="text" required v-model="busTripArrivalTown" />
        </label>
      </div>
      <div>
        <label>
          Час прибуття
          <input type="date" required v-model="busTripArrivalDate" />
        </label>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CreateBusTripPage",
  data() {
    return {
      busTripNumber: null,
      busTripDriver: null,
      busTripPrice: null,
      busTripDepartureTown: null,
      busTripDepartureDate: null,
      busTripArrivalTown: null,
      busTripArrivalDate: null,
    };
  },
  methods: {
    ...mapActions(["addNewBusTrip"]),
    onCreateHandle(e) {
      e.preventDefault();

      this.addNewBusTrip({
        number: this.busTripNumber,
        driver: this.busTripDriver,
        price: this.busTripPrice,
        departureTown: this.busTripDepartureTown,
        departureDate: this.busTripDepartureDate,
        arrivalTown: this.busTripArrivalTown,
        arrivalDate: this.busTripArrivalDate,
      });

      this.busTripNumber = null;
      this.busTripDriver = null;
      this.busTripPrice = null;
      this.busTripDepartureTown = null;
      this.busTripDepartureDate = null;
      this.busTripArrivalTown = null;
      this.busTripArrivalDate = null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
