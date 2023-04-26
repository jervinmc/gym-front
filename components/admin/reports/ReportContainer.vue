<template>
  <div>
    <div class="pa-5 text-h5"><b>Report Management</b></div>
    <div>
      <div>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <v-icon class="display-1"></v-icon>
              <div class="title">No. of Bookings</div>
              <div class="subtitle">{{total_bookings }}</div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <v-icon class="display-1"></v-icon>
              <div class="title">No. of bookings today</div>
              <div class="subtitle">{{ total_bookings_today }}</div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="py-10">
        <div class="pa-5">
          <VueApexCharts :series="series" :data="data" :options="chartOptions" height="300" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState('book',['book_data']),
    total_bookings(){
      return this.book_data.length
    },
    total_bookings_today(){
      const today = new Date().toISOString().slice(0, 10); 
      const todayEntries = this.book_data.filter(entry => entry.created_date.slice(0, 10) === today);
      alert(todayEntries.length)
      return todayEntries.length
    }
  },
  created(){
    this.$store.dispatch('book/view')
  },
  components: { VueApexCharts },
  data() {
    return {
      cards: [
        {
          title: 'Number of Users',
          subtitle: '1000',
          icon: 'mdi-account-group'
        },
        {
          title: 'Number of Bookings',
          subtitle: this.book_data,
          icon: 'mdi-calendar-multiple-check'
        },
        {
          title: 'Number of Pending',
          subtitle: '200',
          icon: 'mdi-calendar-alert'
        },
        {
          title: 'Number of Approved',
          subtitle: '300',
          icon: 'mdi-calendar-check'
        }
      ],
      carousel: 1,
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      chartOptions: {
        chart: {
          height: 250,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
      isAdd: false,
      register: {},
      addForm: false,
      isConfirmationApprove: false,
      search: "",
      requestedStatus: false,
      isConfirmation: false,
      file: "",
      addForm: false,
      editForm: false,
      account_type: "Resident",
      selectedItem: {},
      status: "Easy",
      items: [
        {
          name: "Juan Dela Cruz",
          street: "Chino Roces",
          purok: "Pio Del Pilar",
          age: "24",
          birthday: "10/20/10",
          is_active: true,
        },
      ],
      headers: [
        { text: "ID", value: "id" },
        { text: "Product Name", value: "product_name" },
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity" },
        { text: "Image", value: "image" },
        // { text: "Address", value: "address" },
        // { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
};
</script>

<style></style>