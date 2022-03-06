<template>
  <div >
    <v-app-bar class="header-toolbar">
      <div class="header-links-box">
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/">Accueil</router-link>
        </div>
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/">À propos</router-link>
        </div>        
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/">Contacts</router-link>
        </div>
        <div class="header-router-link-box">
          <router-link class="header-router-link" to="/">Chips</router-link>
        </div>
      </div>

      <v-toolbar-title class="light_accent--text">
        Youri
      </v-toolbar-title>
      <div class="chips"> chips</div>

    </v-app-bar>
  </div>
</template>

<script src="./YToolbar.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YToolbar.component.scss">
  
</style>
