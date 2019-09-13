<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span
        href="/">
        PROJET ORLY
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mr-2">Audrey | Mohammed | Phet | Theo | Bernard</span>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    
  }),
};
</script>
