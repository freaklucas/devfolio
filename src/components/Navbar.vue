<template>
  <v-app-bar app color="#11111" dark flat class="px-8">
    <v-btn icon>
      <v-icon color="#A7121D">fas fa-code</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('project')">Project</v-btn>
    <v-btn text @click="scroll('about')">about</v-btn>
    <v-btn text @click="scroll('contact')"> contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>