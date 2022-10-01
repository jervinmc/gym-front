<template>
  <div class="pa-10">
    <dialog-notification :isOpen="isError" type="error" title="Please fill up all the blank." message=""  />
    <v-form
      v-model="isValid"
      ref="form"
      lazy-validation
      @submit.prevent="submitHandler"
    >
      <v-row>
        <v-col cols="6">
          <v-card width="600" class="rounded-lg" elevation="2">
            <div
              style="background-color: #ef5777; color: white"
              align="start"
              class="pa-5"
            >
              Book Form
            </div>
            <div class="pa-5" align="start">
              <v-row>
                <v-col cols="12">
                  <v-menu
                    class="pa-0"
                    ref="eventDateRange"
                    v-model="eventDateRange"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <div>Date</div>
                      <v-text-field
                        append-icon="mdi-close"
                        @click:append="resetDate"
                        hide-details=""
                        v-model="book.date"
                        outlined
                        persistent-hint
                        v-bind="attrs"
                        @blur="book.date = book.date"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="book.date"
                      no-title
                      range
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col>
                  <div>Guest (up to 3)</div>
                  <div>
                    <v-text-field
                      :rules="standardRules"
                      outlined
                      v-model="book.guest"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div>Messages</div>
                  <div>
                    <v-textarea
                      :rules="standardRules"
                      outlined
                      v-model="book.message"
                      type="password"
                    ></v-textarea>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
        <!-- <v-col>
          <v-divider vertical />
        </v-col> -->
        <v-col cols="6" class="pa-0">
          <div align="center" class="secondary--text text-h5">
            <b>Partial Payment</b>
          </div>
          <div class="pt-10">
            <v-row no-gutters>
              <v-col>
                <b>Date</b>
              </v-col>
              <v-col align="end">
                <div class="black--text">
                  {{ book.date[0] }} - {{ book.date[1] }}
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <b>Guest</b>
              </v-col>
              <v-col align="end">
                <div class="black--text">{{ book.guest }}</div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <b>Price</b>
              </v-col>
              <v-col align="end">
                <div class="black--text">Php {{ $FormatPrice("1100") }}</div>
              </v-col>
            </v-row>
            <v-divider class="pb-5"></v-divider>
            <v-row no-gutters>
              <v-col>
                <b>Subtotal</b>
              </v-col>
              <v-col align="end">
                <div>Php {{ $FormatPrice("1100") }}</div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <b>Nights</b>
              </v-col>
              <v-col align="end">
                <div>({{ $NDays(book.date) }}) night/s</div>
              </v-col>
            </v-row>
            <v-divider class="pb-5" />
            <v-row no-gutters>
              <v-col>
                <b>Total</b>
              </v-col>
              <v-col align="end">
                <div class="red--text">
                  Php {{ $FormatPrice(1100 * $NDays(book.date)) }}
                </div>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col>
                <b>Potential Points</b>
              </v-col>
              <v-col align="end">
                <div class="green--text">
                  <b> {{ 1100 * $NDays(book.date) * 0.001 }}</b>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="pt-10">
            <v-card class="pa-10 rounded-lg" elevation="5">
              <div class="secondary--text"><b>Contact Information</b></div>
              <div>
                <v-row class="pt-6">
                  <v-col>
                    <div>Email : {{ $auth.user.email }}</div>
                    <div>Contact Number : {{ $auth.user.mobile_number }}</div>
                    <div>
                      Fullname : {{ $auth.user.firstname }}
                      {{ $auth.user.lastname }}
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </div>
          <div align="center" class="pt-10">
            <v-btn
              depressed
              color="grey"
              dark
              @click="$router.go(-1)"
              :loading="isLoaded"
            >
              Cancel
            </v-btn>
            <v-btn
              depressed
              color="secondary"
              dark
              type="submit"
              :loading="isLoaded"
            >
              Book
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import validations from "@/utils/validations";
import DialogNotification from '../../general/DialogNotification.vue';
export default {
  components: { DialogNotification },
  data() {
    return {
      isError:false,
      isLoaded: false,
      isValid: false,
      eventDateRange: false,
      ...validations,
      book: {
        date: ["", ""],
        guest: 0,
        message: "",
        total: 0,
        date_start: "",
        date_end: "",
        user: this.$auth.user.id,
      },
    };
  },
  methods: {
    resetDate() {},
    async submitHandler() {
      this.isLoaded = true;
      try {
        this.book.total = 1100 * this.$NDays(this.book.date); 
        this.book.points = 1100 * this.$NDays(this.book.date) * 0.001;
        this.book.date_start = this.book.date[0];
        this.book.date_end = this.book.date[1];
        await this.$store.dispatch("book/addBook", this.book);
        this.isLoaded = false;
      } catch (error) {
        this.isError = true
        this.isLoaded = false;
      }
    },
  },
};
</script>

<style>
</style>