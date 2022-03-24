import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class YSendMailDialog extends Vue {
  dialog = false;

  languageData = LanguageManager.languageData.sendMessageData;

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.sendMessageData;
      this.$forceUpdate();
    });
  }
}