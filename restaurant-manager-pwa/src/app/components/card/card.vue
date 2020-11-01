<template>
  <v-card :color="content.color" dark>
    <v-card-title class="headline">
      {{ content.title }}
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { ICard } from "../../../interfaces/app-interfaces/card.interface";
export default Vue.extend({
  props: {
    content: {
      type: Object as () => ICard,
      required: true,
      default: () => ({
        title: "Não Informado",
        color: "gray",
        icon: "mdi-informations",
      }),
    },
  },
});
</script>

<style scoped></style>
