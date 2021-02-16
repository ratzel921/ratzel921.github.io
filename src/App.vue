<template>
  <v-app id="app" :class="getTheme">
    <TopNavBar></TopNavBar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <Footer></Footer>

  </v-app>
</template>

<script>
import TopNavBar from "@/views/components/TopNavBar";
import Footer from "@/views/components/Footer";
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {Footer, TopNavBar},
  data() {
      return {
        
      }
    },
  computed: {
    ...mapGetters(['getTheme']),
  },
};
</script>

<style src="@/assets/style/main.scss" lang="scss"></style>

