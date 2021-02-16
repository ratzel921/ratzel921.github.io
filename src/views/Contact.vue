<template>
    <v-container>
      <h2 class="display-1 font-weight-bold py-3 text-center">{{navigation.contact}}</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="onSubmit">
          <v-theme-provider light>
            <v-row>
              <v-col cols="12">
                <ValidationProvider name="Name" rules="required|alpha|min:5|max:20" v-slot="{ errors }">
                  <v-text-field
                            v-model="form.name"
                            counter="20"
                            required
                            dense
                            clearable
                            :error-messages="errors[0]"
                            :label="fields.name"
                            solo
                  ></v-text-field>
                </ValidationProvider>
              </v-col>

              <!-- <v-col cols="12">
                <v-text-field flat label="Email*" solo v-model="form.email"></v-text-field>
              </v-col> -->

              <v-col cols="12">
                <ValidationProvider name="Subject" rules="required|alpha|min:5|max:20" v-slot="{ errors }">
                  <v-text-field
                            v-model="form.subject"
                            counter="20"
                            required
                            dense
                            clearable
                            :error-messages="errors[0]"
                            :label="fields.subject"
                            solo
                  ></v-text-field>
                </ValidationProvider>
              </v-col>

              <v-col cols="12">
                <ValidationProvider name="Message" rules="required|min:5" v-slot="{ errors }">
                  <v-textarea
                            v-model="form.message"
                            required
                            dense
                            clearable
                            :error-messages="errors[0]"
                            :label="fields.message"
                            solo
                  ></v-textarea>
                </ValidationProvider>
              </v-col>

              <v-col class="mx-auto" cols="auto">
                <v-btn :disabled="invalid" color="accent" x-large :href="'mailto:' + sendToMail + '?subject=' + form.subject + '&body=' + form.message">
                  {{ buttons.submit }}
                </v-btn>
              </v-col>
            </v-row>
          </v-theme-provider>
        </form>
      </ValidationObserver>
    </v-container>
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
    }
  },
  
  computed: {
    navigation() {
      return this.$t("navigation")
    },
    fields() {
      return this.$t("fields")
    },
    buttons() {
      return this.$t("buttons")
    },
  },

  methods: {
    onSubmit () {
      alert('Form has been submitted!');
    }
  }
}
</script>

<style scoped>

</style>