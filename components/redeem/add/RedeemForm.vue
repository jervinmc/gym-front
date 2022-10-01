<template>
  <div align="center">
    <v-row class="pa-10">
      <v-col>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          height="400"
          width="400"
          class="rounded-xl"
        ></v-img>
      </v-col>
      <v-col align="start">
        <div class="text-h5 black--text">
          <b>iPhone 13 Pro Max with Free Malete</b>
        </div>
        <div class="pb-2">
          Iphone 13 Pro Max has its good condition and can't be broken by
          anyone. you just need to put your earphone here.
        </div>
        <div class="text-h6">20 points</div>
        <div>
          <div>Quantity</div>
          <v-text-field
            outlined
            v-model="redeem.quantity"
            color="secondary"
          ></v-text-field>
        </div>
        <div>
          <div>Messages</div>
          <v-textarea
            outlined
            v-model="redeem.quantity"
            color="secondary"
          ></v-textarea>
        </div>
        <div class="px-10 pointer" align="center">
          <v-btn width="200" dark depressed color="grey"> Cancel </v-btn>
          <v-btn
            width="200"
            :loading="isLoaded"
            dark
            depressed
            color="secondary"
            type="submit"
          >
            Submit
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div class="pa-10" align="start">
      <div class="text-h6"><b>Recommended Items</b></div>
      <div>
        <v-sheet class="py-0">
          <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
            <v-slide-item v-for="n in 15" :key="n">
              <v-card :loading="loading" class="mx-5 my-12" max-width="300">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>
                <v-img
                  height="150"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <v-card-title>Cafe Badilico</v-card-title>
                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>
                    <div class="grey--text ms-4">4.5 (413)</div>
                  </v-row>

                  <div class="my-4 text-subtitle-1"><b>10 points</b></div>

                  <div>
                    Small plates, salads & sandwiches - an intimate setting with
                    12 indoor seats plus patio seating.
                  </div>
                </v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-actions>
                  <v-btn
                    color="secondary--text"
                    text
                    @click="$Location('redeem')"
                  >
                    <b class="secondary--text"> Get </b>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redeem: {
        quantity: 0,
      },
    };
  },
};
</script>

<style>
</style>