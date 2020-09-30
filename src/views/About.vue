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
                    <v-btn icon text href="https://github.com/ratzel921/">
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




    <!-- <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
        <div>
          Hey i am Dominik Ratzel
        </div>
        <div>
          Studying "Medieninformatik" at the "Hochschule der Medien" in Stuttgart Germany
        </div>
        <div>
          Since September 2020, I've been doing my internship at Novatec Consulting GmbH in Leinfelden-Echterdingen
        </div>
      </v-responsive>

      <v-avatar class="elevation-12 mb-12" size="128">
        <v-img src="@/assets/creator/dr079.jpeg"></v-img>
      </v-avatar>

      <div></div>

      <v-btn color="grey" to="/about" outlined large>
                <span class="grey--text text--darken-1 font-weight-bold">
                    Learn More
                </span>
      </v-btn>
    </v-container>

    <div class="py-12"></div> -->
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
