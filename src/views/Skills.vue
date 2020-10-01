<template>
  <div>
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Skills</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col v-for="({ icon, title, text }, i) in skills" :key="i" cols="12" md="4">
          <v-card class="py-12 px-4" color="grey lighten-5" flat>
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" size="88">
                  <v-icon large v-text="icon"></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title class="justify-center font-weight-black text-uppercase" v-text="title"></v-card-title>

            <v-card-text class="subtitle-1" v-text="text">
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          icon: 'fab fa-html5',
          title: 'HTML',
          text: 'Website Development',
        },
        {
          icon: 'fab fa-css3-alt',
          title: 'CSS',
          text: 'Software Development for Backend Technologies like Spring Boot',
        },
        {
          icon: 'fab fa-js-square',
          title: 'JavaScript',
          text: 'Deployment with Docker',
        },
        {
          icon: 'fab fa-vuejs',
          title: 'VueJs',
          text: 'Website Development for Frontend and Hosted in Docker',
        },
        {
          icon: 'fab fa-java',
          title: 'Java',
          text: 'Software Development for Backend Technologies like Spring Boot',
        },
        {
          icon: 'fab fa-docker',
          title: 'Docker',
          text: 'Deployment with Docker',
        },
        {
          icon: 'fab fa-python',
          title: 'Python',
          text: 'Software Development with Python',
        },
        {
          icon: 'fab fa-aws',
          title: 'AWS',
          text: 'Deployment with AWS',
        },
      ],
      jobs: [
        {
          jobTitle: 'Elektroniker für Energie- und Gebäudetechnik',
          firmName: 'ELektrohaus Brenner',
          location: 'Kuppingen',
          begin: '',
          end: '',
          workDescription: '',
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>