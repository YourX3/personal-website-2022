import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";
import YMobileLanguageSelector from "../YMobileLanguageSelector/YMobileLanguageSelector.component.vue";

/**
 * @desc top toolbar component allowing visitors to navigate inside the app with mobile
 */
@Component({
  components: {
    YMobileLanguageSelector
  }
})
export default class YMobileToolbar extends Vue {
  private languageData = LanguageManager.languageData.toolbarData;

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.toolbarData;
      this.$forceUpdate();
    });
  }

  /**
   * @desc requests navigation drawer opening
   */
  private openNavDrawer() : void {
    this.$root.$emit("open-nav-drawer"); 
  }

  /**
   * @desc navigates towards home page
   */
  private navigateHome() : void {
    if(location.pathname !== '/')
      this.$router.push('/');
  }
}