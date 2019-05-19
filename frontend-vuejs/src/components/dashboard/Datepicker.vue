<template>
  <div class="datepicker-trigger">
    <button
      id="datepicker-button-trigger"
      class="btn btn-primary px-4"
    >{{ formatDates(dateOne, dateTwo) || 'Select dates' }}</button>

    <AirbnbStyleDatepicker
      :trigger-element-id="'datepicker-button-trigger'"
      :mode="'range'"
      :fullscreen-mobile="true"
      :months-to-show="2"
      :date-one="dateOne"
      :date-two="dateTwo"
      @date-one-selected="val => { dateOne = val }"
      @date-two-selected="val => { dateTwo = val }"
    />
  </div>
</template>

<script>
import format from "date-fns/format";
export default {
  data() {
    return {
      dateFormat: "D MMM",
      dateOne: "",
      dateTwo: ""
    };
  },
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = "";
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat);
      }
      if (dateTwo) {
        formattedDates += " - " + format(dateTwo, this.dateFormat);
      }
      return formattedDates;
    }
  }
};
</script>

