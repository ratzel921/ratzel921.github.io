<template>
  <v-container class="text-center">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="px-5">
          <h2 class="display-2 font-weight-bold py-3 text-center">{{navigation.skills}}</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row justify="center">
            <v-col v-for="(skill, i) in skills" :key="i" cols="6" sm="4" md="2">
              <v-avatar>
                <v-img height="50" width="50" :src="require(`@/assets/${skill.src}`)" :alt="skill.title" />
              </v-avatar>
              <div class="justify-center text-uppercase">
                {{skill.title}}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          title: 'HTML',
          src: 'icons/html.png'
        },
        {
          title: 'CSS',
          src: 'icons/css.png'
        },
        {
          title: 'JavaScript',
          src: 'icons/javascript.png'
        },
        {
          title: 'VueJs',
          src: 'icons/vuejs.png'
        },
        {
          title: 'Jest',
          src: 'icons/jest.jpg'
        },
        {
          title: 'Java',
          src: 'icons/java.png'
        },
        {
          title: 'Spring Boot',
          src: 'icons/springBoot.png'
        },
        {
          title: 'Docker',
          src: 'icons/docker.png'
        },
        {
          title: 'Kubernetes',
          src: 'icons/kubernetes.png'
        },
        {
          title: 'Keycloak',
          src: 'icons/keycloak.jpg'
        },
        {
          title: 'C++',
          src: 'icons/C++.png'
        },
        {
          title: 'Python',
          src: 'icons/python.png'
        },
        {
          title: 'Linux',
          src: 'icons/linux.png'
        },
        {
          title: 'AWS',
          src: 'icons/aws.png'
        },
        {
          title: 'Terraform',
          src: 'icons/terraform.png'
        },
        {
          title: 'Vagrant',
          src: 'icons/vagrant.png'
        },
        {
          title: 'Postgresql',
          src: 'icons/postgresql.png'
        },
        {
          title: 'MongoDB',
          src: 'icons/mongoDB.png'
        },
        {
          title: 'Figma',
          src: 'icons/figma.png'
        },
        {
          title: 'Auth0',
          src: 'icons/auth0.jpg'
        },
      ],
        }
    },
    computed: {
        getImage(path) {
            return require(path)
        },
      navigation() {
        return this.$t("navigation");
      },
    }
}
</script>

<style scoped>

</style>
