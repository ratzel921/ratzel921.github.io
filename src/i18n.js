import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// function loadLocaleMessages () {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key)
//     }
//   })
//   return messages
// }

const messages = {
  de: {
    labels: {
      Flag: "de",
    },
    navigation: {
      footer: "Erstellt von Dominik Ratzel",
      about: "Über mich",
      skills: "IT-Kenntnisse",
      projects: "Projekte",
      contact: "Kontakt",
      career: "Karriere",
    },
    content: {
      welcome1: "Hey, ich bin Dominik.",
      welcome2: "Ich studiere Informatik an der Hochschule der Medien in Stuttgart."

    },
  },


  en: {
    labels: {
      Flag: "us",
    },
    navigation: {
      footer: "Created by Dominik Ratzel",
      about: "About",
      skills: "IT-Skills",
      projects: "Projects",
      contact: "Contact",
      career: "Career"
    },
    content: {
      welcome1: "Hey, I'm Dominik.",
      welcome2: "I study computer science at the Stuttgart Media University."

    },
  },

};

export default new VueI18n({
  locale: localStorage.getItem('Language') | process.env.VUE_APP_I18N_LOCALE || 'de',
  fallbackLocale: localStorage.getItem('Language') | process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'de',
  messages: messages
  // messages: loadLocaleMessages()
})
