import ArticleData from "@/classes/ArticleData";
import YArticleContent from "@/components/articles/YArticleContent/YArticleContent.component.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from 'axios';
import * as UrlConsts from '@/classes/UrlConsts';

/**
 * @desc view containing main website informations
 */
@Component({
  components: {
    YArticleContent
  }
})
export default class ProjectContentView extends Vue {
  project : ArticleData = new ArticleData();

  mounted() {
    const articleId = this.getArticleId();
    if(articleId) {
      this.loadArticle(articleId);
    }
  }

  /**
   * @desc gets article id from route params
   * @returns the found article id
   */
  getArticleId() : string {
    return this.$route.params.articleId;
  }

  /**
   * @desc load the article associated to the given id
   */
  loadArticle(articleId : string) : void {
    axios
      .get(  UrlConsts.getProject + '/' + articleId)
      .then((response) => {
        this.project = new ArticleData(response.data);
      })
      .catch(error => console.log(error));
  }
}