import { ArticleSumDto } from "@/classes/ArticleSumDto";
import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from 'axios';
import * as UrlConsts from '@/classes/UrlConsts';
import YArticleList from "@/components/articles/YArticleList/YArticleList.component.vue";

/**
 * @desc view containing main website informations
 */
@Component({
  components: {
    YArticleList
  }
})
export default class ProjectsView extends Vue {

  languageData = LanguageManager.languageData.projectsData;

  projects : ArticleSumDto[] = [];
  sortingProp = "date";
  sortingOrder = "desc";

  private sortingOrders = {
    name : '',
    date : 'reverse'
  }
  selectedSortingProp = 'date';

  articleDisplayedList = [];


  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.projectsData;
      this.$forceUpdate();
      this.articleDisplayedList = [];
      this.loadProjects();
    });

    this.loadProjects();
  }

  /**
   * @desc updates sorting properties and ordering
   * @param sortingKey the key associated to the clicked button
   */
  private sortingButtonClick(sortingKey : string) : void {
    if(sortingKey !== this.selectedSortingProp) return;

    if(this.sortingOrders[sortingKey] !== undefined) {
      if(this.sortingOrders[sortingKey] === 'reverse') {
        this.sortingOrders[sortingKey] = '';
      }
      else this.sortingOrders[sortingKey] = 'reverse';
    }

    setTimeout(() => {
      this.updateSorting();
    });
  }

  /**
   * @desc apply the selected sorting properties
   */
  updateSorting() : void {
    this.sortingOrder = this.sortingOrders[this.selectedSortingProp] === "reverse" ? 'desc' : 'asc';
  }


  /**
   * @desc loads all the projects
   */
  private loadProjects() : void {
    axios
      .get(  UrlConsts.getAllProjectsSumsUrl + '/' + LanguageManager.currentLanguage)
      .then((response) => {
        this.projects = response.data.map((x : any) => new ArticleSumDto(x));
      })
      .catch(error => console.log(error));
  }

}