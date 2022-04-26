<template>
  <div :class="'sum-card-content ' + visibilityClass" ref="sumContainer" @click="navigateToArticle()">
    
    <div class="cover-img-box">
      <YImage :articleId="articleSum.articleId" :imageSrc="articleSum.coverImgSrc" childclass="sum-card-image" />
    </div>

    <div class="title-box">{{ articleSum.title }}</div>

    <div class="sum-text">{{ articleSum.sum }}</div>

    <div class="date-label">{{ getArticleStrDate() }}</div>

  </div>
</template>

<script src="./YArticleSumCard.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YArticleSumCard.component.scss">
  
</style>

<style lang="scss">
  
  .sum-card-image {
    border-radius: 4px 20px;
    box-shadow: 0 0 3px var(--secondary);
    height: 100%;
    min-height: 100%;
    max-width: 100%;
    width: unset !important;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    
  }

</style>