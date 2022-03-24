<template>
  <div class="link-content" ref="linkContent" @click="linkClick()" v-on:click.middle="linkClick()">

    <div v-if="textSide === 'left'" :class="'link-title-box ' + labelVisibility + ' ' + textSide" ref="linkTitle">
      <slot name="title"></slot>
    </div>

    <div class="icon-circle">
      <v-icon class="animated-icon">
        <slot name="icon">mdi-github</slot>
      </v-icon>
    </div>

    <div v-if="textSide === 'right'" :class="'link-title-box ' + labelVisibility + ' ' + textSide" ref="linkTitle">
      <slot name="title"></slot>
    </div>

  </div>
</template>

<script src="./YAnimatedLink.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YAnimatedLink.component.scss">
  
</style>
