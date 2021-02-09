<template>
  <v-app-bar app dark color="#292929" height="50">
    <v-btn class="mx-auto" text to="/" @click="$vuetify.goTo('#about-me')">
      Dominik Ratzel
    </v-btn>
    <div class="mx-auto" v-if="$route.path === '/' && $vuetify.breakpoint.name !== 'xs'">
      <v-spacer></v-spacer>
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
      <FlagDropDown/>
    </div>
  </v-app-bar>
</template>

<script>
import FlagDropDown from "@/views/components/FlagDropDown";
export default {
  name: "TopNavBar",
  components: {FlagDropDown},
  computed: {
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