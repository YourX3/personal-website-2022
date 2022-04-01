import { Component, Prop, Vue } from "vue-property-decorator";

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
    window.open(this.url, '_blank').focus();
  }
}