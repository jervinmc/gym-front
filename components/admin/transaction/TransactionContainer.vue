<template>
  <v-sheet class="pa-10" color="">
    <v-dialog width="500" v-model="isAdd">
        <v-card class="pa-16">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="register.name"
              outlined
              dense
              placeholder="Product Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="register.price"
              outlined
              dense
              placeholder="Price"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="register.quantity"
              outlined
              dense
              placeholder="Quantity"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              outlined
              dense
              placeholder="Description"
              v-model="register.description"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-select
              outlined
              dense
              v-model="register.category"
              placeholder="Category"
              :items="['Tools', 'Supliment']"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <input
              type="file"
              id="fileInput"
              ref="file"
              @change="onFileUpload"
            />
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col align="end">
                <v-btn outlined class="rounded-lg" @click="isAdd = false"
                  >Cancel</v-btn
                >
              </v-col>
              <v-col>
                <v-btn
                  class="rounded-lg"
                  color="secondary"
                  @click="submitHandler"
                  >Submit</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <div class="black--text text-h5 pb-5">
      <v-row>
        <v-col>
          <b>Transaction Management</b>
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
          :items="transaction_data"
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
    <div></div>
  </v-sheet>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import DialogNotification from "../../general/DialogNotification.vue";
// import Add from "./Add.vue";
// import Edit from "./Edit.vue";
import VueToastr from "vue-toastr";
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});

var cloneDeep = require("lodash.clonedeep");
import VueApexCharts from "vue-apexcharts";
export default {
  components: { VueApexCharts },
  created() {
    this.$store.dispatch("transaction/view");
  },
  computed: {
    ...mapState("transaction", ["transaction_data"]),
    filteredData(){
        return this.exercise_data.filter(data=>data.category==this.status)
    }
  },
  methods: {
    async submitHandler() {
      try {
        let form_data = new FormData();
        if (this.file != null && this.file != "") {
          form_data.append("image", this.file);
        }
        form_data.append("product_name", this.register.product_name);
        form_data.append("category", this.register.category);
        form_data.append("price", this.register.price);
        form_data.append("quantity", this.register.quantity);
        form_data.append("description", this.register.description);
        await this.$store.dispatch("product/add", form_data);
        this.isAdd = false
        alert('Successfully Added!')
      } catch (error) {

      }
    },
    onFileUpload(e) {
      this.file = e;
      e = e.target.files[0];
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
      } catch (error) {
        alert(error);
        return;
      }
      console.log(e);
      this.file = e;
    },
    statusConfirmation(item, status) {
      this.requestedStatus = status;
      this.isConfirmationApprove = true;
      this.selectedItem = item;
    },
    manageCertificate() {
      location = "/admin/services/certificate";
    },
    edit(item, status) {
      this.selectedItem = item;
      this.editForm = true;
    },
    async updateStatus() {
      try {
        var item = cloneDeep(this.selectedItem);
        item.status = this.requestedStatus;
        console.log(item);
        await this.$store.dispatch("service/editServices", item).then(() => {
          this.$store.dispatch("service/viewServices");
        });
        this.$toastr.s("SUCCESS MESSAGE", "Successfully Added!");
        this.isConfirmation = false;
        this.isConfirmationApprove = false;
        this.refresh();
      } catch (error) {
        alert(error);
      }
    },
    async activation(item, status) {
      this.selectedItem = cloneDeep(item);
      this.selectedItem.is_active = cloneDeep(status);
      await this.$store.dispatch(
        "blotter/editblotter",
        cloneDeep(this.selectedItem)
      );
      this.$store.dispatch("blotter/viewBlotter");
    },
    refresh() {
      this.$store.dispatch("blotter/viewBlotter");
    },
    editItem(item, status) {
      this.requestedStatus = status;
      this.selectedItem = item;
      this.isConfirmation = true;
      //   this.editForm = true;
    },
    cancelForm() {
      this.$store.dispatch("blotter/viewBlotter");
      this.editForm = false;
      this.addForm = false;
      this.isConfirmation = false;
    },
  },
  data() {
    return {
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
      isAdd:false,
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

<style>
</style>