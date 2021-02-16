<template>
  <v-app-bar app dark color="#292929" height="50">
    <v-spacer></v-spacer>
    <v-btn text to="/" @click="$vuetify.goTo('#about-me')">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <div v-if="$route.path === '/' && showNavContent">
      <v-btn text @click="$vuetify.goTo('#about-me')">
        {{ navigation.about }}
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#career')">
        {{ navigation.career }}
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#skills')">
        {{ navigation.skills }}
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#projects')">
        {{ navigation.projects }}
      </v-btn>
      <v-btn text @click="$vuetify.goTo('#contact')">
        {{ navigation.contact }}
      </v-btn>
    </div>
    <FlagDropDown/>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
import FlagDropDown from "@/views/components/FlagDropDown";
export default {
  name: "TopNavBar",
  components: {FlagDropDown},
  computed: {
    showNavContent() {
      if (this.$vuetify.breakpoint.name === "lg" ||  this.$vuetify.breakpoint.name === "xl") {
        return true;
      }
    },
    navigation() {
      return this.$t("navigation");
    },
  }
}
</script>

<style scoped lang="scss">
.v-btn:before {
  display: none;
}

</style>