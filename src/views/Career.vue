<template>
  <v-container class="text-center">
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card class="px-5">
          <h2 class="display-2 font-weight-bold py-3 text-center">{{navigation.career}}</h2>
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
          color: '#000000',
          date: '2005 - 2012',
          text: this.careerTranslation.realschule,
        },
        {
          color: '#000000',
          date: '09/2012 - 10/2015',
          text: this.careerTranslation.imtech,
        },
        {
          color: '#000000',
          date: '10/2015 - 02/2016',
          text: this.careerTranslation.brenner1,
        },
        {
          color: '#000000',
          date: '02/2016 - 09/2017',
          text: this.careerTranslation.brenner2,
        },
        {
          color: '#000000',
          date: '09/2017 - 07/2018',
          text: this.careerTranslation.fhs,
        },
        {
          color: '#000000',
          date: '07/2018 - 09/2018',
          text: this.careerTranslation.damiler,
        },
        {
          color: '#000000',
          date: 'Seit 09/2018',
          text: this.careerTranslation.bachelor,
        },
        {
          color: '#000000',
          date: '08/2019 – 09/2020',
          text: this.careerTranslation.fraunhofer1,
        },
        {
          color: '#000000',
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