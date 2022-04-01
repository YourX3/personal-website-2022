<template>

  <div class="footer-details">Imaginé et réalisé par Youri Menubarbe</div>

</template>

<script lang="ts">
import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc component containing conception details sentence 
 */
@Component({})
export default class YConceptionDetails extends Vue {
  private languageData = LanguageManager.languageData.toolbarData;

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.toolbarData;
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
