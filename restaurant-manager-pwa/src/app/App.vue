<template>
  <v-app>
    <core-nav-bar />
    <core-drawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import CoreDrawer from "./components/CoreDrawer.vue";
import CoreNavBar from "./components/CoreNavBar.vue";
export default Vue.extend({
  name: "App",
  components: { CoreDrawer, CoreNavBar },
});
</script>
