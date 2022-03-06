<template>
  <div class="content">
    
    <div class="star-box">
      <YBackgroundStar v-for="index in starCount" :key="index" />
    </div>

  </div>
</template>

<script src="./YBackground.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YBackground.component.scss">
  
</style>
