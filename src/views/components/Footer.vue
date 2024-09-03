<template>
  <v-footer class="footer" :class="getTheme">
    <a href="https://odepla.de">© 2023 {{navigation.footer}}</a>
    <router-link to="/imprint">{{navigation.imprint}}</router-link>
    <router-link to="/privacy">{{navigation.privacy}}</router-link>
  </v-footer>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapGetters(['getTheme']),
    navigation() {
      return this.$t("navigation");
    },
  }
}
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer > * {
  margin: 0 10px;
}
</style>