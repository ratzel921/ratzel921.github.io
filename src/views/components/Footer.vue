<template>
  <div>
    <v-footer v-if="$vuetify.breakpoint.name !== 'xs'" class="justify-center" color="#292929" height="50">
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} Made with 💜 by Dominik Ratzel
      </div>
    </v-footer>
    <v-footer v-else class="justify-center" color="#292929" height="70">
      <div>
        <div  class="title font-weight-light grey--text text--lighten-1 text-center">
          &copy; {{ (new Date()).getFullYear() }} Made with 💜
        </div>
        <div class="title font-weight-light grey--text text--lighten-1 text-center">
          by Dominik Ratzel
        </div>
      </div>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>