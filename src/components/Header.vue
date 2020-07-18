<template>
  <v-app-bar app color="primary" dark>
    <v-btn to="/" text :ripple="false">
      <span>App</span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn to="/signin" text>
      <span class="mr-2">Sign in</span>
    </v-btn>
    <v-btn to="/signup" text>
      <span class="mr-2">Sign up</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>