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
    career: {
      realschule: "Realschulabschluss CHR Nagold",
      imtech: "Ausbildung als Elektroniker für Energie- und Gebäudetechnik bei Imtech Deutschland GmbH & Co. KG Niederlassung Stuttgart",
      brenner1: "Ausbildung als Elektroniker für Energie- und Gebäudetechnik bei Elektrohaus Brenner in Kuppingen",
      brenner2: "Elektroniker für Energie- und Gebäudetechnik bei Elektrohaus Brenner in Kuppingen",
      fhs: "1-jährige Fachhochschulreife an der Rolf-Benz-Schule in Nagold",
      damiler: "Ferienbeschäftigung bei Daimler AG",
      bachelor: "Bachelor Studium im Fachbereich Medieninformatik an der Hochschule der Medien in Stuttgart",
      fraunhofer1: "Werkstudent im Bereich Entwicklung von Diensten für Cloud-Plattformen bei Fraunhofer-Institut für Produktionstechnik und Automatisierung IPA in Stuttgart",
      novatec: "Praktikant im Praxissemester im Bereich Digital Innovation bei Novatec Consulting GmbH in Leinfelden-Echterdingen",
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
    career: {
      realschule: "High school diploma CHR Nagold",
      imtech: "Training as electronics technician for energy and building technology at Imtech Deutschland GmbH & Co. KG ",
      brenner1: "Training as electronics technician for energy and building technology at Elektrohaus Brenner in Kuppingen",
      brenner2: "Electronics technician for energy and building technology at Elektrohaus Brenner in Kuppingen",
      fhs: "1-year technical college entrance qualification at the Rolf Benz School in Nagold",
      damiler: "Holiday employment at Daimler AG",
      bachelor: "Bachelor's degree in media informatics at the Stuttgart Media University",
      fraunhofer1: "Working student in the area of developing services for cloud platforms at the Fraunhofer Institute for Manufacturing Engineering and Automation IPA in Stuttgart",
      novatec: "Internship in the practical semester in the field of digital innovation at Novatec Consulting GmbH in Leinfelden-Echterdingen",
    },
  },

};

export default new VueI18n({
  locale: localStorage.getItem('Language') | process.env.VUE_APP_I18N_LOCALE || 'de',
  fallbackLocale: localStorage.getItem('Language') | process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'de',
  messages: messages
  // messages: loadLocaleMessages()
})
