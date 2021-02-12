<template>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row align="center" justify="center">
              <v-card flat color="grey lighten-3">
                <v-row align="center" justify="center">
                  <v-avatar class="elevation-6" size="500">
                    <v-img src="@/assets/creator/dominik.jpeg"></v-img>
                  </v-avatar>
                </v-row>
                
                <v-row align="center" justify="center">
                  <div class="mt-5 headline">
                    {{ content.welcome1 }}
                  </div>
                </v-row>

                <v-row align="center" justify="center">
                  <div>
                    {{ content.welcome2 }}
                  </div>
                </v-row>

                <v-row>
                  <v-col v-for="item in links" :key="item.name">
                    <v-btn icon text :href="item.link">
                      <v-icon>{{item.icon}}</v-icon>
                    </v-btn>
                  </v-col>

                </v-row>
              </v-card>
            </v-row>
        </v-col>
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
          icon: 'fa fa-envelope',
          link: 'mailto:dominikratzel16@gmail.com'
        },
        {
          name: 'Github',
          icon: 'fa fa-github',
          link: 'https://github.com/ratzel921/'
        },
        {
          name: 'Gitlab',
          icon: 'fa fa-gitlab',
          link: 'https://gitlab.mi.hdm-stuttgart.de/dr079'
        },
        {
          name: 'Facebook',
          icon: 'fa fa-facebook',
          link: 'https://de-de.facebook.com/dominik.ratzel'
        },
        {
          name: 'Instagram',
          icon: 'fa fa-instagram',
          link: 'https://www.instagram.com/ratzeldominik/'
        },
        {
          name: 'Linkedin',
          icon: 'fa fa-linkedin',
          link: 'https://de.linkedin.com/in/dominik-ratzel-19652a1a3'
        },
      ],
    }
  },
  computed: {
    content() {
      return this.$t("content");
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
