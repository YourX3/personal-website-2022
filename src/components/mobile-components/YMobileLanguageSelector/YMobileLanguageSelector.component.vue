<template>
  <div class="selector-content">
    
    <v-btn icon large v-on:click="switchLanguage('fr')" :class="'link-box language-link ' + linkActivated('fr')">
      FR
    </v-btn>
    <v-btn icon large v-on:click="switchLanguage('en')" :class="'link-box language-link ' + linkActivated('en')">
      EN
    </v-btn>
  </div>
</template>

<script src="./YMobileLanguageSelector.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YMobileLanguageSelector.component.scss">
  
</style>
