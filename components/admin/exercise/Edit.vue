<template>
  <div>
    <v-card class="pa-16">
      <div></div>
      <v-row>
        <v-col>
          <v-row>
            <v-col cols="12">
              <div>Resident Name</div>
              <div>
                <v-text-field
                  readonly
                  :rules="standardRules"
                  outlined
                  dense
                  v-model="register.user"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col>
                  <div>Certificate Type</div>
                  <div>
                    <v-select
                      :rules="standardRules"
                      outlined
                      dense
                      :items="data"
                      item-text="certificate_name"
                      item-value="certificate_name"
                      v-model="register.certificate_type"
                    ></v-select>
                  </div>
                </v-col>
                <v-col>
                  <div>
                    Date to be Issued
                    <div class="text-h5">
                      <v-menu
                        ref="dateIssueMenu"
                        v-model="dateIssueMenu"
                        :close-on-content-click="false"
                        :return-value.sync="register.date_issued"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            dense
                            v-model="register.date_issued"
                            outlined
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="register.date_issued"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            color="primary"
                            @click="dateIssueMenu = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="
                              $refs.dateIssueMenu.save(register.date_issued)
                            "
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col>
                  <div>Findings</div>
                  <div>
                    <v-select
                      :rules="standardRules"
                      outlined
                      dense
                      :items="[
                        'Financial Assistance',
                        'Medical Clearance',
                        'Educational Assitance',
                        'General Requirement',
                      ]"
                      v-model="register.findings"
                    ></v-select>
                  </div>
                </v-col>
                <v-col>
                  <div>Purpose</div>
                  <div>
                    <v-select
                      :rules="standardRules"
                      outlined
                      dense
                      :items="[
                        'No Record on File',
                        'No Derogatory Record',
                        'With Derogatory Record',
                      ]"
                      v-model="register.purpose"
                    ></v-select>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div align="end">
        <v-btn text @click="cancel"> Close </v-btn>
        <v-btn color="primary" @click="submitHandlerRegister"> Submit </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import Vue from "vue";
import * as uuid from "uuid";
import VueToastr from "vue-toastr";
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});
import { mapState, mapActions } from "vuex";
import validations from "@/utils/validations";
export default {
  computed: {
    ...mapState("certificate", ["data"]),
    // residents(){
    //   return this.users.filter(data=>data.account_type=='Resident')
    // }
  },
  props: ["account_type","selectedItem"],
  auth: false,
  data() {
    return {
      userList: [],
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
        date_recorded: "",
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
    this.$store.dispatch("certificate/viewCertificate");
    this.register.user = this.selectedItem.user
    this.register.certificate_type = this.selectedItem.certificate_type
    this.register.date_issued = this.selectedItem.date_issued
    this.register.findings = this.selectedItem.findings
    this.register.purpose = this.selectedItem.purpose
    this.register.certificate_id = uuid.v4();
    console.log(this.$auth);
    this.$store.dispatch("users/viewUserResident");
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    async submitHandlerRegister() {
      this.isLoaded = true;
      this.register.status = "Pending";
      this.register.user_id = this.$auth.user.id;
      try {
        await this.$store.dispatch("service/addServices", this.register);
        this.$toastr.s("SUCCESS MESSAGE", "Successfully Added!");
        this.$emit("cancel");
        this.$store.dispatch("service/viewServicesUser");
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