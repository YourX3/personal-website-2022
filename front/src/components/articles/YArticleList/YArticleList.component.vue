<template>
  <div class="list-container">

    <div class="errorMsg"> {{ getErrorMsg() }}</div>
      <div class="project-sum-box" v-for="(article, index) in displayedArticles" :key="article.articleId">
        <YArticleSumCard  :articleSum="article"
        :hide="hideSumCards"
        :birthAnimationDuration="0.8"
        :birthDelay="(index+1) * 100"
        :startHidden="true"
          />

        <div v-if="($mq === 'mobile' || $mq === 'tablet') && index !== displayedArticles.length-1" class="separator"></div>
      </div>
  </div>
</template>

<script src="./YArticleList.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YArticleList.component.scss">
  
</style>

<style>

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>