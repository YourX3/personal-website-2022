<template>
    
  <v-navigation-drawer
    v-model="visible"
    absolute
    right
    temporary
    class="drawer-content"
  >
    <div class="language-selector-box">
      <YMobileLanguageSelector />
    </div>

    <v-list
      nav
      class="nav-list"
    >
      <v-list-item-group
        active-class="active-link"
      >
        <v-list-item link to="/" class="drawer-link">
          <v-list-item-title>{{languageData.home}}</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/about" class="drawer-link">
          <v-list-item-title>{{languageData.about}}</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/projects" class="drawer-link">
          <v-list-item-title>{{languageData.projects}}</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/contacts" class="drawer-link">
          <v-list-item-title>{{languageData.contacts}}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <div class="footer-details">{{conceptionDetailsMessage}}</div>

  </v-navigation-drawer>

</template>

<script src="./YNavigationDrawer.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YNavigationDrawer.component.scss">
  
</style>

<style lang="scss">
  .drawer-content .v-navigation-drawer__content {
    overflow-y: hidden !important;
  }
</style>
