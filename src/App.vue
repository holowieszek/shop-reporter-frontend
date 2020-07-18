<template>
  <v-app>
    <Header />

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
