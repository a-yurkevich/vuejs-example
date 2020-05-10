<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-btn
      class="mr-5"
      @click.stop="modal = true"
    >
      Edit
    </v-btn>

    <v-dialog
      v-model="modal"
      max-width="320"
    >
      <v-card>
        <v-card-title class="headline">Edit Ad</v-card-title>

        <v-card-text>
          <v-text-field
            label="Title"
            name="title"
            color="indigo"
            type="text"
            v-model="editedTitle"
          />
          <v-text-field
            label="Description"
            name="description"
            color="indigo"
            type="text"
            v-model="editedDescription"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            @click="onCancel"
          >
            Cancel
          </v-btn>

          <v-btn
            class="primary"
            @click="onSave"
          >
            Save
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
      editedTitle: this.ad.title,
      editedDescription: this.ad.description
    }
  },
  methods: {
    onCancel () {
      this.modal = false
      this.editedTitle = this.ad.title
      this.editedDescription = this.ad.description
    },
    onSave () {
      if (this.title !== '' && this.editedDescription !== '') {
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
        })
        this.modal = false
      }
    }
  }
}
</script>
