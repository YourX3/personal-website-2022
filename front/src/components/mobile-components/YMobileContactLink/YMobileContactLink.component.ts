import { Component, Prop, Vue } from "vue-property-decorator";
import axios from 'axios';

/**
 * @desc customizable animated link component for mobile view
 */
@Component({
  components: {
  }
})
export default class YMobileContactLink extends Vue {

  // boolean param that defines wether label is rendered on mount or not
  @Prop({default: true})
  public init_hideText: boolean;

  // defines delay before component starts self-animations
  @Prop({default: 200})
  public birthDelay: number;

  // url on click
  @Prop({default: ''})
  public url: string;

  // download file at url on click
  @Prop({default: ''})
  public downloadUrl: string;
  
  @Prop({default: ''})
  public fileName: string;

  // first animation timestamps
  private animationStartTime? : number;

  // html element of the component
  private contentEl? : HTMLElement;

  // label css class defining wether label is visible or not
  private labelVisibility = "hide";

  mounted() : void {
    this.init();

    setTimeout(() => {
      this.labelVisibility = "show";
    }, this.birthDelay);
  }

  /**
   * @desc inits component element position
   */
  private init() : void {
    this.contentEl = (this.$refs.linkContent as HTMLElement);
  }

  /**
   * @desc opens new tab with given url
   */
  private linkClick() : void {
    if(this.url && this.url.length)  {
      window.open(this.url, '_blank').focus();
    }    
    else if(this.downloadUrl) {
      this.download(this.downloadUrl, this.fileName);
    }
  }
  
  /**
   * @desc launches the file download at the given url
   * @param dataUrl the url of the file
   * @param filename the new filename
   */
  private download(dataUrl : string, filename : string) : void{
    const url = dataUrl;

    axios
      .get(url)
      .then((response) => {
        let urlCreator = window.URL || window.webkitURL;
        let blobData = new Blob([new Uint8Array(response.data.data)]);
        let imageUrl = urlCreator.createObjectURL(blobData);
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = filename;
        link.click();
      })
      .catch(error => console.log(error))
  }
}