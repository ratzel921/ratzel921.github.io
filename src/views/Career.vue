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
            <v-card-text class="grey lighten-1 text--primary">
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
      items: [
        {
          color: 'blue darken-3',
          icon: 'mdi-code-braces',
          title: 'SOTEC | Software & Hardware Engineering - Calw',
          subtitle: 'Praktikum (03.2021 - 09.2021)',
          context: 'Softwareentwicklung',
        },
        {
          color: 'green',
          icon: 'mdi-access-point-network',
          title: 'Fraunhofer IPA - Stuttgart',
          subtitle: 'Hilfswissenschaftlicher Arbeiter (09.2020 - 03.2021)',
          context: 'Netzwerkforschung im Bereich 5G und Vernetzung. Entwicklung und Benutzung von Werkzeugen zur Netzwerkuntersuchung und Kommunikation. ' +
              'Arbeiten mit klassischer Netzwerktechnik und Raspberry Pis.',
        },
        {
          color: 'red',
          icon: 'mdi-school-outline',
          title: 'Hochschule Esslingen - University of applied Sciences',
          subtitle: 'Maschinenbau - Student (09.2018 - 2022)',
          context: 'Fachrichtung: Konstruktion und Entwicklung. Zahlreiche Projekte in Richtung sowohl in der Konstruktion und Entwicklung als auch in der Programmierung und EDV.',
        },
        {
          color: 'blue',
          icon: 'mdi-bookshelf',
          title: 'Rolf-Benz-Schule in Nagold',
          subtitle: 'Fachhochschulreife',
          context: 'Fachhochschulereife in einem Jahr. In technischer Richtung zur Qualifizierung und Vorbereitung auf das Maschinenbau-Studium',
        },
        {
          color: 'orange',
          icon: 'mdi-wrench-outline',
          title: 'Daimler AG',
          subtitle: 'Technischer Modellbauer - Ausbildung (09.2014 - 07.2017)',
          context: 'Ich erlernte sogut wie alle handwerklichen Fähigkeiten von Fräsen und Drehen über finishing mit Schleifpapier bis hin zum Laminieren mit Kohlefaser und Glasfaser.',
        },
      ],

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