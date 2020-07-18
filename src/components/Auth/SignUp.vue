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
              <v-text-field
                label="Email"
                name="emaik"
                prepend-icon="mdi-account"
                type="text"
                v-model="credentials.email"
                :error="errors && $v.credentials.email.$invalid"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="credentials.password"
                :error="errors && $v.credentials.password.$invalid"
              ></v-text-field>

              <v-text-field
                id="confirm-password"
                label="Confirm password"
                name="confirm-password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="credentials.confirmPassword"
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
import { validationMixin } from "vuelidate";
import { required, email, sameAs } from "vuelidate/lib/validators";

export default {
  data: () => ({
    credentials: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    errors: false
  }),
  mixins: [validationMixin],
  validations: {
    credentials: {
      email: { required, email },
      password: { required },
      confirmPassword: { required, sameAs: sameAs("password") }
    }
  },
  methods: {
    onSubmit() {
      this.validate();
      const { email, password, confirmPassword } = this.credentials;

      console.log({ email, password, confirmPassword });
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