<template>
  <div>
    <!-- <v-img
      src="/images/hero-img.jpeg"
      color="transparent"
      height="85vh"
      gradient="to top right, rgba(100,115,201,.33), rgba(0,0,0,0.1)"
      class="d-flex justify-start align-center pl-16"
    >
      <v-row>
        <v-col cols="8">
          <div class="text-h2 white--text">
            <b>NEW STAYCATION ROOM AVAILABLE NOW</b>
          </div>
          <div class="text-h5 white--text">
            <b>
              Staycation for BER Months!<br />
              2022
            </b>
          </div>
          <div class="my-10 white--text">
            <v-btn depressed color="secondary" dark>
              BOOK NOW
            </v-btn>
          </div>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
    </v-img> -->
      <v-row class="px-10">
        <v-col  cols="6" align-self="center" class="px-10 bounce" transition="slide-x-transition">
          <div class="text-h4 secondary--text">
            <b>No pain! No gain!</b>
          </div>
          <div class="text-h5 black--text">
            <b>
              Gym Promo for BER Months!<br />
              2022
            </b>
          </div>
          <div class="my-10 black--text">
            <!-- <v-btn depressed color="secondary" dark @click="bookNow"> BOOK NOW </v-btn> -->
          </div>
        </v-col>
        <!-- <v-col align="center" cols="6">
          <v-img src="https://img.freepik.com/free-vector/athletes-doing-fitness-exercise-gym-with-panoramic-windows-isolated-flat-vector-illustration-cartoon-people-cardio-training-weight-lifting_74855-8225.jpg?w=1800&t=st=1665667790~exp=1665668390~hmac=00ccd8fb9ff32d2848cd961ecce6c8bf786f3546915d2bb8db7e313841ad0e05" height="400" width="650" contain></v-img>
        </v-col> -->
      </v-row>
  </div>
</template>

<script>

export default {
  methods:{
    bookNow(){
      if(this.$auth.loggedIn){

      }
      else{
        window.location.reload()
      }
    }
  }
};
</script>

<style>

</style>