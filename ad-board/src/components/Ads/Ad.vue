<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1 class="text--secondary mb-3">Ad</h1>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
            height="300px"
          >
          </v-img>
          <v-card-text class="text--primary">
            <h3>Lorem</h3>
            <p>Lorem ipsum</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn>Edit</v-btn>
            <v-btn
              class="indigo"
              dark
            >Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
