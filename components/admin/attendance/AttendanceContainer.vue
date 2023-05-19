<template>
    <div>
        <div class="black--text text-h5 pb-5">
      <v-row>
        <v-col>
          <b>Attenandace Management</b>
        </v-col>
        <!-- <v-col align="end">
          <v-btn color="primary" @click="isAdd = true" outlined class="rounded-lg">Add Exercise</v-btn>
        </v-col> -->
      </v-row>
    </div>
    <div>
      <v-card class="pa-16" elevation="1" color="white">
        <div class="pt-10">
          <v-text-field
            hide-details
            v-model="search"
            outlined
            dense
            placeholder="Search Request No."
          ></v-text-field>
        </div>
        <v-data-table
          :search="search"
          class="pa-5"
          :headers="headers"
          :items="attendance_data"
          :loading="isLoading"
        >
          <template v-slot:loading>
            <v-skeleton-loader
              v-for="n in 5"
              :key="n"
              type="list-item-avatar-two-line"
              class="my-2"
            ></v-skeleton-loader>
          </template>
          <template #[`item.is_active`]="{ item }">
            {{ item.is_active ? "Yes" : "No" }}
          </template>
          <template #[`item.image`]="{ item }">
            <v-img :src="item.image" height="100" width="100"></v-img>
          </template>
          <template #[`item.opt`]="{ item }">
            <v-menu offset-y z-index="1">
              <template v-slot:activator="{ attrs, on }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item @click.stop="edit(item, '')">
                  <v-list-item-content>
                    <v-list-item-title>View</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="statusConfirmation(item, 'Approved')"
                  v-if="item.status == 'Pending'"
                >
                  <v-list-item-content>
                    <v-list-item-title>Approve</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="statusConfirmation(item, 'Declined')"
                  v-if="item.status == 'Pending'"
                  >>
                  <v-list-item-content>
                    <v-list-item-title>Decline</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="editItem(item, 'For Review')"
                  v-if="status == 'Pending'"
                >
                  <v-list-item-content>
                    <v-list-item-title>For Review</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="editItem(item, 'Summon')"
                  v-if="status == 'For Review'"
                >
                  <v-list-item-content>
                    <v-list-item-title>Summon</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="editItem(item, 'Settled')"
                  v-if="status == 'Summon'"
                >
                  <v-list-item-content>
                    <v-list-item-title>Settled</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="editItem(item, 'Dismissed')"
                  v-if="status == 'Summon'"
                >
                  <v-list-item-content>
                    <v-list-item-title>Dismissed</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
      </v-card>
      <div class="py-10">
         <!-- <div class="pa-5">
            <VueApexCharts
              :series="series"
              :data="data"
              :options="chartOptions"
              height="300"
            />
          </div> -->
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import {mapState} from 'vuex';
  import moment from "moment";
  export default {
    computed:{
      ...mapState('book',['book_data']),
      ...mapState('attendance',['attendance_data']),
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
      this.$store.dispatch('attendance/view')
    },
    methods:{
      formatDate(val) {
        return moment(String(val)).format("YYYY-MM-DD hh:mm");
      },
    },
    data() {
      return {
        headers: [
        { text: "ID", value: "id" },
        { text: "Fullname", value: "fullname" },
        { text: "Time in", value: "created_date" },
        // { text: "Image", value: "product.image" },
        // { text: "Address", value: "address" },
        // { text: "Actions", value: "opt" },
        ,
      ],
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