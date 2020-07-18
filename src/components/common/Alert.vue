<template>
  <v-alert :value="showAlert" :type="type">{{ alertMessage }}</v-alert>
</template>

<script>
export default {
  props: {
    showAlert: Boolean,
    alertMessage: String,
    type: String
  }
};
</script>

<style>
</style>