import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc mobile component allowing visitors to switch to another available language
 */
@Component({
  components: {
  }
})
export default class YMobileLanguageSelector extends Vue {

  mounted() : void {
    // listen to language updates to update links
    this.$root.$on("language-update", () => {
      this.$forceUpdate();
    });
  }

  /**
   * @desc switch to given language
   * @param language 'fr' or 'en' 
   */
  private switchLanguage(language : string) : void {
    LanguageManager.loadLanguage(language);
    localStorage.setItem("lang", language);
    this.$root.$emit("language-update");
  }


  /**
   * @desc check if given language is the current website language
   * @param language language to test
   * @returns 'activated' if same, else '' 
   */
  private linkActivated(language : string) : string {
    if(LanguageManager.currentLanguage === language || (language === 'en' && LanguageManager.currentLanguage.indexOf('en') !== -1)) {
      return 'activated';
    }
    return '';
  }
}