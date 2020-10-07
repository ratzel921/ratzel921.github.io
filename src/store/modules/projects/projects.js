export default {
    state: {
        theme: 'darkTheme',
    },

    getters: {
        // Returns the current theme value
        getTheme: (state) => {
            return state.theme
        }
    },

    actions: {

    },

    mutations: {
        // Switches between light and dark theme
        UPDATE_THEME(state) {
            if (state.theme === 'lightTheme') {
                state.theme = 'darkTheme'
            }else if (state.theme === 'darkTheme'){
                state.theme = 'lightTheme'
            }
        },
    },


}