<template>
  <div class="img-line-box">

    <div :class="'image-card-box ' + 'd' + imageSources.length" 
      v-for="(imgSrc, index) in imageSources" :key="imgSrc" @click="openCarousel(index)">

      <YImage :imageSrc="imgSrc" :articleId="articleId" childclass="image-card" />

    </div>

  </div>
</template>

<script src="./YImageLine.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YImageLine.component.scss">
  
</style>

<style>

  .image-card {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

</style>