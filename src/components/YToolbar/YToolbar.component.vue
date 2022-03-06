<template>
  <div >
    <v-app-bar class="header-toolbar">
      <div class="header-links-box">
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/">Accueil</router-link>
        </div>
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/about">À propos</router-link>
        </div>        
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/projects">Projets</router-link>
        </div>
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/contacts">Contacts</router-link>
        </div>
      </div>

    </v-app-bar>
  </div>
</template>

<script src="./YToolbar.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YToolbar.component.scss">
  
</style>
