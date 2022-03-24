import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class YArticleContent extends Vue {

  articleContent : string = "";

  mounted() : void {
    this.articleContent = require("@/assets/articles/projects/Website2022/Website2022.project.json").html;
  }
}