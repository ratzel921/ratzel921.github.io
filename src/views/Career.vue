<template>
  <v-container class="text-center">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="px-5">
          <h2 class="display-2 font-weight-bold py-3 text-uppercase text-center">{{navigation.career}}</h2>
          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>
            <v-divider></v-divider>
          </v-responsive>
          <v-timeline>
            <v-timeline-item
                v-for="(date, i) in careers"
                :key="i"
                :color="date.color"
                small
            >
              <template v-slot:opposite>
        <span
            :color="date.color"
            :style="`color: ${date.color}`"
            class="headline font-weight-bold"
            v-text="date.date"
        ></span>
              </template>
              <div class="py-4 ">
                <div :style="`color: ${date.color}`" class="font-weight-light mb-4">
                  {{date.text}}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Career",

  data() {
    return {
      careers: [
        {
          color: '#000000',
          date: '2005 - 2012',
          text: 'Realschulabschluss CHR Nagold',
        },
        {
          color: '#000000',
          date: '09/2012 - 10/2015',
          text: 'Ausbildung als Elektroniker für Energie- und\n' +
              'Gebäudetechnik bei Imtech Deutschland GmbH & Co. KG Niederlassung Stuttgart\n',
        },
        {
          color: '#000000',
          date: '10/2015 - 02/2016',
          text: 'Ausbildung als Elektroniker für Energie- und Gebäudetechnik bei Elektrohaus Brenner in Kuppingen',
        },
        {
          color: '#000000',
          date: '02/2016 - 09/2017',
          text: 'Elektroniker für Energie- und Gebäudetechnik bei Elektrohaus Brenner in Kuppingen',
        },
        {
          color: '#000000',
          date: '09/2017 - 07/2018',
          text: '1-jährige Fachhochschulreife an der Rolf-Benz-Schule in Nagold',
        },
        {
          color: '#000000',
          date: '07/2018 - 09/2018',
          text: 'Ferienbeschäftigung bei Daimler AG',
        },
        {
          color: '#000000',
          date: 'Seit 09/2018',
          text: 'Bachelor Studium im Fachbereich Medieninformatik an der Hochschule der Medien in Stuttgart',
        },
        {
          color: '#000000',
          date: '08/2019 – 09/2020',
          text: 'Werkstudent im Bereich Entwicklung von Diensten für Cloud-Plattformen bei Fraunhofer-Institut für Produktionstechnik und Automatisierung IPA in Stuttgart',
        },
        {
          color: '#000000',
          date: '09/2020 - 03/2021',
          text: 'Praktikant im Praxissemester im Bereich Digital Innovation bei Novatec Consulting GmbH in Leinfelden-Echterdingen',
        },
      ],
    }
  },
  computed: {
    navigation() {
      return this.$t("navigation");
    },
  }
}
</script>

<style scoped>

</style>