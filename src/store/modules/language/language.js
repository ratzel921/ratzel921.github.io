import i18n from "@/i18n";

export default {
    state: {
        // Top-Nav-bar
        languages: [
            {flag: "de", language: "de", title: "de"},
            {flag: "us", language: "en", title: "en"},
        ],
        currents: i18n.t('labels.Flag'),

    },

    getters: {
        languages: (state) => {
            return state.languages;
        },
        currents: (state) => {
            return localStorage.getItem('Language') !== null
                ? localStorage.getItem('Language')
                : state.currents;
        },

    },

    actions: {
        
    },
    mutations: {
    },
};
