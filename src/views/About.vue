<template>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-row align="center" justify="center">
              <v-card flat>
                <v-row align="center" justify="center">
                  <v-avatar class="elevation-6 mb-6" size="256">
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
                  <v-col cols="2">
                    <v-btn icon text href="mailto:dominikratzel16@gmail.com">
                      <v-icon>mdi-gmail</v-icon>
                    </v-btn>
                  </v-col>

                  <v-col cols="2">
                    <v-btn icon text href="https://github.com/ratzel921/">
                      <i class="fa fa-github"></i>
                    </v-btn>
                  </v-col>

                  <v-col cols="2">
                    <v-btn icon text href="https://gitlab.mi.hdm-stuttgart.de/dr079">
                      <i class="fa fa-gitlab"></i>
                    </v-btn>
                  </v-col>

                  <v-col cols="2">
                    <v-btn icon text href="https://de-de.facebook.com/dominik.ratzel">
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                  </v-col>

                  <v-col cols="2">
                    <v-btn icon text href="https://www.instagram.com/ratzeldominik/">
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                  </v-col>

                  <v-col cols="2">
                    <v-btn icon text href="https://de.linkedin.com/in/dominik-ratzel-19652a1a3">
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                  </v-col>

                </v-row>
              </v-card>
            </v-row>
        </v-col>
        <v-col cols="8">
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

    }
  },
}
</script>

<style lang="scss" scoped>

</style>
