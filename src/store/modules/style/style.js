export default {
    state: {
        theme: localStorage.getItem('Theme') !== null ? localStorage.getItem('Theme')
            : 'lightTheme',
    },

    getters: {
        // Returns the current theme value
        getTheme: (state) => {
            return state.theme;
        }
    },

    actions: {

    },

    mutations: {
        // Switches between light and dark theme
        UPDATE_THEME(state) {
            if (state.theme === 'lightTheme') {
                state.theme = 'darkTheme'
                localStorage.setItem('Theme', 'darkTheme')
            }else if (state.theme === 'darkTheme'){
                state.theme = 'lightTheme'
                localStorage.setItem('Theme', 'lightTheme')
            }

        },
    },


}