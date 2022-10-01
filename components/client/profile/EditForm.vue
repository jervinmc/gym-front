<template>
  <div class="px-10">
    <div>
      
    </div>
    <v-form
      v-model="isValid"
      ref="form"
      lazy-validation
      @submit.prevent="submitHandler"
    >
      <div align="start" class="py-10">
        <div align="center" class="py-10 secondary--text text-h4">
          Edit Profile
        </div>
        <div>
          <v-row>
            <v-col>
              Firstname
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="account.firstname"
              ></v-text-field>
            </v-col>
            <v-col>
              Lastname
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="account.lastname"
              ></v-text-field>
            </v-col>
            <v-col>
              Gender
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="account.gender"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col>
              Email Address
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="account.email"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col>
              Mobile Number
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="account.mobile_number"
              ></v-text-field>
            </v-col>
            <v-col>
              Birthdate
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="account.birthdate"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col>
              Address
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="account.address"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col>
              Select Province
              <v-select
                outlined
                :items="$provinces()"
                item-text="name"
                item-value="name"
                :rules="standardRules"
                v-model="account.province"
              ></v-select>
            </v-col>
            <v-col>
              Select City
              <v-select
                outlined
                :items="$cities(account.province)"
                :rules="standardRules"
                item-text="name"
                item-value="name"
                v-model="account.city"
              ></v-select>
            </v-col>
            <v-col>
              Select Barangay
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="account.barangay"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div class="px-10 pointer" align="center">
          <v-btn width="200" dark depressed color="grey" @click="$router.go(-1)"> Cancel </v-btn>
          <v-btn width="200" dark depressed color="secondary" type="submit">
            Submit
          </v-btn>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import validations from "@/utils/validations";
var cloneDeep = require('lodash.clonedeep');
export default {
  data() {
    return {
      account: {
        firstname: "",
        lastname: "",
        gender: "",
        email: "",
        confirm_email: "",
        mobile_number: "",
        birthdate: "",
        address: "",
        province: "Metro Manila",
        city: "",
        barangay: "",
        password: "",
        confirm_password: "",
      },
      philippines:'',
      ...validations,
      isValid: false,
    };
  },
  created(){
    this.account =cloneDeep(this.$auth.user)
  },
  methods: {
    getProvince(){
      
       
      return []
    },
    async submitHandler() {
      var isValidData = false;
      isValidData = this.$refs.form.validate();
      if (!isValidData) return;
      await this.$store.dispatch("users/editUser", this.account);
      alert("Successfully Updated !");
      location="/client/profile"
    },
  },
};
</script>

<style>
</style>