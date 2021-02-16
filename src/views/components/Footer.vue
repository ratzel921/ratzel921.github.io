<template>
  <v-footer class="justify-center" height="50">
    <div class="title text--lighten-1 text-center">
      &copy; {{ (new Date()).getFullYear() }} {{navigation.footer}}
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    navigation() {
      return this.$t("navigation");
    },
  }
}
</script>

<style scoped>

</style>