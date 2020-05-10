<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="text-center pt-5" v-if="loading">
        <v-progress-circular
          :size="70"
          color="amber"
          indeterminate
        ></v-progress-circular>
      </v-flex>
      <v-flex xs12 md6 v-else-if="!loading && orders.length !== 0">
        <h1 class="text--secondary">Orders</h1>
        <v-list
          subheader
          two-line
          flat
        >
          <v-list-item-group
            multiple
            v-for="order in orders"
            :key="order.id"
          >
            <v-list-item>
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox
                    :input-value="order.done"
                    color="primary"
                    :disabled="order.done"
                    @change="markDone(order)"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{order.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn
                    class="indigo"
                    dark
                    :to="'/ad/' + order.adId"
                  >Open</v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
      <v-flex xs12 v-else>
        <h1 class="text--secondary mb-3">You have no orders</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      orders () {
        return this.$store.getters.orders
      }
    },
    methods: {
      markDone (order) {
        this.$store.dispatch('markOrderDone', order.id)
          .then(() => {
            order.done = true
          })
          .catch(() => {})
      }
    },
    created() {
      this.$store.dispatch('fetchOrders')
    }
  }
</script>
