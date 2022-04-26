import { Component, Prop, Vue } from "vue-property-decorator";
import axios from 'axios';
import * as UrlConsts from '@/classes/UrlConsts';
import { ArticleSumDto } from "@/classes/ArticleSumDto";
import YArticleSumCard from "@/components/articles/YArticleSumCard/YArticleSumCard.component.vue";
import LanguageManager from "@/scripts/LanguageManager";

const newsMaxCount = 5;

/**
 * @desc scroller component, allowing visitors to watch latest content posted on
 */
@Component({
  components: {
    YArticleSumCard
  }
})
export default class YHomeNewsScroller extends Vue {

  scrollingcontainerClass = '';
  timeout : any;
  visibilityClass = "hide";


  lastArticles : ArticleSumDto[] = [];

  languageData = LanguageManager.languageData.homeData;

  mounted() : void {
    this.birthAnim();
    this.loadNews();
    this.initScrollingAnimation();

    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.lastArticles = [];
      this.loadNews();
      this.languageData = LanguageManager.languageData.homeData;
      this.$forceUpdate();
    });
  }

  /**
   * @desc starts birth delayed animation 
   */
  private birthAnim() : void {
    setTimeout(() => {
      this.visibilityClass = "show";
    }, 1400);
  }

  /**
   * @desc start listening to scrolling event emitted by the container
   */
  private initScrollingAnimation() : void {
    const scrollerContainer = (this.$refs.scrollerContainer as any);
    scrollerContainer.addEventListener('scroll', () =>{
      this.scrollingcontainerClass = "scrolling";
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.scrollingcontainerClass = "";
      }, 800)
    }, true);
  }

  /**
   * @desc loads the last published articles
   */
  private loadNews() : void {
    axios
      .get(  UrlConsts.getLastProjectsSumsUrl + '/' + newsMaxCount + '/' + LanguageManager.currentLanguage)
      .then((response) => {
        this.lastArticles = response.data.map((x : any) => new ArticleSumDto(x));
        console.log(this.lastArticles);
      })
      .catch(error => console.log(error))
  }
  
  /**
   * @desc returns the error message when there's no projects loaded
   * @returns the error message
   */
  private getErrorMsg() : string {
    if(this.lastArticles && this.lastArticles.length) {
      return '';
    }
    return LanguageManager.languageData.projectsData.noProjectsMessage;
  }
}