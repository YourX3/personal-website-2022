<template>
    <div>
    <v-app-bar class="mobile-header-toolbar"
      hide-on-scroll
      absolute
      scroll-target="#scrolling-techniques-4"
      height="64">

      <v-btn class="YM-logo-box" @click="navigateHome()" icon><img src="@/assets/logo.svg" class="title-logo" /></v-btn>

      <v-spacer></v-spacer>

      <v-btn icon color="tertiary" @click="openNavDrawer()">
        <v-icon large>mdi-menu</v-icon>
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script src="./YMobileToolbar.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YMobileToolbar.component.scss">
  
</style>
