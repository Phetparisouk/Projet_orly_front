<template>
    <div class="container"> 
        <br>
        <v-toolbar-title class="headline text-uppercase">
            Veuillez saisir les critères de votre voyage : 
        </v-toolbar-title>
        <br><br>
        <h2>Choisissez votre pays</h2>
        <v-autocomplete
        label="Pays"
        :items="componentsPays"
        ></v-autocomplete>

        <!--TODO: Récupérer de la base-->
        <v-for>
            <v-checkbox
            v-model="checkbox"
            :label="`Plage...`"
            ></v-checkbox>
        </v-for>


        <h2>Quelle température moyenne ?</h2>
        <v-autocomplete
        label="Température moyenne"
        :items="componentsTemperature"
        ></v-autocomplete>
        
        <h2>Quel mois souhaitez-vous y aller ?</h2>
        <v-autocomplete
        label="Mois"
        :items="componentsMois"
        ></v-autocomplete>
        


    </div>
</template>

<script>
export default {
    data () {
      return {
        checkbox: true,
        //TODO: Les villes de l'api
        componentsPays: [
          'France', 'Thailande', 'USA', 'Pays-Bas',
        ],
        //TODO: Les températures de l'api
        componentsTemperature: [
          '20', '30',
        ],

        componentsMois: [
          'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
        ],
      }
    },
  }
</script>
