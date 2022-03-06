<template>
  <v-app class="v-app">
    <YBackground />

    <div id="app">

      <YToolbar />

      <div id="view-container" ref="appContent" class="hide">
        <transition name="fade" mode="out-in" appear>
          <router-view :key="$route.fullpath" />
        </transition>
      </div>
      
        
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
      YBackground,
    },
  })
  export default class App extends Vue {
    mounted() {
      setTimeout(() => {
        (this.$refs.appContent as HTMLElement).className = "show";
      }, 100);
    }
  }

</script>


<style lang="scss">
  @import './styles/variables.scss';
  @import './styles/global-styles.scss';

  #app {
    font-family: 'main-font', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: none;
    transition: opacity 1s ease;
    transition-delay: 0.5s;
  }


  #view-container {
    transition: opacity 1s ease;
    transition-delay: 0.4s;
  }

  #view-container.hide {
    opacity: 0;
  }

  #view-container.show {
    opacity: 1;
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.22s ease;
  }


  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>
