<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Sign up</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form @submit.prevent="onSubmit">
            <v-card-text>
              <Alert :showAlert="showAlert" type="error" :alertMessage="alertMessage" />
              <v-text-field
                label="Email"
                name="emaik"
                prepend-icon="mdi-account"
                type="email"
                v-model.trim="credentials.email"
                :error="errors && $v.credentials.email.$invalid"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model.trim="credentials.password"
                :error="errors && $v.credentials.password.$invalid"
              ></v-text-field>

              <v-text-field
                id="confirm-password"
                label="Confirm password"
                name="confirm-password"
                prepend-icon="mdi-lock"
                type="password"
                v-model.trim="credentials.confirmPassword"
                :error="errors && $v.credentials.confirmPassword.$invalid"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" type="submit" :disabled="$v.credentials.$invalid">Sign up</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, email, sameAs } from "vuelidate/lib/validators";

import Alert from '../common/Alert'

export default {
  data: () => ({
    credentials: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    errors: false,
    showAlert: false,
    alertMessage: ""
  }),
  components: { Alert },
  mixins: [validationMixin],
  validations: {
    credentials: {
      email: { required, email },
      password: { required },
      confirmPassword: { required, sameAs: sameAs("password") }
    }
  },
  methods: {
    ...mapActions(["signUp"]),
    async onSubmit() {
      this.validate();
      const { credentials } = this;

      const { error } = await this.signUp(credentials);

      if (error) {
        this.alertMessage = error.message;
        this.showAlert = true;
      } else {
        this.$router.push('/')
      }
    },
    validate() {
      if (this.$v.credentials.$invalid) {
        this.errors = true;
        return;
      }
    }
  }
};
</script>

<style>
</style>