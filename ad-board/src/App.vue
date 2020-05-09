<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item
          v-for="link of links"
          :key="link.title"
          link
          :to="link.url"
        >
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.title">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">
          Ad Board
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        v-for="link of links"
        :key="link.title"
        :to="link.url"
        link
        class="ma-2 hidden-sm-and-down"
        outlined
        color="white">
        {{link.title}}
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <template v-if="error">
      <v-snackbar
        color="error"
        :multi-line="true"
        :timeout="7000"
        @input="closeError"
        :value="true"
      >
        {{error}}
        <v-btn
          dark
          text
          @click="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>

    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      links: [
        {title: 'Home', icon: 'mdi-home', url: '/'},
        {title: 'Login', icon: 'mdi-lock', url: '/login'},
        {title: 'Registration', icon: 'mdi-face', url: '/registration'},
        {title: 'Orders', icon: 'mdi-bookmark', url: '/orders'},
        {title: 'New ad', icon: 'mdi-plus-circle-outline', url: '/new'},
        {title: 'My ads', icon: 'mdi-clipboard-list-outline', url: '/list'}
      ]
    }),
    computed: {
      error () {
        return this.$store.getters.error
      }
    },
    methods: {
      closeError () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
