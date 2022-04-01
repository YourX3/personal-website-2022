import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";
import YMobileLanguageSelector from "../YMobileLanguageSelector/YMobileLanguageSelector.component.vue";

/**
 * @desc navigation drawer allowing visitors to navigate inside the app with mobile
 */
@Component({
  components: {
    YMobileLanguageSelector
  }
})
export default class YNavigationDrawer extends Vue {
  private languageData = LanguageManager.languageData.toolbarData;
  private visible = false;

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.toolbarData;
      this.$forceUpdate();
    });

    this.$root.$on("open-nav-drawer", () => {
      this.visible = true;
    });
  }
}