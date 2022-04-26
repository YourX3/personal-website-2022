import { serverUrl } from "@/classes/UrlConsts";
import YAnimatedLink from "@/components/contacts/YAnimatedLink/YAnimatedLink.component.vue";
import YSendMailDialog from "@/components/contacts/YSendMailDialog/YSendMailDialog.component.vue";
import YMobileContactLink from "@/components/mobile-components/YMobileContactLink/YMobileContactLink.component.vue";
import YSendMailLink from "@/components/contacts/YSendMailLink/YSendMailLink.component.vue";
import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc view containing contact informations
 */
@Component({
  components: {
    YAnimatedLink,
    YSendMailDialog,
    YMobileContactLink,
    YSendMailLink
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

  /**
   * @desc returns the resume url, considering current language
   */
  getResumeUrl() : string {
    switch(LanguageManager.currentLanguage) {
      case 'fr':
        return serverUrl + '/resumes/' + 'fr';

      default:
        return serverUrl + '/resumes/' + 'en';
    }
  }

  /**
   * @desc returns the resume filename, considering current language
   */
  getResumeFileName()  : string{
    switch(LanguageManager.currentLanguage) {
      case 'fr':
        return 'youri_menubarbe_cv_fr.pdf';

      default:
        return 'youri_menubarbe_resume_en.pdf';
    }
  }
}