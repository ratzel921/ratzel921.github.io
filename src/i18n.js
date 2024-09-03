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
      footer: "DR Solutions UG (haftungsbeschränkt)",
      imprint: "Impressum",
      privacy: "Datenschutz",
      about: "Über mich",
      skills: "IT-Kenntnisse",
      projects: "Projekte",
      contact: "Kontakt",
      career: "Karriere",
    },
    content: {
      welcome1: "Hey, ich bin Dominik.",
      welcome2: "Ich habe Medieninformatik an der Hochschule der Medien in Stuttgart studiert."
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
      novatec2: "Werkstudent im Bereich Digital Innovation bei Novatec Consulting GmbH in Leinfelden-Echterdingen",
      novatecBachelor: "Bachelorarbeit im Bereich Technical Consulting bei Novatec Consulting GmbH in Leinfelden-Echterdingen",
      startup: "Gründung des Startup LineTrack mit 3 Partnern",
      startup2: "Gründung des Startup Designmyhouse mit 2 Partnern",
      novatecConsultant: "Junior Consultant im Bereich Technical Consulting bei Novatec Consulting GmbH in Leinfelden-Echterdingen",
    },
    careerHeadlines: {
      realschule: "Realschulabschluss",
      imtech: "Ausbildung bei Imtech",
      brenner1: "Ausbildung bei Elektrohaus Brenner",
      brenner2: "Elektroniker bei Elektrohaus Brenner",
      fhs: "Fachhochschulreife",
      damiler: "Ferienbeschäftigung bei Daimler AG",
      bachelor: "Bachelor Studium",
      fraunhofer1: "Werkstudent bei Fraunhofer-Institut",
      novatec: "Praktikant bei Novatec Consulting GmbH",
      novatec2: "Werkstudent bei Novatec Consulting GmbH",
      novatecBachelor: "Bachelorarbeit bei Novatec Consulting GmbH",
      startup: "Gründung Startup LineTrack",
      startup2: "Gründung Startup Designmyhouse",
      novatecConsultant: "Junior Consultant bei Novatec Consulting GmbH",
    },
    buttons: {
      reading: "Weiterlesen",
      submit: "Senden",
    },
    projectHeadlines: {
      gameHall: "Online Spielehalle",
      startup: "LineTrack GmbH",
      startup2: "Designmyhouse UG",
      webShop: "Online Shop",
      deviceManagement: "Geräte- und Serviceverwaltung",
      parkingSystem: "Parkleitsystem",
      hinH: "Hand in Hand Spendenlauf Stuttgart",
      beGuided: "BeGuided Design",
    },
    projectsText: {
      gameHall: "Casino WebApp mit Benutzerverwaltung",
      startup: "Startup LineTrack",
      startup2: "Startup Designmyhouse",
      webShop: "Webshop WebApp mit Benutzerverwaltung",
      deviceManagement: "Geräte- und Serviceverwaltungsanwendung WebApp erstellt bei Fraunhofer",
      parkingSystem: "IoT and Cloud Service Projekt für ein Parkleitsyystem",
      hinH: "Middleware Server für den Hand in Hand Spendenlauf Stuttgart erstellt bei Novatec",
      beGuided: "BeGuided Design erstellt bei Novatec",
    },
    fields: {
      name: "Name*",
      subject: "Betreff*",
      message: "Nachricht*",
    },
  },


  en: {
    labels: {
      Flag: "us",
    },
    navigation: {
      footer: "DR Solutions UG (haftungsbeschränkt)",
      imprint: "Imprint",
      privacy: "Privacy",
      about: "About",
      skills: "IT-Skills",
      projects: "Projects",
      contact: "Contact",
      career: "Career"
    },
    content: {
      welcome1: "Hey, I'm Dominik.",
      welcome2: `I studied "Medieninformatik" at "Hochschule der Medien in Stuttgart"`
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
      novatec2: "Working student in the practical semester in the field of digital innovation at Novatec Consulting GmbH in Leinfelden-Echterdingen",
      novatecBachelor: "Bachelor in the field of technical consulting at Novatec Consulting GmbH in Leinfelden-Echterdingen",
      startup: "Founding of the startup LineTrack with 3 partners",
      startup2: "Founding of the startup Designmyhouse with 2 partners",
      novatecConsultant: "Junior Consultant in the field of technical consulting at Novatec Consulting GmbH in Leinfelden-Echterdingen",
    },
    careerHeadlines: {
      realschule: "High school diploma",
      imtech: "Training at Imtech",
      brenner1: "Training at Elektrohaus Brenner",
      brenner2: "Electronics technician at Elektrohaus Brenner",
      fhs: "Advanced technical college",
      damiler: "Vacation employment at Daimler AG",
      bachelor: "Bachelor study",
      fraunhofer1: "Working student at Fraunhofer Institute",
      novatec: "Trainee at Novatec Consulting GmbH",
      novatec2: "Working student at Novatec Consulting GmbH",
      novatecBachelor: "Bachelor at Novatec Consulting GmbH",
      startup: "Founding of the startup LineTrack",
      startup2: "Founding of the startup Designmyhouse",
      novatecConsultant: "Junior Consultant at Novatec Consulting GmbH",
    },
    buttons: {
      reading: "Continue Reading",
      submit: "Submit",
    },
    projectHeadlines: {
      gameHall: "Online game hall",
      startup: "LineTrack GmbH",
      startup2: "Designmyhouse UG",
      webShop: "WebShop",
      deviceManagement: "Device and service management",
      parkingSystem: "Parking control system",
      hinH: "Hand in hand charity run Stuttgart",
      beGuided: "BeGuided Design",
    },
    projectsText: {
      gameHall: "Casino WebApp with user management",
      startup: "Startup LineTrack GmbH",
      startup2: "Startup Designmyhouse UG",
      webShop: "WebShop WebApp with user management",
      deviceManagement: "Device and service management application WebApp created at Fraunhofer",
      parkingSystem: "IoT and Cloud Service project for a parking guidance system",
      hinH: "Middleware Server for the Hand in Hand Spendenlauf Stuttgart created at Novatec",
      beGuided: "BeGuided Design created at Novatec",
    },
    fields: {
      name: "Name*",
      subject: "Subject*",
      message: "Message*",
    },
  },

};

export default new VueI18n({
  locale: localStorage.getItem('Language') | process.env.VUE_APP_I18N_LOCALE || 'de',
  fallbackLocale: localStorage.getItem('Language') | process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'de',
  messages: messages
  // messages: loadLocaleMessages()
})
