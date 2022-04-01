import YAnimatedLink from "@/components/contacts/YAnimatedLink/YAnimatedLink.component.vue";
import YSendMailDialog from "@/components/contacts/YSendMailDialog/YSendMailDialog.component.vue";
import YMobileContactLink from "@/components/mobile-components/YMobileContactLink/YMobileContactLink.component.vue";
import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc view containing contact informations
 */
@Component({
  components: {
    YAnimatedLink,
    YSendMailDialog,
    YMobileContactLink
  }
})
export default class ContactsView extends Vue {
  
  private languageData = LanguageManager.languageData.contactsData;

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.contactsData;
      this.$forceUpdate();
    });
  }
}