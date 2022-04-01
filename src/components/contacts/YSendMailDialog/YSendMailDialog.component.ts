import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc dialog box that allows to write and send a message
 */
@Component({
  components: {
  }
})
export default class YSendMailDialog extends Vue {
  // defines wether or not the component is showing with mobile style
  @Prop({default: false}) 
  public mobile : boolean;

  // property used in order to show or hide the dialog box
  private dialog = false;

  private languageData = LanguageManager.languageData.sendMessageData;

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.sendMessageData;
      this.$forceUpdate();
    });
  }
}