<template>
    <div>
        <section id="about-me"  class="grey lighten-3">
          <About></About>
        </section>

        <section id="career" class="grey lighten-3">
          <Career></Career>
        </section>

        <section id="skills">
            <Skills></Skills>
        </section>

        <section id="projects" >
            <Projects></Projects>
        </section>

        <v-sheet id="contact" class="grey lighten-3"  tag="section" tile>
            <Contact></Contact>
        </v-sheet>
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