<template>
  <div class="selector-content">
    
    <div v-on:click="switchLanguage('fr')" :class="'link-box language-link ' + linkActivated('fr')">
      FR
    </div>
    <div v-on:click="switchLanguage('en')" :class="'link-box language-link ' + linkActivated('en')">
      EN
    </div>
  </div>
</template>

<script src="./YLanguageSelector.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YLanguageSelector.component.scss">
  
</style>
