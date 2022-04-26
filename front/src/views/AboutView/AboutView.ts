import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc component containing informations about the creator
 */
@Component({})
export default class AboutView extends Vue {
  languageData = LanguageManager.languageData.aboutData;

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.aboutData;
      this.$forceUpdate();
    });
  }
}