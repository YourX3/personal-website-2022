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
  textSide : string;

  // boolean param that defines wether label is rendered on mount or not
  @Prop({default: true})
  init_hideText: boolean;

  // x position of component at render
  @Prop({default: 0})
  defaultX: number;

  // y position of component at render
  @Prop({default: 0})
  defaultY: number;

  // defines wether link is moving or not
  @Prop({default: true})
  animationMovement: boolean;

  // defines delay before component starts self-animations
  @Prop({default: 200})
  birthDelay: number;

  // url on click
  @Prop({default: ''})
  url: string;

  // movement animation duration  
  movementAnimDuration = 10000;
  // movement animation intensity
  movementIntensity = 8;

  // first animation timestamps
  animationStartTime? : number;

  // html element of the component
  contentEl? : HTMLElement;

  // label css class defining wether label is visible or not
  labelVisibility = "hide";

  mounted() : void {
    this.init();

    setTimeout(() => {
      this.labelVisibility = "show";
      this.startAnimations();
    }, this.birthDelay);
  }

  /**
   * @desc inits component element position
   */
  private init() : void {
    this.contentEl = (this.$refs.linkContent as HTMLElement);
    this.contentEl.style.top = this.defaultY + 'px';
    this.contentEl.style.left = this.defaultX + 'px';
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

    const elapsed = timestamp - this.animationStartTime;
    // y axis periodic movement
    const dy = Math.sin((elapsed / this.movementAnimDuration) * 6.283) * this.movementIntensity;
    this.contentEl.style.transform = `translateY(${dy}px)`;

    window.requestAnimationFrame((timestamp : number) => {this.movementAnimation(timestamp)});
  }

  /**
   * @desc opens new tab with given url
   */
  private linkClick() : void {
    window.open(this.url, '_blank').focus();
  }
}