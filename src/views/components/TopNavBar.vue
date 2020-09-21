<template>
  <v-app-bar app dark color="#292929" height="50">
    <v-btn text @click="$vuetify.goTo('#welcome')">
      Dominik Ratzel
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="$vuetify.goTo('#about-me')">
      About
    </v-btn>
    <v-btn text @click="$vuetify.goTo('#skills')">
      Skills
    </v-btn>
    <v-btn text @click="$vuetify.goTo('#stats')">
      Stats
    </v-btn>
    <v-btn text @click="$vuetify.goTo('#projects')">
      Projects
    </v-btn>
    <v-btn text @click="$vuetify.goTo('#contact')">
      Contact
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopNavBar"
}
</script>

<style scoped>

</style>