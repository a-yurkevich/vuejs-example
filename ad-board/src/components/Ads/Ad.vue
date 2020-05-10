<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h1 class="text--secondary mb-3">Ad</h1>
        <v-card v-if="!loading">
          <v-img
            :src="ad.imageSrc"
            height="300px"
          >
          </v-img>
          <v-card-text class="text--primary">
            <h3>{{ad.title}}</h3>
            <p>{{ad.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <addEditAdModal :ad="ad" v-if="isOwner"></addEditAdModal>
            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else>
          <v-flex xs12 class="text-center pt-10">
            <v-progress-circular
              :size="70"
              color="amber"
              indeterminate
            ></v-progress-circular>
          </v-flex>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  },
  components: {
    addEditAdModal: EditAdModal
  }
}
</script>
