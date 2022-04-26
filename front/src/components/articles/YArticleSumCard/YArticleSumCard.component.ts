import { ArticleSumDto } from "@/classes/ArticleSumDto";
import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import YImage from "../YImage/YImage.component.vue";

/**
 * @desc components that displays a article summary
 */
@Component({
  components: {
    YImage
  }
})
export default class YArticleSumCard extends Vue {
  languageData = LanguageManager.languageData;

  @Prop({default: new ArticleSumDto()})
  articleSum : ArticleSumDto;

  @Prop({default: false})
  birthAnimation : boolean;

  /**
   * @desc delay before birth animation
   */
  @Prop({default: 200})
  birthDelay : number;
  
  @Prop({default: 0.4})
  birthAnimationDuration : number;

  /**
   * @desc prop that defines wether if the component is visible or not
   */
  @Prop({default: false})
  hide : boolean;

  /**
   * @desc hides the component
   */
  @Watch("hide")
  hideCard() : void {
    if(this.hide) {
      const sumContainer = this.$refs.sumContainer as HTMLElement;
      if(!sumContainer) return;  
      sumContainer.style.transitionDuration = '0.1s';
      this.visibilityClass = "hide";
    }
  }

  visibilityClass = "";

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData;
      this.$forceUpdate();
    });

    this.$root.$on("update-projects-sorting", () => {
      this.birthAnim();
    });
    

    if(this.birthAnimation)
      this.birthAnim();
  }

  /**
   * @desc starts birth delayed animation 
   */
  private birthAnim() : void {
    const sumContainer = this.$refs.sumContainer as HTMLElement;
    if(!sumContainer) return;

    sumContainer.style.transitionDuration = '0.05s';
    this.visibilityClass = "hide";
    setTimeout(() => {
      sumContainer.style.transitionDuration = this.birthAnimationDuration + 's';
    }, 1);
    setTimeout(() => {
      this.visibilityClass = "show";
    }, this.birthDelay);
  }

  /**
   * @desc returns the article creation date in the current language format
   * @returns string
   */
  getArticleStrDate() : string {
    if(this.articleSum && this.articleSum.createdAt) {
      let month = (this.articleSum.createdAt.getMonth()+1).toString();
      if(month.length < 2) month = "0" + month;
      let date = (this.articleSum.createdAt.getDate()).toString();
      if(date.length < 2) date = "0" + date; 
      const year = (this.articleSum.createdAt.getFullYear()).toString();      

      const format = this.languageData.dateFormat;
      let resultDate = format.replace('MM', month);
      resultDate = resultDate.replace('DD', date);
      resultDate = resultDate.replace('YYYY', year);

      return resultDate;
    }
    return '';
  }

  /**
   * @desc navigates to the article details view
   */
  navigateToArticle() : void{
    if(!this.articleSum) return;
    this.$router.push(`/${this.articleSum.type}/${this.articleSum.articleId}`);
  }
}