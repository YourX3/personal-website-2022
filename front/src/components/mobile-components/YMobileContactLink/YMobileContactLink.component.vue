<template>
  <div class="link-content" ref="linkContent" v-on:click.middle="linkClick()">

    <div class="icon-circle" @click="linkClick()">
      <v-icon class="animated-icon">
        <slot name="icon">mdi-github</slot>
      </v-icon>
    </div>

    <div :class="'link-title-box ' + labelVisibility" ref="linkTitle" @click="linkClick()">
      <slot name="title"></slot>
    </div>

  </div>
</template>

<script src="./YMobileContactLink.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YMobileContactLink.component.scss">
  
</style>
