<template>
  <div> 
    <br><br>
    <div class="container">
      <v-autocomplete
        label="Recherche globale"
        :items="componentsRechercheGlobale"
      ></v-autocomplete>
    </div>


    <v-toolbar-title class="headline text-uppercase" align="center">
      Veuillez sélectionner un continent 
    </v-toolbar-title>

    <v-carousel>
      <v-carousel-item
        v-for="(continent) in continents"
        :key="continent"
      >
        <v-sheet
          height="100%"
          tile
        >
          <v-row
            @click="goForm(continent)"
            class="fill-height"
            align="center"
            justify="center"
          >
          <!--TODO: image dont le titre est {{continent}}-->
          <div class="background" ><img src="../../public/images/Afrique.jpeg"></div>
            <div class="display-3"> {{ continent }} </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
    data () {
      return {
         continents: [
          'Afrique',
          'Amérique du sud',
          'Amérique du nord',
          'Europe',
          'Asie',
          'Océanie'
        ],

        //TODO: Les villes de l'api
        componentsRechercheGlobale: [
          'Paris', 'Los Angeles', 'Miami', 'Abidjan', 'Amsterdam', 'Phuket', 'Selection Controls', 'Sliders', 'Textareas', 'Text Fields',
        ],
        //continent: 'Afrique'
      }
    },
     methods: {
      goForm (varContinent) {
        this.continent = varContinent
        this.$router.push({ name: 'formvoyage', params: { continent: this.continent } })
      }
    }
  }
</script>
