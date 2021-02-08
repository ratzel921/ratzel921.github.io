import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

// function loadLocaleMessages () {
//   const locales = require.context("./locales", true, /[A-Za-z0-9-_,\s]+\.json$/i)
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
    licence: {
      teamData: {
        team: 'Team',
        street: 'Straße',
        streetNumber: 'Nr.',
        postalCode: 'Postleitzahl',
        location: 'Ort',
      },
      userData: {
        username: 'Benutzername',
        email: 'Email',
        password: 'Passwort',
        passwordRepeat: 'Passwort wiederholen',
      },
      paymentData: {
        accountOwner: 'Kontoinhaber',
        bankName: 'Name der Bank',
        iban: 'IBAN',
      }
    },
    headline: {
      Dashboard: "Anwendungen",
      Devices: "Geräte",
      App: "Gerätemanager",
      Device: "Gerät",
      Services: "Dienste",
      Creator: "Zulieferer",
      Consumer: "Kunde",
    },
    // Computed
    vuetify: {
      dataIterator: {
        itemsPerPageText: "Geräte pro Seite",
        itemsPerPageAllText: "Alle Geräte",
        pageText: "{0}-{1} von {2}"
      }
    },
    labels: {
      ID: 'ID',
      Category: "Kategorie",
      Value: "Wert",
      SearchLabel: "Suche",
      UUID: "UUID",
      Name: "Name",
      Description: "Beschreibung",
      LastContact: "Letzte Verbindung",
      Status: "Status",
      Actions: "Aktionen",
      Flag: "de",
      Action: "Aktion",
      Connection: "Verbindung",
      URL: "URL",
    },
    buttons: {
      Generate: "UUID generieren",
      Cancel: "Abbrechen",
      Save: "Speichern",
      Edit: "Bearbeiten",
      Hide_info: "Info ausblenden",
      Order: "Bestellen",
      Checkout: "Kasse",
      Next: "Nächster Schritt",
      Back: "Schritt zurück",
      Finish: "Registrierung abschließen",

    },
    infoText: {
      footer: "Erstellt 2020 von Dominik Ratzel",
      AddDevice: "Fügen Sie einige neue Geräte hinzu",
      EditDialog: "Gerät aktualisieren",
      AddDialog: "Fügen Sie ein neues Gerät hinzu",
      SelectedDevice: "Ausgewähltes Gerät",
      ReloadPage: "Seite neuladen",    },
  },


  en: {
    licence: {
      teamData: {
        team: 'Team',
        street: 'Street',
        streetNumber: 'Number',
        postalCode: 'Postal Code',
        location: 'Location',
      },
      userData: {
        username: 'Username',
        email: 'Email',
        password: 'Password',
        passwordRepeat: 'Repeat Password',
      },
      paymentData: {
        accountOwner: 'Account Owner',
        bankName: 'Name of Bank',
        iban: 'IBAN',
      }
    },
    headline: {
      Dashboard: "Applications",
      Devices: "Devices",
      App: "Device Manager",
      Device: "Device",
      Token: "Access Token",
      Services: "Services",
      Creator: "Creator",
      Consumer: "Consumer",
    },
    // Computed
    vuetify: {
      dataIterator: {
        itemsPerPageText: "Devices per page",
        itemsPerPageAllText: "All Devices",
        pageText: "{0}-{1} of {2}"
      }
    },
    labels: {
      ID: 'ID',
      Category: "Category",
      Value: "Value",
      SearchLabel: "Search",
      UUID: "UUID",
      Name: "Name",
      Description: "Description",
      Status: "Status",
      Actions: "Actions",
      Flag: "us",
      Action: "Action",
      Connection: "Connection",
      URL: "URL",
    },
    buttons: {
      Generate: "Generate UUID",
      Cancel: "Cancel",
      Save: "Save",
      Edit: "Edit",
      Hide_info: "Hide Info",
      Order: "Order",
      Checkout: "Checkout",
      Next: "Next Step",
      Back: "Step Back",
      Finish: "Finish registration",

    },
    infoText: {
      AddDevice: "Add some new Devices",
      EditDialog: "Update Device",
      AddDialog: "Add a new Device",
      footer: "Created 2019 by Dominik Ratzel",
      SelectedDevice: "Selected Device",
      ReloadPage: "Reload Page",
    },
  },



  // es: {
  //   headline: {
  //     Dashboard: "Aplicaciones",
  //     Devices: "Dispositivos",
  //     App: "Administrador de dispositivos",
  //     Device: "Dispositivo",
  //     Services: "Servicios",
  //   },
  //   // Computed
  //   vuetify: {
  //     dataIterator: {
  //       itemsPerPageText: "Dispositivos por página",
  //       itemsPerPageAllText: "Todos los dispositivos",
  //       pageText: "{0}-{1} de {2}"
  //     }
  //   },
  //   labels: {
  //     Value: "Valor",
  //     SearchLabel: "Buscar",
  //     UUID: "Número de identificación",
  //     Name: "Nombre",
  //     Description: "Descripción",
  //     Status: "Estado",
  //     Actions: "Comportamiento",
  //     Flag: "es",
  //     Action: "Acción",
  //     Connection: "Conexión",
  //     URL: "URL",
  //   },
  //   buttons: {
  //     Generate: "Generar número id",
  //     Cancel: "Cancelar",
  //     Save: "Salvar",
  //     Edit: "Editar",
  //     Hide_info: "Ocultar información",
  //     Order: "Ordenar",
  //     Checkout: "Revisa",
  //     Next: "siguiente",
  //     Finish: "Terminar",
  //
  //   },
  //   infoText: {
  //     footer: "Creado 2020 por Dominik Ratzel",
  //     AddDevice: "Agregar algunos dispositivos nuevos",
  //     EditDialog: "Actualizar dispositivo",
  //     AddDialog: "Agregar un nuevo dispositivo",
  //     SelectedDevice: "Dispositivo seleccionado",
  //     ReloadPage: "Recargar página",    },
  // },
  //
  // cn: {
  //   headline: {
  //     Dashboard: "应用领域",
  //     Devices: "设备",
  //     App: "装置经理",
  //     Device: "设备",
  //     Services: "服务",
  //   },
  //   // Computed
  //   vuetify: {
  //     dataIterator: {
  //       itemsPerPageText: "每页设备",
  //       itemsPerPageAllText: "所有装置",
  //       pageText: "{0}-{1} 之 {2}"
  //     }
  //   },
  //   labels: {
  //     Value: "价值",
  //     SearchLabel: "搜索",
  //     UUID: "识别号码",
  //     Name: "名称",
  //     Description: "描述",
  //     Status: "状态",
  //     Actions: "操作",
  //     Flag: "cn",
  //     Action: "行动",
  //     Connection: "连接",
  //     URL: "网址",
  //   },
  //   buttons: {
  //     Generate: "生成标识号",
  //     Cancel: "取消",
  //     Save: "救",
  //     Edit: "编辑",
  //     Checkout: "退房",
  //     Hide_info: "隐藏信息",
  //     Order: "订购",
  //     Next: "下一个",
  //     Finish: "完",
  //
  //   },
  //   infoText: {
  //     footer: "Dominik Ratzel创建于2020年",
  //     AddDevice: "添加一些新设备",
  //     EditDialog: "更新设备",
  //     AddDialog: "添加新设备",
  //     SelectedDevice: "所选设备",
  //     ReloadPage: "重新载入页面",
  //   },
  // },
  //
  // it: {
  //   labels: {
  //     Flag: "it"
  //   },
  //   infoText: {
  //     footer: "Creato nel 2020 da Dominik Ratzel",
  //     ReloadPage: "Ricarica la pagina",
  //   },
  // },
  //
  // gb: {
  //   labels: {
  //     Flag: "gb"
  //   },
  //   infoText: {
  //     AddDevice: "Add some new Devices",
  //     EditDialog: "Update Device",
  //     AddDialog: "Add a new Device",
  //     footer: "Created 2019 by Dominik Ratzel",
  //     SelectedDevice: "Selected Device",
  //     ReloadPage: "Reload Page",
  //   },
  // }
};

// Object.keys(messages).forEach(function (lang) {
//   Vue.locale(lang, messages[lang])
// })

export default new VueI18n({
  locale: localStorage.getItem('Language') || 'de',
  fallbackLocale: localStorage.getItem('Language') || 'de',
  // messages: loadLocalMessages
  messages
});
