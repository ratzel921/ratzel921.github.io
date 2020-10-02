<template>
  <div>
    <div class="py-12"></div>


    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <form class="contact-form" @submit.prevent="sendEmail">
      <v-theme-provider light >
        <v-row>
          <v-col cols="12">
            <v-text-field flat label="Name*" solo v-model="form.name"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field flat label="Email*" solo v-model="form.email"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field flat label="Subject*" solo v-model="form.subject"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea flat label="Message*" solo v-model="form.message"></v-textarea>
          </v-col>

          <v-col class="mx-auto" cols="auto">
            <v-btn color="accent" x-large :href="'mailto:' + sendToMail + '?subject=' + form.subject + '&body=' + form.message">
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-theme-provider>
      </form>



    </v-container>

    <div class="py-12"></div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },

      sendToMail: 'Dominikratzel16@gmail.com',

      serviceID: 'service_o0cr2xm',
      templateID: 'template_q7ytghg',
      userID: 'user_VGQM4dJPV57Heymmcui95',


    }
  },

  methods: {
}
}
</script>

<style scoped>

</style>