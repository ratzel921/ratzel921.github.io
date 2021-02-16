<template>
  <v-menu :dark="getTheme === 'darkTheme'" auto offset-y bottom transition="slide-y-transition">
    <template v-slot:activator="{ on }">
      <v-app-bar-nav-icon v-on="on" icon>
        <flag :iso="Flag" v-bind:squared="false" />
      </v-app-bar-nav-icon>
    </template>

    <v-btn
        v-for="entry in languages"
        :key="entry.title"
        @click="changeLocale(entry.language)"
    >
      <flag :iso="entry.flag" v-bind:squared="false" />
    </v-btn>
  </v-menu>
</template>

<script>
import {mapGetters} from "vuex";
import i18n from "@/i18n";

export default {
  name: "FlagDropDown",

  computed: {
    ...mapGetters([
      "languages",
      "getTheme"
    ]),

    Flag() {
      return this.$t("labels.Flag");
    },
  },

  beforeCreate() {
    console.log('Before Create')
    this.$locale.currentLanguage();
  },

  methods: {
    // Changes the language for the i18n.js and also the vuetify.js
    changeLocale(locale) {
      console.log('Changing Locale')
      i18n.locale = locale;
      this.$locale.change(locale);
    },
  }
}
</script>

<style scoped>

</style>