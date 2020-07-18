<template>
  <dir>
    <Alert :showAlert="showAlert" type="error" :alertMessage="alertMessage" />
    <v-data-table
      :headers="headers"
      :items="perfume"
      :items-per-page="50"
      class="elevation-1"
      :loading="loading"
    ></v-data-table>
  </dir>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Alert from "../common/Alert";

export default {
  data: () => ({
    headers: [
      { text: "Brand", align: "start", sortable: true, value: "brand" },
      { text: "Model", align: "start", sortable: true, value: "model" },
      { text: "Capacity", align: "start", sortable: true, value: "capacity" },
      { text: "Price", align: "start", sortable: true, value: "price" }
    ],
    showAlert: false,
    alertMessage: "",
    loading: false
  }),
  components: { Alert },
  computed: mapGetters(["perfume"]),
  methods: mapActions(["getPerfume"]),
  async created() {
    this.loading = true;
    const perfume = await this.getPerfume();
    this.loading = false;

    if (!perfume) {
      this.showAlert = true;
      this.alertMessage = perfume.error;
    }
  }
};
</script>

<style>
</style>