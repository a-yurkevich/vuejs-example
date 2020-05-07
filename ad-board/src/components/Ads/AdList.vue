<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card
          class="elevation-3 mb-5"
          v-for="ad in ads"
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
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        ads: [
          {
            id: '1',
            title: 'Bird',
            description: 'This is a bird',
            promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
        ]
      }
    }
  }
</script>
