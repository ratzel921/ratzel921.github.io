<template>
    <div class="container">
      <v-row>
        <v-col cols="6">
            <v-row align-content="center" >
              <v-col>
                <v-avatar class="elevation-12 mb-6" size="256">
                  <v-img src="@/assets/creator/dr079.jpeg"></v-img>
                </v-avatar>
              </v-col>

            </v-row>
            
              Dominik Ratzel
        </v-col>
        <v-col cols="6">
          c
        </v-col>
      </v-row>
    </div>




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
.container {
  align-items: center;
}
</style>
