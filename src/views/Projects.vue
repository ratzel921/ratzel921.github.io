<template>
  <div>
    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold py-3  text-center">{{navigation.projects}}</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row justify="center" >
        <v-col cols="12" xl="6" class="" v-for="(project, i) in projects"
          :key="i" >

          <v-card flat>
            <v-row align="center" justify="center">
            <v-card-title class="font-weight-black mt-4 text-uppercase text-decoration-underline">
              {{project.title}}
            </v-card-title>
          </v-row>

          <v-row align="center" justify="center">
            <div class="title font-weight-light mb-4">
              {{project.shortDescription}}
            </div>
          </v-row>

          <v-row class="text-center" align="center" justify="center">
            <v-carousel :show-arrows-on-hover="true" hide-delimiter-background hide-delimiters :height="Height">
              <v-carousel-item
                v-for="(item,i) in project.screenshots"
                :key="i"
              >
              <v-img :src="require(`@/assets/${item.src}`)" :alt="item.title"/>
              </v-carousel-item>
            </v-carousel>
          </v-row>


          <v-row align="center" justify="center">
            <v-col cols="1"
              v-for="(item, i) in project.technologies" :key="i">
                  <v-img height="50" width="50" :src="require(`@/assets/${item.src}`)" :alt="item.title"/>
              <!-- <v-img width="50" height="50" :src="require(`@/assets/${item.src}`)" :alt="item.title"/> -->

              <!-- <v-icon>{{item.icon}}</v-icon> -->
            </v-col>
          </v-row>

          <v-row  justify="center">
            <v-col cols="4"></v-col>
            <v-col cols="4">
              <v-btn class="ml-n4 grey white--text"  text :to="project.site">
                {{ buttons.reading }}
              </v-btn>
            </v-col>
            <v-col cols="4"></v-col>
          </v-row>
          </v-card>


        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
          {
            site: '/MiniSpielehalle',
            title: 'Mini Spielehalle',
            shortDescription: 'Casino WebApp mit Benutzerverwaltung',
            screenshots: [
              {
                src: 'projects/MiniSpielehalle/home.png',
              },
              {
                src: 'projects/MiniSpielehalle/register.png',
              },
              {
                src: 'projects/MiniSpielehalle/lightMode.png',
              },
              {
                src: 'projects/MiniSpielehalle/roulette.png',
              },
              {
                src: 'projects/MiniSpielehalle/admin.png',
              },
            ],
            technologies: 
              [
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
                  title: 'Gitlab',
                  src: 'icons/gitlab.png'
                },
                
              ],
          },
          {
            site: '/HyphenTechnologies',
            title: 'Hyphen Technologies',
            shortDescription: 'Im September 2020, habe ich ein Startup mit 3 weiteren Personen gegründet',
            screenshots: [
              {
                src: 'projects/DataworkITSolutions/moreComingSoon.png',
              },
              {
                src: 'projects/DataworkITSolutions/moreComingSoon.png',
              },
              {
                src: 'projects/DataworkITSolutions/moreComingSoon.png',
              },
            ],
            technologies: 
              [
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
                  title: 'Gitlab',
                  src: 'icons/gitlab.png'
                },
                {
                  title: 'AWS',
                  src: 'icons/aws.png'
                },
                
              ],
          },
          {
            site: '/Webshop',
            title: 'Webshop',
            shortDescription: 'Webshop WebApp mit Benutzerverwaltung',
            screenshots: [
              {
                src: 'projects/Webshop/gridView.png',
              },
              {
                src: 'projects/Webshop/productView.png',
              },
              {
                src: 'projects/Webshop/shoppingCard.png',
              },
              {
                src: 'projects/Webshop/boughtCard.png',
              },
            ],
            technologies: 
              [
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
                  title: 'Gitlab',
                  src: 'icons/gitlab.png'
                },
                {
                  title: 'Jest',
                  src: 'icons/jest.jpg'
                },
                
              ],
          },
          {
            site: '/DeviceManagement',
            title: 'Device Management',
            shortDescription: 'Geräte- und Serviceverwaltungsanwendung',
            screenshots: [
              {
                src: 'projects/DeviceManagement/serviceOverview.png',
              },
              {
                src: 'projects/DeviceManagement/orderView2.png',
              },
              {
                src: 'projects/DeviceManagement/newService1.png',
              },
              {
                src: 'projects/DeviceManagement/newService2.png',
              },
              {
                src: 'projects/DeviceManagement/newService3.png',
              },
              {
                src: 'projects/DeviceManagement/newService4.png',
              },
              {
                src: 'projects/DeviceManagement/newService5.png',
              },
            ],
            technologies: [
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
                  title: 'Gitlab',
                  src: 'icons/gitlab.png'
                },
                {
                  title: 'Keycloak',
                  src: 'icons/keycloak.jpg'
                },
            ],
          },
          {
            site: '/ParkingControlSystem',
            title: 'Parking Control System',
            shortDescription: 'IoT and Cloud Service Projekt für ein Parkleitsyystem',
            screenshots: [
              {
                src: 'projects/IoTCloudServices/browser-counter.png',
              },
              {
                src: 'projects/IoTCloudServices/connect-devices.png',
              },
              {
                src: 'projects/IoTCloudServices/aws.jpeg',
              },
            ],
            technologies: 
              [
                {
                  title: 'Docker',
                  src: 'icons/docker.png'
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
                  title: 'Terraform',
                  src: 'icons/terraform.png'
                },
                {
                  title: 'Python',
                  src: 'icons/python.png'
                },
                {
                  title: 'Vagrant',
                  src: 'icons/vagrant.png'
                },
              ],
          },
      ],
    }
  },

  computed: {
    navigation() {
      return this.$t("navigation")
    },
    buttons() {
      return this.$t("buttons")
    },
    getImage(path) {
      return require(path)
  	},
    Height() {
      if(this.$vuetify.breakpoint.name === 'xs') {
        return '100%'
      } else {
        return '450'
      }
    } 
  }
}
</script>

<style scoped lang="scss">

.border-top {
  border-top: solid;
}

</style>