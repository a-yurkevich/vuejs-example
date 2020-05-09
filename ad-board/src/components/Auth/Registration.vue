<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="indigo"
            dark
            flat
          >
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                label="Email"
                name="email"
                color="indigo"
                prepend-icon="mdi-account"
                type="email"
                :rules="emailRules"
                v-model="email"
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                color="indigo"
                prepend-icon="mdi-lock"
                type="password"
                :rules="passwordRules"
                v-model="password"
              />

              <v-text-field
                id="confirm-password"
                label="Confirm password"
                name="confirm-password"
                color="indigo"
                prepend-icon="mdi-lock"
                type="password"
                :rules="confirmPasswordRules"
                v-model="confirmPassword"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="normal"
              @click="onSubmit"
              :disabled="!valid || loading"
              :loading="loading"
            >Create account</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be more than 6 characters'
        ],
        confirmPasswordRules: [
          v => !!v || 'Password is required',
          v => v === this.password || 'Password should match'
        ]
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('registerUser', user)
            .then(() => {
              this.$router.push('/')
            })
            .catch(() => {})
        }
      }
    }
  }
</script>
