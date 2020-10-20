<template>
  <v-app-bar app dark color="#292929" height="50">
    <v-btn class="mx-auto" text to="/" @click="$vuetify.goTo('#welcome')">
      Dominik Ratzel
    </v-btn>
    <div class="mx-auto" v-if="$route.path === '/' && $vuetify.breakpoint.name !== 'xs'">
      <v-spacer></v-spacer>
      <v-btn text @click="$vuetify.goTo('#about-me')">
        About
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#skills')">
        Skills
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#projects')">
        Projects
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#contact')">
        Contact
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopNavBar",

}
</script>

<style scoped lang="scss">
.v-btn:before {
  display: none;
}

</style>