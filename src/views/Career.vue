<template>
  <v-container fluid class="grey lighten-2">
    <v-row class="justify-center">
      <h2 class="display-2 font-weight-bold py-3 text-center">{{navigation.career}}</h2>
    </v-row>
    <v-row class="justify-center pt-16">
      <v-timeline
          align-top
          :dense="$vuetify.breakpoint.smAndDown"
      >
        <v-timeline-item
            v-for="(item, i) in careers"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
        >
          <v-card
              :color="item.color"
              dark
              width="800"
          >
            <v-card-title class="title">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle> {{item.date}}</v-card-subtitle>
            <v-card-text class="white text--primary">
              <p class="pa-2 pt-4">{{item.text}}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
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
    careers() {
      return [
        {
          icon: 'mdi-bookshelf',
          title: 'Realschulabschluss',
          color: '#BF0303',
          date: '2005 - 2012',
          text: this.careerTranslation.realschule,
        },
        {
          icon: 'mdi-bookshelf',
          title: 'Ausbildung Elektroniker bei Imtech',
          color: '#BE5901',
          date: '09/2012 - 10/2015',
          text: this.careerTranslation.imtech,
        },
        {
          icon: 'mdi-bookshelf',
          title: 'Ausbildung Elektroniker bei Elektrohaus Brenner',
          color: '#D2C703',
          date: '10/2015 - 02/2016',
          text: this.careerTranslation.brenner1,
        },
        {
          icon: 'mdi-wrench-outline',
          title: 'Elektriker für Energie- und Gebäudetechnik',
          color: '#886A08',
          date: '02/2016 - 09/2017',
          text: this.careerTranslation.brenner2,
        },
        {
          icon: 'mdi-bookshelf',
          title: '1-jährige Fachhochschulreife',
          color: '#02B728',
          date: '09/2017 - 07/2018',
          text: this.careerTranslation.fhs,
        },
        {
          icon: 'mdi-wrench-outline',
          title: 'Ferienjob bei Daimler AG',
          color: '#1603C7',
          date: '07/2018 - 09/2018',
          text: this.careerTranslation.damiler,
        },
        {
          icon: 'mdi-school-outline',
          title: 'Studium Medieninformatik Hochschule der Medien',
          color: '#760296',
          date: 'Seit 09/2018',
          text: this.careerTranslation.bachelor,
        },
        {
          icon: 'mdi-code-braces',
          title: 'Werkstudent Fraunhofer',
          color: '#BB0274',
          date: '08/2019 – 09/2020',
          text: this.careerTranslation.fraunhofer1,
        },
        {
          icon: 'mdi-code-braces',
          title: 'Praxissemster Novatec',
          color: '#870103',
          date: '09/2020 - 03/2021',
          text: this.careerTranslation.novatec,
        },
        {
          icon: 'mdi-code-braces',
          title: 'Werkstudent Fraunhofer',
          color: '#000000',
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