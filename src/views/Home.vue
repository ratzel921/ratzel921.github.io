<template>
    <div>
        <section id="welcome">
            <Welcome></Welcome>
        </section>

        <section id="timeline"  class="grey lighten-3">
        </section>

        <section id="liveLine" class="grey lighten-3">
          <LiveLine></LiveLine>
        </section>

        <section id="about-me"  class="grey lighten-3">
          <About></About>
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
import LiveLine from "@/views/LiveLine";
export default {
  name: "Home",
  components: {LiveLine, Welcome, Contact, Projects, Skills, About},
  data() {
        return {



        }
    }
}
</script>


<style lang="scss" scoped>


</style>