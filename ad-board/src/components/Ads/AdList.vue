<template>
  <v-container>
    <v-layout row v-if="!loading && myAds.length !== 0">
      <v-flex xs12 sm6>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card
          class="elevation-3 mb-5"
          v-for="ad in myAds"
          :key="ad.id"
        >
          <v-layout>
            <v-flex xs4>
              <v-img
                :src="ad.imageSrc"
                height="150px"
              >
              </v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text class="text--primary">
                <h3>{{ad.title}}</h3>
                <p>{{ad.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="indigo"
                  dark
                  :to="'/ad/' + ad.id"
                >Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-else-if="!loading && myAds.length === 0">
      <v-flex xs12 class="text-xs-center">
        <h1 class="text--secondary mb-3">You have no ads</h1>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          :size="70"
          color="amber"
          indeterminate
        ></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      myAds () {
        return this.$store.getters.myAds
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
