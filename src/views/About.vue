<template>
  <v-container>
    <v-row align="center" justify="center" class="pt-3">
      <v-card flat color="grey lighten-3" >
        <v-row>
          <v-col cols="12" align="center">
            <v-avatar class="elevation-12" :size="size">
              <v-img src="@/assets/creator/dominik.jpeg"></v-img>
            </v-avatar>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" align="center">
            <div class="mt-5 headline">
              {{ content.welcome1 }}
            </div>
          </v-col>
        </v-row>

        <v-row >
          <v-col cols="12" align="center">
            <div>
              {{ content.welcome2 }}
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col align="center" v-for="item in links" :key="item.name">
            <v-btn class="navHover" icon text :href="item.link">
              <v-icon>{{item.icon}}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      links: [
        {
          name: 'Gmail',
          icon: 'mdi-email',
          link: 'mailto:dominikratzel16@gmail.com'
        },
        {
          name: 'Github',
          icon: 'mdi-github',
          link: 'https://github.com/ratzel921/'
        },
        {
          name: 'Gitlab',
          icon: 'mdi-gitlab',
          link: 'https://gitlab.mi.hdm-stuttgart.de/dr079'
        },
        {
          name: 'Facebook',
          icon: 'mdi-facebook',
          link: 'https://de-de.facebook.com/dominik.ratzel'
        },
        {
          name: 'Instagram',
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/ratzeldominik/'
        },
        {
          name: 'Linkedin',
          icon: 'mdi-linkedin',
          link: 'https://de.linkedin.com/in/dominik-ratzel-19652a1a3'
        },
      ],
    }
  },
  computed: {
    size() {
      if (this.$vuetify.breakpoint.smAndUp) {
        return '400'
      } else {
        return '300'
      }
    },
    content() {
      return this.$t("content");
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
