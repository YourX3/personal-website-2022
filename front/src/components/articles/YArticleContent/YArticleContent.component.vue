<template>
  <div class="article-content">

    <div class="mobile-details" v-if="article.articleId && ($mq === 'mobile' || $mq === 'tablet')">
      {{getArticleStrType(article.type)}},
      <br>
      {{languageData.publishedOn}}{{getStrDate(article.createdAt)}}, 
      <br>
      {{languageData.updatedOn}}{{getStrDate(article.updatedAt)}}
    </div>
    
    <div class="article-title" v-if="article.articleId">{{article.title}}</div>

    <div class="article-details" v-if="article.articleId && ($mq !== 'mobile' && $mq !== 'tablet')">
      <div class="article-detail">{{getArticleStrType(article.type)}}</div>
      <div class="article-detail">{{languageData.publishedOn}}{{getStrDate(article.createdAt)}}</div>
      <div class="article-detail">{{languageData.updatedOn}}{{getStrDate(article.updatedAt)}}</div>
    </div>

    <div v-if="article.articleId" class="article-text" v-html="transformedText" ref="articleTextContent"></div>

    <div class="error-msg" v-if="!article.articleId">
      {{languageData.cantLoadMessage}}
    </div>
  </div>

</template>

<script src="./YArticleContent.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YArticleContent.component.scss">
  
</style>

<style>

/*/////////////////////      TEXT-CONTENT-CLASSES    /////////////////////*/
.article-standard-image {
  max-width: 100%;
  text-align: center;
  margin: 10px auto 0 auto;
  border-radius: 10px;

  box-shadow: 0 0 5px var(--secondary);
}

.article-h2 {
  font-size: 1.5em;
  color: var(--light);
  font-weight: 900;
  margin-bottom: 3px;
  text-indent: 15px;
}

.article-h3 {
  font-size: 1.2em;
  color: var(--light);
  font-weight: 900;
  margin-bottom: 3px;
  text-indent: 0px;
}

.article-image-caption {
  font-size: 0.9em;
  color: var(--secondary);
  text-align: right;
  margin-right: 15px;
}

</style>
