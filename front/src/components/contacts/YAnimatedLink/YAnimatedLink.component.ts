import { getAllProjectsSumsUrl } from '@/classes/UrlConsts';
import axios from 'axios';
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc customizable animated link component
 */
@Component({
  components: {
  }
})
export default class YAnimatedLink extends Vue {
  // side to show link label from icon circle, 'left' or 'right'
  @Prop({default: 'right'})
  public textSide : string;

  // boolean param that defines wether label is rendered on mount or not
  @Prop({default: true})
  public init_hideText: boolean;

  // x position in % of component at render from left side if turned right, from right if turned left
  @Prop({default: 0})
  public defaultX: number;

  // y position in px of component at render from top
  @Prop({default: 0})
  public defaultY: number;

  // defines wether link is moving or not
  @Prop({default: true})
  public animationMovement: boolean;

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


  // movement animation duration  
  private movementAnimDuration = 10000;
  // movement animation intensity
  private movementIntensity = 8;

  // first animation timestamps
  private animationStartTime? : number;

  // html element of the component
  private contentEl? : HTMLElement;

  // label css class defining wether label is visible or not
  private labelVisibility = "hide";

  // current movement animation direction
  private moveDir = -1;

  mounted() : void {
    this.init();

    setTimeout(() => {
      this.labelVisibility = "show";
      // starts movement after appearance
      setTimeout(() => {
        this.startAnimations();
      }, this.birthDelay * 2);
    }, this.birthDelay);
  }

  /**
   * @desc inits component element position
   */
  private init() : void {
    this.contentEl = (this.$refs.linkContent as HTMLElement);
    this.contentEl.style.top = this.defaultY + 'px';
    this.initXPos();
  }

  /**
   * @desc updates composant positioning, wether if text is placed on left or right side
   */
  private initXPos() : void {
    if(this.textSide === 'left') {
      this.contentEl.style.right = this.defaultX + '%';
    }
    else {
      this.contentEl.style.left = this.defaultX + '%';
    }
  }

  /**
   * @desc starts link movement animation 
   */
  private startAnimations() : void {
    window.requestAnimationFrame((timestamp : number) => {this.movementAnimation(timestamp)});
  }

  /**
   * @desc updates movement animation
   * @param timestamp animation timestamps
   */
  private movementAnimation(timestamp : number) : void {
    if (this.animationStartTime === undefined) {
      this.animationStartTime = timestamp;
    }
    if(!this.contentEl) return;

    // y axis periodic movement
    const newY = this.movementIntensity * 3 * this.moveDir;
    this.moveDir *= -1;
    this.contentEl.style.transform = `translateY(${newY}px)`;

    setTimeout(() => {
      window.requestAnimationFrame((timestamp : number) => {this.movementAnimation(timestamp)});
    }, this.movementAnimDuration);
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
  private download(dataUrl : string, filename : string) : void {
    const url = dataUrl;

    axios
      .get(url)
      .then((response) => {
        let urlCreator = window.URL || window.webkitURL;
        let blobData = new Blob([new Uint8Array(response.data.data)]);
        let imageUrl = urlCreator.createObjectURL(blobData);
        const link = document.createElement("a");
        link.href = imageUrl;
        console.log(response.data);
        link.download = filename;
        link.click();
      })
      .catch(error => console.log(error))
  }
}