<template>
  <v-app-bar color="deep-purple accent-4" dark app>
    <v-app-bar-nav-icon @click="changeMenuState" />
    <v-toolbar-title v-text="pageTitle" />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CoreNavBar",
  computed: {
    pageTitle(): string {
      return this.$route.name || "Página Não Mapeada";
    },
  },
  methods: {
    changeMenuState():void{
      this.$store.commit('drawer/changeState')
    },
  },
});
</script>
