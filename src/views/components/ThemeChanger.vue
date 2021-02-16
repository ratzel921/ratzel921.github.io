<template>
  <v-app-bar-nav-icon class="navHover" @click="$store.commit('UPDATE_THEME')">
    <v-icon v-if="getTheme === 'lightTheme'">
      mdi-white-balance-sunny
    </v-icon>
    <v-icon  v-else-if="getTheme === 'darkTheme'">
      mdi-brightness-2
    </v-icon>
  </v-app-bar-nav-icon>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ThemeChanger",


  computed: {
    ...mapGetters([
      "getTheme",
    ]),
  }
}
</script>

<style scoped>

</style>