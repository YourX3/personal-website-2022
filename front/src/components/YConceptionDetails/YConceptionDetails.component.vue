<template>

  <div class="footer-details">{{conceptionDetailsMessage}}</div>

</template>

<script lang="ts">
import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc component containing conception details sentence 
 */
@Component({})
export default class YConceptionDetails extends Vue {
  private conceptionDetailsMessage = LanguageManager.languageData.conceptionDetailsMessage;

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.conceptionDetailsMessage = LanguageManager.languageData.conceptionDetailsMessage;
      this.$forceUpdate();
    });
  }
}
</script>

<style scoped lang="scss">
  .footer-details {
    text-align: center;
    color: var(--v-secondary-lighten2);
    padding: 10px 20px;
    font-size: 0.75em;
  }
</style>
