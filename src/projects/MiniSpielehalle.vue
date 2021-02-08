<template>
<v-container>
    <v-row align="center" justify="center">
        <h1>Mini Spielehalle</h1>
    </v-row>
    <v-row align="center" justify="center">
        <h3>This is still in progress</h3>
    </v-row>

    <div v-if="ready">
        <h1>tanker-encrypt-decrypt tutorial</h1>
    </div>
    <div v-else>
        <p>Loading</p>
    </div>
</v-container>
</template>

<script>
import FakeAuthentication from '@tanker/fake-authentication'
import Tanker from '@tanker/client-browser'

const appId = 'REMw3pmXYI2+Fquh7ABNhwEOh58JQNFczvNtW+/lTus='

export default {
    data() {
        return {
            tanker: null,
            fakeAuth: null,
            ready: false

        }
    },
    created() {
        this.tanker = new Tanker({
            appId
        })
        this.fakeAuth = new FakeAuthentication({
            appId
        })
    },
    mounted() {
        this.ready = true
    }
}
</script>
