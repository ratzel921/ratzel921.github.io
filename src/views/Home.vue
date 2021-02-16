<template>
    <div>
      <v-col cols="12" id="about-me" class="grey lighten-3" >
        <About></About>
      </v-col>

      <v-col cols="12" id="career" >
        <Career></Career>
      </v-col>

      <v-col cols="12" id="skills" >
        <Skills></Skills>
      </v-col>

      <v-col cols="12" id="projects">
        <Projects></Projects>
      </v-col>

      <v-col cols="12" id="contact" class="grey lighten-3"  tag="section" tile>
        <Contact></Contact>
      </v-col>
    </div>
</template>

<script>
import About from "@/views/About";
import Skills from "@/views/Skills";
import Projects from "@/views/Projects";
import Contact from "@/views/Contact";
import Welcome from "@/views/Welcome";
import Career from "@/views/Career";
export default {
  name: "Home",
  components: {Career, Welcome, Contact, Projects, Skills, About},
  data() {
        return {



        }
    }
}
</script>


<style lang="scss" scoped>


</style>