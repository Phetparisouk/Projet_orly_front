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
<v-img position="background-position" src="../../public/images/Afrique.jpeg">
            <br><br><br><br><br><br><br><br><br>
            <div class="display-3"
            align="center"
            justify="center">{{ continent }} </div>
          </v-img>
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
