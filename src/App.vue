<template>
  <div id="app">
    <v-app class="v-app" ref="app">
      <YBackground />

      <v-sheet
        id="scrolling-techniques-4"
        :class="'app-sheet ' + sheetScrollingClass" 
        max-height="100vh"
      >
        <v-container :class="'view-container ' + ($mq === 'mobile' || $mq === 'tablet' ? 'mobile' : '')">
          <YToolbar v-if="$mq !== 'mobile' && $mq !== 'tablet'" />
          <div id="view-container" ref="appContent">
            <transition name="fade" mode="out-in" appear>
              <keep-alive>
                <router-view :key="$route.fullPath" />
              </keep-alive>
            </transition>
          </div>
        </v-container>
        <YConceptionDetails v-if="$mq !== 'mobile' && $mq !== 'tablet'" />  
      </v-sheet>


      <YMobileToolbar class="overflow-hidden" v-if="$mq === 'mobile' || $mq === 'tablet'" />

      <YLanguageSelector v-if="$mq !== 'mobile' && $mq !== 'tablet'" />

      <YNavigationDrawer /> 
    </v-app>
  </div>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import YBackground from './components/background/YBackground/YBackground.component.vue';
  import YToolbar from './components/YToolbar/YToolbar.component.vue';
  import YLanguageSelector from './components/YLanguageSelector/YLanguageSelector.component.vue';
  import LanguageManager from './scripts/LanguageManager';
  import NavigationUtils from './router/nagivation-utils';
  import YMobileToolbar from '@/components/mobile-components/YMobileToolbar/YMobileToolbar.component.vue';
  import YNavigationDrawer from '@/components/mobile-components/YNavigationDrawer/YNavigationDrawer.component.vue';
  import YConceptionDetails from '@/components/YConceptionDetails/YConceptionDetails.component.vue';

  @Component({
    components: {
      YToolbar,
      YBackground,
      YLanguageSelector,
      YMobileToolbar,
      YNavigationDrawer,
      YConceptionDetails
    },
  })
  export default class App extends Vue {
    sheetScrollingClass = "";
    timeout : any;

    mounted() : void {
      setTimeout(() => {
        this.initLanguage();
      }, 10);
      window.addEventListener('scroll', () =>{
        this.sheetScrollingClass = "scrolling";
        //const sheet = (this.$refs.sheet as any).$el as HTMLElement
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.sheetScrollingClass = "";
        }, 800)
      }, true);
    }

    /**
     * @desc loads language data, considering available informations from localStorage and navigator
     */
    private initLanguage() : void {
      const language = localStorage.getItem("lang");
      // if there's a language in localStorage
      if(language && language.length) {
        LanguageManager.loadLanguage(language);
        this.$root.$emit("language-update");
      }
      else {
        const navigatorLanguage = NavigationUtils.getNavigatorLanguage();
        // loads navigator language if it's available, else, loads french data
        const defaultLanguage = navigatorLanguage.length ? navigatorLanguage : 'fr';
        LanguageManager.loadLanguage(defaultLanguage);
        this.$root.$emit("language-update");
      }
    }
  }

</script>


<style lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/global-styles.scss';

  #app {
    font-family: 'main-font', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: none;
    transition: opacity 1s ease;
    transition-delay: 0.5s;
    overflow: hidden !important;
    height: 100%;
  }

  .app-sheet {
    background: unset !important;
    overflow-x: hidden !important;
    overflow-y: scroll !important;
    min-height: 100%;
    display: flex;
    flex-flow: column;
    margin-left: 8px;
    margin-right: 8px;

    border-color: rgba(255, 0, 0, 0) !important;
    transition: border-color .5s;
  }

  .app-sheet.scrolling {
      border-color: #7490c5cc !important;
  }

  .view-container {
    max-width: unset !important;
    flex-grow: 1;
    background-clip: unset !important;
  }

  .view-container.mobile  {
    padding: 12px 5px !important;
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.22s ease;
  }


  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }


.app-sheet::-webkit-scrollbar-track
{
	background-color: #f5f5f500;
	border-radius: 8px;
  margin-bottom: 12vh;
  margin-top: 12vh;
}

.app-sheet::-webkit-scrollbar
{
	width: 8px;
	background-color: #f5f5f500;
  transition: 0.5s;
}

.app-sheet::-webkit-scrollbar-thumb
{
	border-radius: 10px;
  width: 8px;
  border-color: inherit !important;
  border-width: 5px;
  border-style: inset solid;
}

.app-sheet::-webkit-scrollbar-track-piece:end {
    background: transparent;
}

.app-sheet::-webkit-scrollbar-track-piece:start {
    background: transparent;
}

.v-app::after { 
  content:'';
  position: absolute;
  z-index: -1;
  height: calc(100% - 24vh);
  top: 10px;
  right: -1px;
  width: 5px;
  margin-right: 10px;
  background: rgba(255, 255, 255, 0);
}

</style>


<style>
  html {
    overflow-y: hidden;
    height: 100%;
  }

  .v-application--wrap {
    min-height: 100% !important;
  }

  body {
    height: 100%;
  }
</style>