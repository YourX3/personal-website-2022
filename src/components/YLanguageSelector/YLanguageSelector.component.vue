<template>
  <div class="selector-content">
    
    <div v-on:click="(event) => setLanguage(event, 'fr')" class="link-box">
      <router-link class="language-link" :to="setLanguageInUrl('fr')">FR</router-link>
    </div>
    <div v-on:click="(event) => setLanguage(event, 'en')" class="link-box">
      <router-link class="language-link" :to="setLanguageInUrl('en')">EN</router-link>
    </div>
  </div>
</template>

<script src="./YLanguageSelector.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YLanguageSelector.component.scss">
  
</style>
