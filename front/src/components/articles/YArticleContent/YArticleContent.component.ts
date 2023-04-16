import ArticleData from "@/classes/ArticleData";
import LanguageManager from "@/scripts/LanguageManager";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import axios from 'axios';
import * as UrlConsts from '@/classes/UrlConsts';
import YImageLine from "../YImageLine/YImageLine.component.vue";
import YVideo from "../YVideo/YVideo.component.vue";

/**
 * @desc component that displays article details
 */
@Component({
  components: {
  }
})
export default class YArticleContent extends Vue {

  @Prop({default: new ArticleData})
  article : ArticleData;

  transformedText = '';

  languageData = LanguageManager.languageData.articleData;

  /**
   * @desc updates article text 
   */
  @Watch('article')
  updateArticle() {
    if(this.article && this.article.textContent) {
      this.transformedText = this.transformImages(this.article.textContent);
      this.transformedText = this.transformImageLines(this.transformedText);
      this.transformedText = this.transformVideos(this.transformedText);
    }
  }

  mounted() : void {
    // updates article text 
    if(this.article && this.article.textContent) {
      this.transformedText = this.transformImages(this.article.textContent);
      this.transformedText = this.transformImageLines(this.transformedText);
      this.transformedText = this.transformVideos(this.transformedText);
    }

    // listen to language updates to update language data
    this.$root.$on("language-update", () => {
      this.languageData = LanguageManager.languageData.articleData;
      this.$forceUpdate();
    });
  }

  /**
   * @desc returns the given date in the current language format
   * @param date the date to transform
   * @returns string
   */
  getStrDate(date : Date) : string {
    if(date) {
      let month = (date.getMonth()+1).toString();
      if(month.length < 2) month = "0" + month;
      let day = (date.getDate()).toString();
      if(day.length < 2) day = "0" + day;
      const year = (date.getFullYear()).toString();      

      const format = LanguageManager.languageData.dateFormat;
      let resultDate = format.replace('MM', month);
      resultDate = resultDate.replace('DD', day);
      resultDate = resultDate.replace('YYYY', year);

      return resultDate;
    }
    return '';
  }

  /**
   * @desc returns the name of the project type in the current language
   * @param type the string type
   * @returns 
   */
  getArticleStrType(type : string) : string {
    switch(type) {
      case "project":
        return LanguageManager.languageData.articleData.projectType
    }
  }

  /**
   * @desc replace all <YImage> in tags the initial article text in order to display the images
   * @param articleText the article initial text content
   * @returns the text transformed, ready to be used
   */
  transformImages(articleText : string) : string {
    for(let i=0; i < articleText.length; ++i) {
      const indexOfImage = articleText.indexOf('<YImage', i);
      if(indexOfImage === -1) break;

      const paramsEndIndex = articleText.indexOf('>', indexOfImage);
      if(indexOfImage === -1) break;

      const endIndex = articleText.indexOf('</YImage>', paramsEndIndex);
      if(indexOfImage === -1) break;

      const params = articleText.substring(indexOfImage + 7, paramsEndIndex);
      const imageId = "article_img_" + (i+1);
      const textToAdd = `<img ${params} id="${imageId}" />`;

      const imageSrc = articleText.substring(paramsEndIndex+1, endIndex);
      this.loadImage(imageSrc).then((src) => {
        const el = this.findElementById(imageId.toString());
        if(el) {
          el.setAttribute('src', src);
        }
      });
      
      articleText = articleText.substring(0, indexOfImage) + 
        textToAdd + articleText.substring(endIndex + 9);

      i = indexOfImage + textToAdd.length-1;
    }
    return articleText;
  }

  /**
   * @desc replace all <Y-Image-Line> in tags the initial article text in order to display the images lines
   * @param articleText the article initial text content
   * @returns the text transformed, ready to be used
   */
  transformImageLines(articleText : string) : string {
    for(let i=0; i < articleText.length; ++i) {
      const indexOfImage = articleText.indexOf('<Y-Image-Line', i);
      if(indexOfImage === -1) break;

      const paramsEndIndex = articleText.indexOf('>', indexOfImage);
      if(indexOfImage === -1) break;

      const endIndex = articleText.indexOf('</Y-Image-Line>', paramsEndIndex);
      if(indexOfImage === -1) break;

      const params = articleText.substring(indexOfImage + 7, paramsEndIndex);
      const upperElId = "mark" + (i+1);
      const textToAdd = `<article-img-line-mark id="${upperElId}"></article-img-line-mark>`;

      const imageSources = articleText.substring(paramsEndIndex+1, endIndex).split(' ');

      let ComponentClass = Vue.extend(YImageLine);
      let instance = new ComponentClass({
          propsData: { imageSources, articleId : this.article.articleId, root: this.$root }
      });

      setTimeout(() => {
        instance.$mount(); // pass nothing
        const upperEl = this.findElementById(upperElId);
        if(upperEl) {
          upperEl.parentNode.insertBefore(instance.$el, upperEl);
        }
      }, 10);

      articleText = articleText.substring(0, indexOfImage) + 
        textToAdd + articleText.substring(endIndex + '</Y-Image-Line>'.length);
      i = indexOfImage + textToAdd.length;

    }
    return articleText;
  }

  /**
   * @desc replace all <Y-Video> in tags the initial article text in order to display the images lines
   * @param articleText the article initial text content
   * @returns the text transformed, ready to be used
   */
  transformVideos(articleText : string) : string {
    for(let i=0; i < articleText.length; ++i) {
      const indexOfVideo = articleText.indexOf('<Y-Video', i);
      if(indexOfVideo === -1) break;

      const paramsEndIndex = articleText.indexOf('>', indexOfVideo);
      if(indexOfVideo === -1) break;

      const endIndex = articleText.indexOf('</Y-Video>', paramsEndIndex);
      if(indexOfVideo === -1) break;

      const upperElId = "video-mark" + (i+1);
      const textToAdd = `<article-video-mark id="${upperElId}"></article-video-mark>`;

      const src = articleText.substring(paramsEndIndex+1, endIndex);

      let ComponentClass = Vue.extend(YVideo);
      let instance = new ComponentClass({
          propsData: { "src" : src, root: this.$root }
      });

      setTimeout(() => {
        instance.$mount(); // pass nothing
        const upperEl = this.findElementById(upperElId);
        if(upperEl) {
          upperEl.parentNode.insertBefore(instance.$el, upperEl);
        }
      }, 10);

      articleText = articleText.substring(0, indexOfVideo) + 
        textToAdd + articleText.substring(endIndex + '</Y-Video>'.length);
      i = indexOfVideo + textToAdd.length;
    }
    return articleText;
  }


  /**
   * @desc returns one element that match with the id
   * @param elId the searched element id
   * @returns the found element or null
   */
  findElementById(elId : string) : Element | null {
    const textContentEl = this.$refs.articleTextContent as HTMLElement;
    if(textContentEl)
      return textContentEl.querySelector("#" + elId);
    return null;
  }

  /**
   * @desc load image from server
   * @param imageSrc image file name
   * @returns the new image src
   */
  async loadImage(imageSrc) : Promise<string> {
    return new Promise((resolve, reject) => {
      const url = UrlConsts.getArticleImageUrl;
      axios
        .get(url + '/' + imageSrc + '/' + this.article.articleId)
        .then((response) => {
          let urlCreator = window.URL || window.webkitURL;
          let blobData = new Blob([new Uint8Array(response.data.data)]);
          let imageUrl = urlCreator.createObjectURL(blobData);
          resolve(imageUrl);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        })
    })
  }
}