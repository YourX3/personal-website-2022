<template>
  <v-app class="v-app">
    <YBackground />

    <div id="app">

      <YToolbar />

      <v-btn color="tertiary">
        Hello !
      </v-btn>

      <!-- <router-view :key="$route.fullPath" /> -->

    </div>
  </v-app>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import YBackground from './components/background/YBackground/YBackground.component.vue';
  import YToolbar from './components/YToolbar/YToolbar.component.vue';

  @Component({
    components: {
      YToolbar,
      YBackground
    },
  })
  export default class App extends Vue {

  }

</script>


<style lang="scss">
  @import './styles/variables.scss';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
