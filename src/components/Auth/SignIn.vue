<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Sing in</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form @submit.prevent.stop="onSubmit">
            <v-card-text>
              <Alert :showAlert="showAlert" type="error" :alertMessage="alertMessage" />
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="email"
                v-model.trim="credentials.email"
                :error="errors && $v.credentials.email.$invalid"
                autofocus
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
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" type="submit" :disabled="$v.credentials.$invalid">SIgn in</v-btn>
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
import { required, email } from "vuelidate/lib/validators";

import Alert from "../common/Alert";

export default {
  data: () => ({
    credentials: {
      email: "",
      password: ""
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
      password: { required }
    }
  },
  methods: {
    ...mapActions(["signIn"]),
    async onSubmit() {
      this.validate();
      const { credentials } = this;

      const { error } = await this.signIn(credentials);

      if (error) {
        this.alertMessage = error.message;
        this.showAlert = true;
      } else {
        this.$router.push('/perfume')
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