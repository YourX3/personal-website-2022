import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc component allowing visitors to switch to another available language
 */
@Component({
  components: {
  }
})
export default class YLanguageSelector extends Vue {
  
  /**
   * @desc add the given language in the current url
   * @returns the edited url
   */
  private setLanguageInUrl(language: string) : string {
    const url = this.$route.fullPath;
    const currentLanguageEndIndex = url.indexOf('/', 1);

    return '/' + language + url.substring(currentLanguageEndIndex);
  }


  /**
   * @desc loads the given language only if event target is not the router link box  
   * @param event click event
   * @param language language tp load
   */
  private setLanguage(event : PointerEvent, language : string) : void {
    if(event && !(event.target as Element).classList.contains('link-box')){
      LanguageManager.loadLanguage(language);
      this.$root.$emit("language-update");
    }
  }
}