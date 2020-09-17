<template>
<div>
    <section id="welcome">
        <Welcome></Welcome>
    </section>

    <section id="about-me">
        <About></About>
    </section>

    <section id="life" class="grey lighten-3">
        <Life></Life>
    </section>

    <section id="stats">
      <Stats></Stats>
    </section>

    <section id="projects">
        <Projects></Projects>
    </section>

    <v-sheet id="contact" dark tag="section" tile>
        <Contact></Contact>
    </v-sheet>
</div>
</template>

<script>
import About from "@/views/About";
import Life from "@/views/Life";
import Stats from "@/views/Stats";
import Projects from "@/views/Projects";
import Contact from "@/views/Contact";
import Welcome from "@/views/Welcome";
export default {
  name: "Home",
  components: {Welcome, Contact, Projects, Stats, Life, About},
  data() {
        return {



        }
    }
}
</script>
