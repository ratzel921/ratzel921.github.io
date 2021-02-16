<template>
  <v-container class="text-center">
    <v-row >
      <v-col cols="12" align="center">
        <v-card class="px-5" elevation="12">
          <h2 class="display-1 font-weight-bold py-3 text-center">{{navigation.skills}}</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row justify="center">
            <v-col v-for="(skill, i) in skills" :key="i" cols="6" md="2">
                <v-img height="100" width="100" :src="require(`@/assets/${skill.src}`)" :alt="skill.title" />
              <div class="justify-center ">
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
          src: 'icons/js.png'
        },
        {
          title: 'NodeJs',
          src: 'icons/nodejs.png'
        },
        {
          title: 'VueJs',
          src: 'icons/vuejs.png'
        },
        {
          title: 'Jest',
          src: 'icons/jest.png'
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
          src: 'icons/keycloak.png'
        },
        {
          title: 'Auth0',
          src: 'icons/auth0.png'
        },
        {
          title: 'C++',
          src: 'icons/c++.png'
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
          title: 'Github',
          src: 'icons/github.png'
        },
        {
          title: 'Github Actions',
          src: 'icons/githubActions.png'
        },
        {
          title: 'Gitlab',
          src: 'icons/gitlab.png'
        },
        {
          title: 'AWS',
          src: 'icons/aws.png'
        },
        {
          title: 'Azure',
          src: 'icons/azure.png'
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
          title: 'Redis',
          src: 'icons/redis.png'
        },
        {
          title: 'Figma',
          src: 'icons/figma.png'
        },
        {
          title: 'Raspberry PI',
          src: 'icons/raspberryPI.png'
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
