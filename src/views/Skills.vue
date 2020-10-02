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
        <v-col v-for="(skill, i) in skills" :key="i" cols="6" sm="4" md="2">
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" >
                  <v-icon >{{skill.icon}}</v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>

            <div class="justify-center text-uppercase">
              {{skill.title}}
            </div>
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
        },
        {
          icon: 'fab fa-css3-alt',
          title: 'CSS',
        },
        {
          icon: 'fab fa-js-square',
          title: 'JavaScript',
        },
        {
          icon: 'fab fa-vuejs',
          title: 'VueJs',
        },
        {
          icon: 'fab fa-java',
          title: 'Java & Spring Boot',
        },
        {
          icon: 'fab fa-docker',
          title: 'Docker',
        },
        {
          icon: 'fab fa-python',
          title: 'Python',
        },
        {
          icon: 'fab fa-aws',
          title: 'AWS',
        },
        {
          icon: 'fab fa-aws',
          title: 'Terraform',
        },
        {
          icon: 'fab fa-aws',
          title: 'Keycloak',
        },
        {
          icon: 'fab fa-aws',
          title: 'Postgresql',
        },
        {
          icon: 'fab fa-aws',
          title: 'MySql',
        },
        {
          icon: 'fab fa-aws',
          title: 'MongoDB',
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