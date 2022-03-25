<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Navbar />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>