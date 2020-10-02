<template>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-row align="center" justify="center">
              <v-card flat>
                <v-row align="center" justify="center">
                  <v-avatar class="elevation-6" size="256">
                    <v-img src="@/assets/creator/dr079.jpeg"></v-img>
                  </v-avatar>
                </v-row>
                
                <v-row align="center" justify="center">
                  <v-card-title class="justify-center">
                    Dominik Ratzel
                  </v-card-title>
                </v-row>

                <v-row align="center" justify="center">
                  <div>
                    Informatik Student
                  </div>
                </v-row>
                
                <v-row align="center" justify="center">
                  <div>
                    Hochschule der Medien Stuttgart Germany
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
        <v-col cols="12" sm="6">
          <v-row>  
            <v-card-title>Biography</v-card-title>
          </v-row>
          <v-row>
            <p></p>
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
      ]

    }
  },
}
</script>

<style lang="scss" scoped>

</style>
