<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="px-5" elevation="12">
          <h2 class="display-2 font-weight-bold py-3 text-center">{{navigation.career}}</h2>
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
          color: '#BF0303',
          date: '2005 - 2012',
          text: this.careerTranslation.realschule,
        },
        {
          color: '#BE5901',
          date: '09/2012 - 10/2015',
          text: this.careerTranslation.imtech,
        },
        {
          color: '#D2C703',
          date: '10/2015 - 02/2016',
          text: this.careerTranslation.brenner1,
        },
        {
          color: '#886A08',
          date: '02/2016 - 09/2017',
          text: this.careerTranslation.brenner2,
        },
        {
          color: '#02B728',
          date: '09/2017 - 07/2018',
          text: this.careerTranslation.fhs,
        },
        {
          color: '#1603C7',
          date: '07/2018 - 09/2018',
          text: this.careerTranslation.damiler,
        },
        {
          color: '#760296',
          date: 'Seit 09/2018',
          text: this.careerTranslation.bachelor,
        },
        {
          color: '#BB0274',
          date: '08/2019 – 09/2020',
          text: this.careerTranslation.fraunhofer1,
        },
        {
          color: '#870103',
          date: '09/2020 - 03/2021',
          text: this.careerTranslation.novatec,
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>