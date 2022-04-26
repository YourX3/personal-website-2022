<template>
  <div>
    <v-btn :class="'send-email-button ' + (mobile ? 'mobile' : '')" text :href="'mailto:' + contactAdress">
      <v-icon class="send-email-icon">mdi-email-send-outline</v-icon>
      {{ languageData.title }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc just a link with a button
 */
@Component({
  components: {
  }
})
export default class YSendMailLink extends Vue {
  // defines wether or not the component is showing with mobile style
  @Prop({default: false}) 
  public mobile : boolean;
  public contactAdress = process.env.VUE_APP_MAIL_BOX_ADRESS;

  private languageData = LanguageManager.languageData.sendMessageData;

  mounted() : void {
    this.contactAdress = process.env.VUE_APP_MAIL_BOX_ADRESS;

    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.sendMessageData;
      this.$forceUpdate();
    });
  }
}
</script>

<style scoped lang="scss">
  
.send-email-button {
  font-size: 1.04em !important;
  font-weight: 600 !important;
  text-transform: none;
  color: var(--v-secondary-lighten3) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px !important;
  height: unset !important;
  border-radius: 100px !important;
}

.send-email-button.mobile {
  color: white !important;
}


.send-email-icon {
  font-size: 30px;
  color: var(--v-secondary-lighten3);
  margin-right: 13px;
}
</style>
