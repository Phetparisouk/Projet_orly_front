<template>
  <div>
    <v-carousel v-model="continent">
      <v-carousel-item
        v-for="(continent) in continents"
        :key="continent"
        :value="continent"
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
            <img src="../../public/images/Afrique.jpeg"/>
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
        continent: 'Afrique'
      }
    },
     computed: {
       imgName: function () {
        return '../../public/images/' + this.continent + '.jpeg'
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
