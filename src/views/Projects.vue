<template>
  <div>
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Projects</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col class="px-4" v-for="(project, i) in projects" 
          :key="i" cols="12" md="4">
          <v-row>
            <!-- TODO: Add Image Slider -->
            <v-img :src="project.src" class="mb-4" 
              height="275" max-width="100%">
            </v-img>
          </v-row>

          <v-row> 
            <h3 class="font-weight-black mb-4 text-uppercase">
              {{project.title}}
            </h3>
          </v-row>

          <v-row > 
            <div class="title font-weight-light mb-4">
              {{project.shortDescription}}
            </div>
          </v-row>

          <v-row align="center" justify="center"> 
            <v-col cols="1" md="3" class="title font-weight-light mb-4" 
              v-for="(item, i) in project.technologies" :key="i">
              <v-icon>{{item.icon}}</v-icon>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-btn class="ml-n4 font-weight-black" text :to="project.site">
            <!-- TODO: Add :to directive to go to the Project page for more infos -->
              Continue Reading
            </v-btn>
          </v-row>

        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
          {
            //src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            site: '/MiniSpielehalle',
            title: 'Mini Spielehalle',
            shortDescription: 'A Web application for an online casino with user administration.',
            technologies: 
              [
                { icon: 'fab fa-html5'}, 
                { icon: 'fab fa-css3-alt'}, 
                { icon: 'fab fa-js-square'},
                { icon: 'fab fa-vuejs'}, 
                { icon: 'fab fa-java'}, 
                { icon: 'fab fa-gitlab'}, 
                { icon: 'fab fa-docker'},
              ],
          },
          {
            //src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            site: '/DataworkItSolutions',
            title: 'Datawork It Solutions',
            shortDescription: 'My startup which I develop together with 3 other people.',
            technologies: [
                { icon: 'fab fa-html5'}, 
                { icon: 'fab fa-css3-alt'}, 
                { icon: 'fab fa-js-square'},
                { icon: 'fab fa-vuejs'}, 
                { icon: 'fab fa-java'}, 
                { icon: 'fab fa-github'}, 
                { icon: 'fab fa-docker'},
            ],
          },
          {
            //src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            site: '/ParkingControlSystem',
            title: 'Parking Control System',
            shortDescription: 'IoT and Cloud Services project for a parking guidance system.',
            technologies: 
              [
                { icon: 'fab fa-aws'},  
                { icon: 'fab fa-python'},
              ],
          },
      ],
    }
  }
}
</script>

<style scoped>

</style>