<template>
  <v-sheet class="py-10">
    <v-slide-y-transition>
    <div class="text-h5 pl-10 v-leave-active" v-show="isShow">
       Latest Gym Exercise
    </div>
    </v-slide-y-transition>
    <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
      <v-slide-item v-for="n in 5" :key="n" >
        <v-card :loading="loading" class="mx-5 my-5" max-width="300">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img
            height="150"
            :src="images[n]"
          ></v-img>
          <v-card-title>{{title[n]}}</v-card-title>
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
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="secondary--text" text @click="$Location('redeem')">
             <b class="secondary--text"> Get </b>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
    created(){
        this.isShow = true
    },
    data(){
        return{
          title:['Leg Workout','Chest Workout','Arms Workout','Push ups','Curl Ups'],
          images:['https://www.muscleandfitness.com/wp-content/uploads/2019/11/Young-Muscular-Man-Doing-Lunges-In-Dark-Gym.jpg?quality=86&strip=all',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaq2cPMU0WkHfajwxy4BB6zJD4HddqHGKGog9VaHOkF4w8UsUhN4VH5WCFiNoe_3h04gY&usqp=CAU',
          'https://www.bodybuilding.com/images/2019/july/best-beginner-weight-training-guide-with-easy-to-follow-workout-header-b-960x540.jpg',
          'https://hips.hearstapps.com/hmg-prod/images/man-lifting-weights-in-gymnasium-royalty-free-image-591403645-1555718789.jpg',
          'https://cdn.mos.cms.futurecdn.net/KLZwUWe4JwyyXY7pV7CpaU-320-80.jpg'
          ],
            isShow:false,
        }
    }
};
</script>

<style>
</style>