<template>
  <div>
    <v-row no-gutters>
      <v-col class="px-10" cols="5">
        <v-sheet height="80vh">
          <div align="center" class="pt-10">
            <span class="text-h6 secondary--text"><b>Profile</b></span>
          </div>
          <v-row class="pt-0">
            <v-col cols="auto">
              <div align="center">
                <v-avatar
                  ><v-img
                    src="https://e7.pngegg.com/pngimages/436/585/png-clipart-computer-icons-user-account-graphics-account-icon-vector-icons-silhouette.png"
                  ></v-img
                ></v-avatar>
              </div>
              <v-btn color="black" plain :to="'/client/profile/edit'"
                ><span class="pointer">Edit Account</span></v-btn
              >
            </v-col>
            <v-col>
              <div>
                Name
                <v-text-field
                  outlined
                  readonly
                  hide-details=""
                  v-model="$auth.user.firstname"
                ></v-text-field>
              </div>
              <div>
                Email
                <v-text-field
                  outlined
                  readonly
                  hide-details=""
                  v-model="$auth.user.email"
                ></v-text-field>
              </div>
              <div>
                Mobile Number
                <v-text-field
                  outlined
                  readonly
                  hide-details=""
                  v-model="$auth.user.mobile_number"
                ></v-text-field>
              </div>
              <div>
                Address
                <v-text-field
                  outlined
                  readonly
                  hide-details=""
                  v-model="$auth.user.address"
                ></v-text-field>
              </div>
              <div>
                <v-row>
                  <v-col>
                    Date of Birth
                    <v-text-field
                      v-model="$auth.user.birthdate"
                      outlined
                      readonly
                      hide-details=""
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    Gender
                    <v-text-field
                      v-model="$auth.user.gender"
                      outlined
                      readonly
                      hide-details=""
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
      <v-col cols="7">
        <div v-if="book.length != 0" class="pa-5">
          <div align="end" class="py-5">
            <v-btn color="secondary" :to="'book'" outlined class="rounded-lg"
              >Book Now</v-btn
            >
          </div>
          <v-card elevation="2" class="rounded-xl pa-10">
            <div align="center" class="black--text text-h5">
              <b>Book Details</b>
            </div>
            <div class="pt-5">
              <v-row>
                <v-col align-self="center" cols="6">
                  <b>Status</b>  
                </v-col>
                <v-spacer></v-spacer>
                <v-col  class="pa-0">
                  <div
                    :style="$StatusColor(book_details.status)"
                    align="center"
                  >
                    {{ book_details.status }}
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="pt-5">
              <v-row no-gutters>
                <v-col>
                  <b>Date</b>
                </v-col>
                <v-col align="end">
                  <div class="black--text">
                    {{ $FormatDate(book_details.date[0]) }} -
                    {{ $FormatDate(book_details.date[1]) }}
                  </div>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col>
                  <b>Guest</b>
                </v-col>
                <v-col align="end">
                  <div class="black--text">{{ book_details.guest }}</div>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col>
                  <b>Nights</b>
                </v-col>
                <v-col align="end">
                  ({{ $NDays(book_details.date) }}) night/s
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col>
                  <b>Price</b>
                </v-col>
                <v-col align="end"> {{ $FormatPrice("1100") }}</v-col>
              </v-row>
              <v-divider class="pb-5"></v-divider>
              <v-row no-gutters>
                <v-col>
                  <b>Total</b>
                </v-col>
                <v-col align="end">
                  <div class="secondary--text">
                    {{ $FormatPrice(book_details.total) }}
                  </div>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col>
                  <b>Potential Points</b>
                </v-col>
                <v-col align="end">
                  <div class="green--text">
                    <b> {{ book_details.points }}</b>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="secondary--text" align="center">
              <b> Ariving in {{ $NDays(book_details.date) }} day/s </b>
            </div>
          </v-card>
        </div>
        <div v-else align="center">
          <v-img src="/images/bookVector.jpg" height="450" width="650"></v-img>
          <div>
            <v-btn color="secondary" :to="'book'" outlined class="rounded-lg"
              >Book Now</v-btn
            >
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="px-5 pb-5">
      <v-card class="pa-10 rounded-xl" elevation="5">
        <v-sheet>
          <div align="start" class="pt-0">
            <span class="text-h6 black--text"><b>Booking History</b></span>
          </div>
          <div>
            <v-data-table
              class="pa-5"
              :headers="headers"
              :items="book"
              :loading="isLoading"
            >
              <template #[`item.date_start`]="{ item }">
                {{ $FormatDate(item.date_start) }}
              </template>
              <template #[`item.date_end`]="{ item }">
                {{ $FormatDate(item.date_end) }}
              </template>
              <template #[`item.status`]="{ item }">
                <div :style="$StatusColor(item.status)" align="center">
                  {{ item.status }}
                </div>
              </template>
              <template #[`item.total`]="{ item }">
                <div>Php {{ $FormatPrice(item.total) }}</div>
              </template>
              <template v-slot:loading>
                <v-skeleton-loader
                  v-for="n in 5"
                  :key="n"
                  type="list-item-avatar-two-line"
                  class="my-2"
                ></v-skeleton-loader>
              </template>
              <template #[`item.opt`]="{ item }">
                <v-menu offset-y z-index="1">
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-horizontal</v-icon>
                    </v-btn>
                  </template>
                  <v-list dense>
                    <v-list-item @click.stop="editItem(item)">
                      <v-list-item-content>
                        <v-list-item-title>Edit</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click.stop="deleteItem(item)">
                      <v-list-item-content>
                        <v-list-item-title>Delete</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </div>
          <!-- <div align="center">
                <v-btn color="secondary" :to="'book'" outlined class="rounded-lg">Book Now</v-btn>
            </div> -->
        </v-sheet>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.$store.dispatch("book/viewBookUser");
  },
  computed: {
    ...mapState("book", ["book", "book_details"]),
  },
  data() {
    return {
      isLoading: false,
      users: {
        name: "Jervin Macalawa",
        email: "jmacalawapersonal@gmail.com",
        number: "09056949242",
        address: "Julugan 4 tanza, cavite",
        birthdate: "October 04, 1999",
        gender: "Male",
      },
      items: [],
      headers: [
        { text: "ID", value: "id" },
        { text: "Reference Code", value: "reference_code" },
        { text: "Total", value: "total" },
        { text: "Date Start", value: "date_start" },
        { text: "Date End", value: "date_end" },
        { text: "Status", value: "status" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
};
</script>

<style>
</style>