<template>
  <div>
    <div class="pa-5 text-h5"><b>Booking Management</b></div>
    <div class="pa-10">
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="value"
          type="week"
          :events="eventData"
          @click:event="showEvent"
          event-overlap-mode="stack"
          :event-overlap-threshold="30"
        ></v-calendar>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import moment from "moment";
export default {
  computed:{
    ...mapState('book',['book_data']),
     eventData() {
      this.book_data.map((data) => {
        this.events.push({
          start: this.formatDate(data.appointment_date),
          name: `User - ${data.user_id}`,
          event:''
        });
      });
      return this.events;
    },
  },
  created(){
    this.$store.dispatch('book/view')
  },
  methods:{
    formatDate(val) {
      return moment(String(val)).format("YYYY-MM-DD hh:mm");
    },
  },
  data() {
    return {
      value: "",
      today: "2022-12-03",
      events: [
        // {
        //   name: "Weekly Meeting",
        //   start: "2022-06-12 09:00",
        // },
        // {
        //   name: `Tattoo' Rest Day`,
        //   start: "2019-01-10",
        // },
        // {
        //   name: "Mash Potatoes",
        //   start: "2019-01-09 12:30",
        //   end: "2019-01-09 15:30",
        // },
      ],
    };
  },
};
</script>

<style>
</style>