<template>
  <v-container>
    <v-row class="justify-center">
      <h2 class="display-1 font-weight-bold py-3 text-center">{{navigation.career}}</h2>
    </v-row>
    <v-row class="justify-center ">
      <v-col cols="12" align="center">
        <v-timeline
            align-top
            :dense="$vuetify.breakpoint.smAndDown"
        >
          <v-timeline-item
              v-for="(item, i) in careers"
              :key="i"
              color="black"
              :icon="item.icon"
              fill-dot
          >
            <v-card elevation="12"
                color="black"
                dark
                width="600"
            >
              <v-col>
                {{ item.title }}
              </v-col>
              <v-col> {{item.date}}</v-col>
              <v-card-text class="white text--primary">
                <p>{{item.text}}</p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Career",

  data() {
    return {
    }
  },
  computed: {
    navigation() {
      return this.$t("navigation");
    },
    careerTranslation() {
      return this.$t("career");
    },
    careerHeadlinesTranslation() {
      return this.$t("careerHeadlines");
    },
    careers() {
      return [
        {
          icon: 'mdi-bookshelf',
          title: this.careerHeadlinesTranslation.realschule,
          date: '2005 - 2012',
          text: this.careerTranslation.realschule,
        },
        {
          icon: 'mdi-bookshelf',
          title: this.careerHeadlinesTranslation.imtech,
          date: '09/2012 - 10/2015',
          text: this.careerTranslation.imtech,
        },
        {
          icon: 'mdi-bookshelf',
          title: this.careerHeadlinesTranslation.brenner1,
          date: '10/2015 - 02/2016',
          text: this.careerTranslation.brenner1,
        },
        {
          icon: 'mdi-wrench-outline',
          title: this.careerHeadlinesTranslation.brenner2,
          date: '02/2016 - 09/2017',
          text: this.careerTranslation.brenner2,
        },
        {
          icon: 'mdi-bookshelf',
          title: this.careerHeadlinesTranslation.fhs,
          date: '09/2017 - 07/2018',
          text: this.careerTranslation.fhs,
        },
        {
          icon: 'mdi-wrench-outline',
          title: this.careerHeadlinesTranslation.damiler,
          date: '07/2018 - 09/2018',
          text: this.careerTranslation.damiler,
        },
        {
          icon: 'mdi-school-outline',
          title: this.careerHeadlinesTranslation.bachelor,
          date: '09/2018',
          text: this.careerTranslation.bachelor,
        },
        {
          icon: 'mdi-code-braces',
          title: this.careerHeadlinesTranslation.fraunhofer1,
          date: '08/2019 – 09/2020',
          text: this.careerTranslation.fraunhofer1,
        },
        {
          icon: 'mdi-rocket',
          title: this.careerHeadlinesTranslation.startup,
          date: '09/2020',
          text: this.careerTranslation.startup,
        },
        {
          icon: 'mdi-code-braces',
          title: this.careerHeadlinesTranslation.novatec,
          date: '09/2020 - 03/2021',
          text: this.careerTranslation.novatec,
        },
        {
          icon: 'mdi-code-braces',
          title: this.careerHeadlinesTranslation.fraunhofer1,
          date: '03/2021 - 09/2021',
          text: this.careerTranslation.fraunhofer1,
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>