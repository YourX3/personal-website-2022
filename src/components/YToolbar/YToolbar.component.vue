<template>
  <div>
    <v-app-bar class="header-toolbar">
      <div class="header-links-box">
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/">{{ languageData.home }}</router-link>
        </div>
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/about">{{ languageData.about }}</router-link>
        </div>        
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/projects">{{ languageData.projects }}</router-link>
        </div>
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/contacts">{{ languageData.contacts }}</router-link>
        </div>
      </div>

    </v-app-bar>
  </div>
</template>

<script src="./YToolbar.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YToolbar.component.scss">
  
</style>
