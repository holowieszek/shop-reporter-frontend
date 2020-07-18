<template>
  <v-app-bar app color="primary" dark>
    <v-btn to="/" text :ripple="false">
      <span>App</span>
    </v-btn>

    <v-spacer></v-spacer>
    {{ isAuthenticated }}
    <v-btn to="/signin" text>
      <span>Sign in</span>
    </v-btn>
    <v-btn to="/signup" text>
      <span>Sign up</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['isAuthenticated'])
};
</script>

<style>
</style>