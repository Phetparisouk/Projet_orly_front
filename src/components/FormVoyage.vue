<template>

    <v-container>
        <v-toolbar-title class="headline text-uppercase">
                {{continent}}
        </v-toolbar-title>
        
        <v-row>
            <v-col>
                {{this.pays}}
            </v-col>
        </v-row>

        <v-btn
        href="/">
        Choisir un autre continent</v-btn>

    </v-container>

</template>

<script>

    import axios from 'axios'

    export default {
        props: ['continent'],
        
        data () {
        return {
            pays: null
        }
        },

        mounted () {
            axios.post('localhost:8000/getPaysByContinent', {
                'nom_continent': this.continent
            }).then(response => {
            if (response.data) {
                this.pays = response.data
            }
            })
            .catch(error => {
            console.log(error)
            })
        },

        methods: {

        }
    }

</script>
