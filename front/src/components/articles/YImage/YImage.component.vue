<template>
  <div class="img-box">
    <img :src="currentSrc" loading="lazy" id="img" ref="img" :class="childclass" @error="onError($event)" @load="imgLoaded($event)" @appear="imgLoaded($event)"/>
  </div>
</template>

<script src="./YImage.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YImage.component.scss">
  
</style>