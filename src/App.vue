<template>
  <v-app class="v-app" ref="app">
    <YBackground />

    <div id="app">

      <YToolbar />

      <div id="view-container" ref="appContent">
          <transition name="fade" mode="out-in" appear>
            <keep-alive>
              <router-view :key="$route.fullPath" />
            </keep-alive>
          </transition>
      </div>
      
        
    </div>

    <YLanguageSelector />

  </v-app>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import YBackground from './components/background/YBackground/YBackground.component.vue';
  import YToolbar from './components/YToolbar/YToolbar.component.vue';
  import YLanguageSelector from './components/YLanguageSelector/YLanguageSelector.component.vue';
  import LanguageManager from './scripts/LanguageManager';
  import NavigationUtils from './router/nagivation-utils';

  @Component({
    components: {
      YToolbar,
      YBackground,
      YLanguageSelector,
    },
  })
  export default class App extends Vue {
    mounted() : void {
      setTimeout(() => {
        this.initLanguage();
      }, 10);
    }

    /**
     * @desc loads language data, considering available informations about url and navigator
     */
    private initLanguage() : void {
      const language = NavigationUtils.getUrlLanguage();
      // if there's a language in url
      if(language) {
        LanguageManager.loadLanguage(language);
        this.$root.$emit("language-update");
      }
      else {
        const navigatorLanguage = NavigationUtils.getNavigatorLanguage();
        // loads navigator language if it's available, else, loads french data
        const defaultLanguage = navigatorLanguage.length ? navigatorLanguage : 'fr';
        LanguageManager.loadLanguage(defaultLanguage);
        this.$router.push(this.setLanguageInUrl(defaultLanguage)).then(() => {
          this.$root.$emit("language-update");
        });
      }
    }

    /**
     * @desc add given language in current url
     */
    private setLanguageInUrl(language: string) : string {
      const url = this.$route.fullPath;
      const currentLanguageEndIndex = url.indexOf('/', 1);

      return '/' + language + url.substring(currentLanguageEndIndex);
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


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.22s ease;
  }


  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>
