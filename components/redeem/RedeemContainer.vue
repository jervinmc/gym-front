<template>
  <v-sheet width="85vw">
    <div class="pa-10" align="center">
      <div style="max-width: 700px">
        <v-text-field
          outlined
          v-model="search"
          class="rounded-lg"
          placeholder="Search"
          color="secondary"
          hide-details
          append-icon="mdi-magnify"
        ></v-text-field>
      </div>
      <div>
        <div>
          <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
            <v-slide-item v-for="n in 15" :key="n">
              <div class="mx-3 py-5">
                <v-card elevation="2" class="rounded-xl pointer" >
                  <div class="mx-5 py-5">
                    <v-icon size="40" color="secondary"> mdi-cart </v-icon>
                    <div style="font-size:14px">Food and Beverages</div>
                  </div>
                </v-card>
              </div>
            </v-slide-item>
          </v-slide-group>
        </div>
        <v-row no-gutters>
          <v-col cols="3" v-for="x in 15" :key="x">
            <v-card
              :loading="loading"
              class="mx-2 my-2 rounded-lg pointer"
              max-width="300"
            >
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

                <div class="my-4 text-subtitle-1" align="start">
                  <b>10 points</b>
                </div>

                <div align="start">
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn color="secondary--text" text @click="$Location(`/redeem/add?id=${x}`)">
                  <b class="secondary--text"> Get </b>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
    data(){
        return{
            search:''
        }
    }
};
</script>

<style>
</style>