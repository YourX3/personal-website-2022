<template>
  <div class="scroller-section">
    <div :class="'title-label  ' + visibilityClass"> {{languageData.lastNews}}</div>
    <div :class="'scroller-container  ' + visibilityClass + ' ' + scrollingcontainerClass" ref="scrollerContainer">
        <div class="scroller-content">
          
          <div class="errorMsg"> {{ getErrorMsg() }}</div>

          <div class="article-sum-box"
            v-for="(articleSum, index) in lastArticles" :key="articleSum.articleId"
          >
            <YArticleSumCard :articleSum="articleSum" :birthAnimation="true" :birthAnimationDuration="1.8" />
            <div v-if="index !== lastArticles.length-1" class="separator"></div>
          </div>

          <router-link v-if="lastArticles && lastArticles.length" class="see-more-label" to='/projects'>- {{languageData.seeMore}} -</router-link>

        </div>

    </div>
  </div>
</template>

<script src="./YHomeNewsScroller.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YHomeNewsScroller.component.scss">
  
</style>

<style lang="scss">
  .vue-scrollbar__scrollbar-vertical {
    right: unset !important;
    left: 0 !important;
    border-radius: 20px;
    width: 6px !important;
  }

  .scrollbar {
    width: 6px !important;
    border-radius: 20px;
    background: #899fddcc !important;
    border: inset solid #5a70b1a2 2px; 

    //max-height: 80px !important;
  }
</style>
