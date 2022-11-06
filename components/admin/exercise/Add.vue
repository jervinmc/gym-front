<template>
  <div>
    <v-card class="pa-16">
      <v-row>
        <v-col>
          <div>Blotter Details</div>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <div>Blotter ID</div>
              <div>
                <v-text-field
                readonly
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.blotter_id"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Date Recorded</div>
              <div>
                <div class="text-h5">
                  <v-menu
                    ref="departMenu"
                    v-model="departMenu"
                    :close-on-content-click="false"
                    :return-value.sync="register.date_recorded"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="register.date_recorded"
                        outlined
                        dense
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="register.date_recorded"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="departMenu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.departMenu.save(register.date_recorded)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Complaint</div>
              <v-textarea outlined v-model="register.complaint"> </v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Place of Incident</div>
              <v-select
                outlined
                dense
                v-model="register.h_purok"
                :items="['Purok 1', 'Purok 2', 'Purok 3']"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>Complainant Details</div>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <div>Name</div>
              <div>
                <v-select
                  placeholder="Complainant Name"
                  :rules="standardRules"
                  outlined
                  dense
                  item-text="name"
                  item-value="id"
                  :items="user_residents"
                  v-model="register.complainant_id"
                ></v-select>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Age</div>
              <div>
                <v-text-field
                  placeholder="Age"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.complainant_age"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Contact</div>
              <div>
                <v-text-field
                  placeholder="Complainant Contact"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.complainant_contact"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Complainant Address</div>
              <div>
                <v-text-field
                  placeholder="Complainant Addresss"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.complainant_address"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>Defendant Details</div>
        </v-col>
        <v-col>
          <v-row>
            <v-col>
              <div>Name</div>
              <div>
                <v-select
                  placeholder="Complainant Name"
                  :rules="standardRules"
                  outlined
                  dense
                  item-text="name"
                  item-value="id"
                  :items="user_residents"
                  v-model="register.defendant_id"
                ></v-select>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Age</div>
              <div>
                <v-text-field
                  placeholder="Age"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.defendant_age"
                ></v-text-field>
              </div>
            </v-col>
            <v-col>
              <div>Contact</div>
              <div>
                <v-text-field
                  placeholder="Complainant Contact"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.defendant_contact"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div>Defendant Address</div>
              <div>
                <v-text-field
                  placeholder="Defendant Addresss"
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.defendant_address"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div align="end">
        <v-btn text @click="cancel"> Cancel </v-btn>
        <v-btn color="primary" @click="submitHandlerRegister"> Submit </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue';
import * as uuid from 'uuid';
import VueToastr from "vue-toastr";
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});
import { mapState, mapActions } from "vuex";
import validations from "@/utils/validations";
export default {
  computed:{
    ...mapState("users", ["user_residents"]),
    // residents(){
    //   return this.users.filter(data=>data.account_type=='Resident')
    // }
  },
  props: ["account_type"],
  auth: false,
  data() {
    return {
      userList:[],
      departMenu: false,
      ...validations,
      e1: 1,
      isLoading: false,
      register: {
        firstname: "",
        lastname: "",
        gender: "",
        is_active: true,
        gender: "",
        date_recorded:'',
        email: "",
        confirm_email: "",
        mobile_number: "",
        birthdate: "",
        address: "",
        province: "",
        account_type: "Resident",
        city: "",
        barangay: "",
        password: "",
        confirm_password: "",
      },
      isLoaded: false,
      ...validations,
      isValid: false,
      isRegister: false,
      // users: {
      //   email: "",
      //   password: "",
      // },
    };
  },
  created() {
    this.register.blotter_id = uuid.v4();
    console.log(this.$auth);
    this.$store.dispatch("users/viewUserResident");
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    async submitHandlerRegister() {
      this.isLoaded = true;
      var complainant = this.user_residents.filter(data=>data.id==this.register.complainant_id)
      var defendant = this.user_residents.filter(data=>data.id==this.register.defendant_id)
      this.register.complainant = complainant[0].name
      this.register.defendant = defendant[0].name
      try {
        await this.$store.dispatch("blotter/addBlotter", this.register);
        this.$toastr.s("SUCCESS MESSAGE", "Successfully Added!");
        this.$emit("cancel");
      } catch (error) {
        alert(error);
      }
      this.isLoaded = false;
    },
    selectRegister() {
      if (this.isRegister) this.isRegister = false;
      else this.isRegister = true;
    },
  },
};
</script>

<style>
</style>