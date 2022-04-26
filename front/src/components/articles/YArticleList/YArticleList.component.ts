import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import axios from 'axios';
import * as UrlConsts from '@/classes/UrlConsts';
import { ArticleSumDto } from '@/classes/ArticleSumDto';
import YArticleSumCard from '../YArticleSumCard/YArticleSumCard.component.vue';
import LanguageManager from '@/scripts/LanguageManager';

/**
 * @desc component displaying a list of article summaries
 */
@Component({
  components: {
    YArticleSumCard
  },
})
export default class YArticleList extends Vue {
  
  @Prop({default: []})
  articles? : Array<ArticleSumDto>;

  displayedArticles : Array<ArticleSumDto> = [];

  @Prop({default: "date"})
  sortingProp? : string;

  @Prop({default: "desc"})
  sortingOrder? : string;

  hideSumCards = false;

  timeout1 : any;
  timeout2 : any;
  timeout3 : any;

  mounted() {
    if(this.displayedArticles && this.displayedArticles.length)
      this.displayedArticles = [...this.articles];
      switch(this.sortingProp) {
        case "name" : 
          this.sortByName();
          break;
        
        case "date" : 
          this.sortByDate();
          break;
      }
  }

  @Watch("articles")
  articlesChanged() : void {
    this.displayedArticles = [...this.articles];
    this.updateSorting();
  }


  /**
   * @desc updates article sorting
   */
  @Watch("sortingProp")
  @Watch("sortingOrder")
  private updateSorting() {
    setTimeout(() => {
      this.hideSumCards = true;
    }, 5);
    clearTimeout(this.timeout1);
    clearTimeout(this.timeout2);
    clearTimeout(this.timeout3);
    
    this.timeout1 = setTimeout(() => {
      switch(this.sortingProp) {
        case "name" : 
          this.sortByName();
          break;
        
        case "date" : 
          this.sortByDate();
          break;
      }

      this.timeout1 = setTimeout(() => {
        this.$root.$emit("update-projects-sorting");
      }, 5);

      this.timeout3 = setTimeout(() => {
        this.hideSumCards = false;
      }, 10);
    }, 50);
  }

  /**
   * @desc sort the articles by name
   */
  private sortByName() : void {
    this.displayedArticles.sort((a: ArticleSumDto, b: ArticleSumDto) => {
      let sortScore = a.title.localeCompare( b.title);
      if(sortScore === 0) {
        sortScore = (b.createdAt.getTime() - a.createdAt.getTime());
      }
      return sortScore;
    });
    if(this.sortingOrder === "desc") this.displayedArticles.reverse();
  }

  /**
   * @desc sort the articles by creation date
   */
  private sortByDate() : void {
    this.displayedArticles.sort((a: ArticleSumDto, b: ArticleSumDto) => {
      let sortScore = (a.createdAt.getTime() - b.createdAt.getTime());
      if(sortScore === 0) {
        sortScore = b.title.localeCompare( a.title);;
      }
      return sortScore;
      return (a.createdAt.getTime() - b.createdAt.getTime());
    });
    if(this.sortingOrder === "desc") this.displayedArticles.reverse();    
  }

  /**
   * @desc returns the error message when there's no projects loaded
   * @returns the error message
   */
  private getErrorMsg() : string {
    if(this.displayedArticles && this.displayedArticles.length) {
      return '';
    }
    return LanguageManager.languageData.projectsData.noProjectsMessage;
  }
}