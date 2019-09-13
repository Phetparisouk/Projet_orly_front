<template>
  <div class="container"> 
    <br><br>
    <div>
        Désolé, aucune ville n'a été trouvé en fonction de vos critères.
        Veuillez réessayer.
    </div>
    <img src="../../public/images/notfound.jpeg">
    <br><br>
    <!--TODO: Vue FormCriteres pour le href-->
    <v-btn 
    href="/">
        Retour aux paramètres
    </v-btn>
    &nbsp;&nbsp;&nbsp;
    <v-btn 
    href="/">
        Choisir un autre continent
    </v-btn>
  </div>
</template>

<script>
export default {
    data () {
      return {
      }
    },
  }
</script>
