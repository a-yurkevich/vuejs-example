<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-btn
      class="mr-5"
      color="primary"
      dark
      @click.stop="modal = true"
    >
      Buy
    </v-btn>

    <v-dialog
      v-model="modal"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Do you want to buy it?</v-card-title>

        <v-card-text>
          <v-text-field
            label="Your name"
            name="name"
            color="indigo"
            type="text"
            v-model="name"
          />
          <v-text-field
            label="Your phone"
            name="phone"
            color="indigo"
            type="text"
            v-model="phone"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="onCancel"
            :disabled="localLoading"
          >
            Close
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="onSave"
            :disabled="localLoading"
            :loading="localLoading"
          >
            Buy
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    props: ['ad'],
    data () {
      return {
        modal: false,
        name: '',
        phone: '',
        localLoading: false
      }
    },
    methods: {
      onCancel () {
        this.modal = false;
        this.name = ''
        this.phone = ''
      },
      onSave () {
        if (this.name !== '' && this.phone !== '') {
          this.localLoading = true
          this.$store.dispatch('createOrder', {
            name: this.name,
            phone: this.phone,
            adId: this.ad.id,
            ownerId: this.ad.ownerId
          })
          .finally(() => {
            this.name = ''
            this.phone = ''
            this.localLoading = false
            this.modal = false
          })
        }
      }
    }
  }
</script>
