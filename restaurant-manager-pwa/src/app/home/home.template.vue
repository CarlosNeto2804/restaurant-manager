<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <card :content="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Card from "./../components/card/card.vue";
import { ICard } from "@/interfaces/app-interfaces/card.interface";
export default Vue.extend({
  name: "home",
  components: {
    Card,
  },
  data: () => ({
    items: [
      {
        title: "Vender",
        color: "#385F73",
        icon: "mdi-barcode-scan",
      },
    ] as ICard[],
  }),
});
</script>

<style scoped></style>
