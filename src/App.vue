<template>
  <v-app>
    <TopNavBar></TopNavBar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer></Footer>

  </v-app>
</template>

<script>
import TopNavBar from "@/views/components/TopNavBar";
import Footer from "@/views/components/Footer";
export default {
  name: 'App',
  components: {Footer, TopNavBar},
  data() {
      return {
        
      }
    },
};
</script>
