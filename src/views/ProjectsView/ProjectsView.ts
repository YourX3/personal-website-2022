import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc view containing main website informations
 */
@Component({
  components: {
  }
})
export default class ProjectsView extends Vue {

  languageData = LanguageManager.languageData.projectsData;

  mounted() : void {
    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.projectsData;
      this.$forceUpdate();
    });
  }


  private filtersSide = {
    name : '',
    date : ''
  }
  selectedFilter = 'name';

  articleDisplayedList = [];


  private getParentByClassName(el : Element, className : string) : Element | undefined {
    let currentEl = el;
    while(currentEl !== null && currentEl !== undefined) {
      if(currentEl.classList.contains(className)) return currentEl;
      currentEl = currentEl.parentElement;
    }
    return undefined;
  }

  private filterButtonClick(filterKey : string) : void {
    if(filterKey !== this.selectedFilter) return;

    if(this.filtersSide[filterKey] !== undefined) {
      if(this.filtersSide[filterKey] === 'reverse') {
        this.filtersSide[filterKey] = '';
      }
      else this.filtersSide[filterKey] = 'reverse';
    }
  }

}