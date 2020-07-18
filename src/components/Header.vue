<template>
  <v-app-bar app color="primary" dark>
    <v-btn to="/" text :ripple="false">
      <span>App</span>
    </v-btn>

    <v-spacer></v-spacer>

    <div v-for="(route, index) in routes" :key="index">
      <v-btn
        :to="route.path"
        v-if="route.forLogged === isAuthenticated"
        @click="route.title.toLowerCase() === 'logout' ? onSignOut() : null"
        text
      >
        <span>{{ route.title }}</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    routes: [
      { path: "/signin", title: "Sign In", forLogged: false },
      { path: "/signup", title: "Sign Up", forLogged: false },
      { path: "/logout", title: "Logout", forLogged: true }
    ]
  }),
  computed: mapGetters(["isAuthenticated"]),
  methods: {
    ...mapActions(["signOut"]),
    async onSignOut() {
      await this.signOut();

      return this.$router.push("/signin");
    }
  }
};
</script>

<style>
</style>