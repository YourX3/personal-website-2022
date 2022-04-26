import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import axios from 'axios';
import * as UrlConsts from '@/classes/UrlConsts';


/**
 * @desc component able to display an article image
 */
@Component({
  components: {
  },
})
export default class YImage extends Vue {
  
  @Prop()
  childclass? : string | undefined;

  @Prop({default: ''})
  imageSrc? : string;

  @Prop({default: ''})
  articleId? : string;

  /**
   * @desc event name to send when image is loaded
   */
  @Prop({default: "YImage-loaded"})
  onloadEvent? : string;

  private currentId = 0;
  private currentSrc = "";

  mounted() : void{
    if(this.imageSrc){
      this.updateImage();
    }
  }

  @Watch("imageSrc")
  private imgSrcChanged() : void{
    if(this.imageSrc) {
      this.updateImage();
    }
  }


  @Watch("articleId")
  private articleIdChanged() : void {
    if(this.imageSrc) {
      this.updateImage();
    }
  }

  /**
   * @desc updates image considering its source, and loads it if it's necessary
   */
  private updateImage() : void {
    if(!this.articleId || !this.imageSrc){
      this.setSrc("");
      return;
    }

    const url = UrlConsts.getArticleImageUrl;
    axios
      .get(url + '/' + this.imageSrc + '/' + this.articleId)
      .then((response) => {
        let urlCreator = window.URL || window.webkitURL;
        let blobData = new Blob([new Uint8Array(response.data.data)]);
        let imageUrl = urlCreator.createObjectURL(blobData);
        this.setSrc(imageUrl);
      })
      .catch(error => console.log(error))
  }

  /**
   * @desc define the image element source
   */
  public setSrc(src : string) : void {
    this.currentSrc = src;
    if(!this.currentSrc) (this.$el.querySelector("#img") as HTMLImageElement).removeAttribute("src");
    else
      (this.$el.querySelector("#img") as HTMLImageElement).src = src;
  }

  /**
   * @desc returns the current image source
   */
  public getSrc() : string {
    return this.currentSrc as string;
  }

  /**
   * @desc emits event when image is loaded
   */
  private imgLoaded(event : Event) : void {
    const img = event.target as HTMLImageElement;
    if(img)
      img.style.opacity = "1";

    if(!this.onloadEvent) return;
    this.$root.$emit(this.onloadEvent, img);
  }

  /**
   * @desc hide image if an error occurs during loading
   */
  private onError(event : Event) : void {
    const img = event.target as HTMLImageElement;
    if(img)
      img.style.opacity = "0";
  }
}