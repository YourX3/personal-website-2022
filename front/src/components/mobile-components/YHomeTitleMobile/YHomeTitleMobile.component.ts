import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc mobile component containing home titles managing birth animation and language
 */
@Component({})
export default class YHomeTitleMobile extends Vue {
  languageData = LanguageManager.languageData.homeData;

  mounted() : void {
    this.birthAnim();

    // listening to language updates 
    this.$root.$on("language-update", () => {
      // update language data
      this.languageData = LanguageManager.languageData.homeData
    });
  }
  
  /**
   * @desc starts birth delayed animation 
   */
  private birthAnim() : void {
    setTimeout(() => {
      (this.$refs.titleContent as HTMLElement).classList.remove("hide");
      (this.$refs.titleContent as HTMLElement).classList.add("show");
    }, 200);
  }
}