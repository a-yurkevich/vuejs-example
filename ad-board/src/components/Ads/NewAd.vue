<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field
            label="Ad title"
            name="title"
            color="indigo"
            type="text"
            required
            :rules="[v => !!v || 'Title is required']"
            v-model="title"
          />

          <v-text-field
            label="Description"
            name="description"
            color="indigo"
            type="text"
            :rules="[v => !!v || 'Description is required']"
            v-model="description"
          />
        </v-form>
        <v-layout row>
          <v-flex xs12>
            <v-btn
              color="blue-grey"
              dark
              class="ma-2"
            >Upload
              <v-icon right>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg" height="100px" alt="">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
              v-model="promo"
              :label="'Add to promo'"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              class="success"
              @click="createAd"
            >Create ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
          console.log(ad);
        }
      }
    }
  }
</script>
