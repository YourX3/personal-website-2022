<template>
  <div >
    <v-app-bar class="header-toolbar">
      <div class="header-links-box">
        <div class="header-router-link-box">
          <router-link class="header-router-link" :to="getPathWithLanguage('/')">{{ languageData.home }}</router-link>
        </div>
        <div class="header-router-link-box">
          <router-link class="header-router-link" :to="getPathWithLanguage('/about')">{{ languageData.about }}</router-link>
        </div>        
        <div class="header-router-link-box">
          <router-link class="header-router-link" :to="getPathWithLanguage('/projects')">{{ languageData.projects }}</router-link>
        </div>
        <div class="header-router-link-box">
          <router-link class="header-router-link" :to="getPathWithLanguage('/contacts')">{{ languageData.contacts }}</router-link>
        </div>
      </div>

    </v-app-bar>
  </div>
</template>

<script src="./YToolbar.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YToolbar.component.scss">
  
</style>
