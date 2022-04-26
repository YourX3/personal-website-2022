import NavigationUtils from "@/router/nagivation-utils";
import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc component allowing visitors to navigate inside the app
 */
@Component({})
export default class YToolbar extends Vue {
  languageData = LanguageManager.languageData.toolbarData;

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.toolbarData;
      this.$forceUpdate();
    });
  }
}