<template>
    <div class="container">
        <h2>Choisissez votre pays</h2>
        <v-autocomplete v-model="pays" label="Pays" :items="componentsPays"></v-autocomplete>
        <v-radio-group v-model="type">
            <v-radio :key="item" v-for="item in componentsTypes" :label="item" :value="item" class="d-inline"></v-radio>
        </v-radio-group>

        <h2>Quelle température moyenne minimum souhaitez vous ?</h2>
        <v-autocomplete v-model="degre" label="Température moyenne" :items="componentsTemperature" ></v-autocomplete>

        <h2>Quel mois souhaitez-vous y aller ?</h2>
        <v-autocomplete v-model="mois" label="Mois" :items="componentsMois"></v-autocomplete>

        <v-btn @click="search()">Rechercher</v-btn>

        <v-data-table
                v-show="afficheTab"
                :headers="headers"
                :items="villes"
                :items-per-page="5"
                class="elevation-1"
        ></v-data-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['continent'],
    data () {
        return {
            headers: [
                { text: 'Ville', value: 'nom_ville' },
                { text: 'Budget', value: 'budget' },
                { text: 'Pays', value: 'nom_pays' },
                { text: 'Type Voyage', value: 'nom_type' },
                { text: 'Degre (°C)', value: 'degre' },
                { text: 'Mois', value: 'mois' },
            ],
            afficheTab: false,
            pays: 'Algérie',
            type: 'Mer',
            mois: 'Janvier',
            degre:'10',
            villes: [],
            componentsPays: [],
            componentsTypes:[],
            componentsTemperature: [
                '10', '20', '30', '40'
            ],
            componentsMois: [
                'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
            ],
            errors: [],
        }
    },
    mounted () {
        this.getPays()
        this.getTypes()
    },
    methods: {
        getPays () {
            let nomContinent = {
                'nom_continent': this.continent
            }
            axios.post(`http://localhost:8000/paysByContinent`, nomContinent)
                .then(response => {
                    this.componentsPays = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        getTypes () {
            axios.post(`http://localhost:8000/type`)
                .then(response => {
                    this.componentsTypes = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        search () {
            let search = {
                'nom_pays': this.pays,
                'nom_type': this.type,
                'degre': this.degre,
                'mois': this.mois
            }
            axios.post(`http://localhost:8000/search`, search)
                .then(response => {
                    this.villes = response.data
                    this.afficheTab = true
                })
                .catch(e => {
                    this.afficheTab = false
                    this.errors.push(e)
                })
        }
    }
}
</script>
