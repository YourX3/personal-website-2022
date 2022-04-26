import { Component, Prop, Vue } from "vue-property-decorator";

/**  
 * @desc background star component, controlling animation behaviour
*/
@Component({})
export default class YBackgroundStar extends Vue {
  // window section x position, from 0 to 2
  @Prop({default: 0})
  public sectionX: number;

  // window section y position, from 0 to 2
  @Prop({default: 0})
  public sectionY: number;

  // star birth animation duration
  private birthDuration : number;
  private lightIntensity : number;

  // birth animation start timestamp
  private birthStart : number;
  private birthDone = false;

  // html element of the star
  private starEl? : HTMLElement;

  // initial star position
  private xStartPos : number;
  private yStartPos : number;
  private size : number;

  private unitRef = 'vw';

  // window center
  private centerX : number;
  private centerY : number;

  // duration for the star to complete a tour around window center 
  private cirlceRevolutionDuration : number;

  // force applied to stars when mouse around
  private deportationForce = 0;
  private deportationDirX = 0;
  private deportationDirY = 0;

  private mounted() : void {
    this.init();
  }

  /**
   * @desc init star position, animation, movements, etc...
   */
  private init() : void {
    this.updateStarTransform();

    this.birthDuration = Math.random() * 4000 + 1200; // in ms
    this.lightIntensity = Math.random() * 0.7 + 0.1;
    this.cirlceRevolutionDuration = Math.random() * 10 * 60 * 1000 + 5 * 60 * 1000; // ~= 7min 30

    // start animations
    this.birthAnimation();
    window.requestAnimationFrame((timestamp : number) => {this.updateMovement(timestamp)});
    window.addEventListener('mousemove', (event: MouseEvent) => this.mouseMove(event));

    window.addEventListener('resize', () => {
      this.updateStarTransform();
    });
  }


  private lastWindowX = -1;
  private lastWindowY = -1;

  /**
   * @desc updates star position, size, and rotation center, considering window size
   */
  private updateStarTransform() : void {

    // checks if window width / height ratio is sufficient to update star position / size
    const dDimension = Math.abs((window.innerWidth / window.innerHeight) - (this.lastWindowX / this.lastWindowY));
    if(this.lastWindowX === -1 || dDimension > 0.12) {
      this.lastWindowX = window.innerWidth;
      this.lastWindowY = window.innerHeight;
    }
    else return;

    // increases a bit star generation area, to avoid blank spaces when background rotates
    const extraWidth = 15/3;
    // set largest dimension of the window to define wether it should use vw or vh in order to scale
    let windowLargestDimension = Math.max(window.innerWidth, window.innerHeight);
    if( window.innerHeight > window.innerWidth) this.unitRef = 'vh';
    else this.unitRef = 'vw';

    // defines star initial position in precents
    this.xStartPos = (Math.random() + this.sectionX) *(100/3) - extraWidth/2; 
    this.yStartPos = (Math.random() + this.sectionY) *(100/3) - extraWidth/2; 

    // set star size
    // average is one 1% of largest dimension multiplied by rectangle ratio
    this.size = ((Math.random() * 10 + 6)/11 * (Math.sqrt(window.innerWidth * window.innerHeight)) / windowLargestDimension);

    // aplies all defined parameters to the star element
    if(!this.starEl)
      this.starEl = (this.$refs.star as HTMLElement);
    this.starEl.style.left = this.xStartPos + this.unitRef;
    this.starEl.style.top = this.yStartPos + this.unitRef;
    this.starEl.style.width = this.size + this.unitRef;
    this.starEl.style.height = this.size + this.unitRef;

    // set window center in vw or vh
    this.centerX = window.innerWidth / windowLargestDimension /2 *100;
    this.centerY = window.innerHeight / windowLargestDimension /2 *100;
  }

  /**
   * @desc init birth animation
   */
  private birthAnimation() : void {
    window.requestAnimationFrame((timestamp : number) => {this.updateBirthAnimation(timestamp)});
  }

  /**
   * @desc update birth animation
   */
  private updateBirthAnimation(timestamp : number) : void {
    if (this.birthStart === undefined) {
      this.birthStart = timestamp;
    }
    
    const elapsed = timestamp - this.birthStart;
    if (elapsed < this.birthDuration) {
      const intensity = Math.min(elapsed / this.birthDuration, 1) * this.lightIntensity;
      if(this.starEl){
        // set star color
        this.starEl.style.backgroundImage  = `-moz-radial-gradient(circle, rgba(11,228,196,${intensity}) 30%, rgba(18,38,58, 0) 70%)`;
        this.starEl.style.backgroundImage  = `-webkit-radial-gradient(circle, rgba(11,228,196,${intensity}) 30%, rgba(18,38,58, 0) 70%)`;
        this.starEl.style.backgroundImage  = `radial-gradient(circle, rgba(11,228,196,${intensity}) 30%, rgba(18,38,58, 0) 70%)`;   
      }

      !this.birthDone && window.requestAnimationFrame((timestamp) => {this.updateBirthAnimation(timestamp)});
    }
    else {
      this.birthDone = true;
    }
  }


  /**
   * @desc update star movement
   */
  private updateMovement(timestamp : number) : void {
    if (this.birthStart === undefined) {
      this.birthStart = timestamp;
    }

    const elapsed = timestamp - this.birthStart;

    // update revolution around window center
    const movement = ((this.cirlceRevolutionDuration - elapsed)/this.cirlceRevolutionDuration) * 360; 
    const newPos = this.rotateAroundCenter(this.centerX, this.centerY, this.xStartPos, this.yStartPos, movement);

    // if mouse is near
    if(this.deportationForce > 0) {
      newPos[0] += this.deportationDirX * this.deportationForce * 0.2;
      newPos[1] += this.deportationDirY * this.deportationForce * 0.2;
    }

    this.starEl.style.left = newPos[0] + this.unitRef;
    this.starEl.style.top = newPos[1] + this.unitRef;

    window.requestAnimationFrame((timestamp) => {this.updateMovement(timestamp)});
  }

  /**
   * @desc update star deportation due to mouse
   * @param event mouse event
   */
  private mouseMove(event : MouseEvent){
    if((this as any).$mq === 'mobile' || (this as any).$mq === 'tablet') {
      this.deportationForce = 0;
    }
    else {
      const mousePosX = event.clientX;
      const mousePosY = event.clientY;
  
      // star bounding rect
      const rect = this.starEl.getBoundingClientRect();
      const posX = rect.left + rect.width/2;
      const posY = rect.top + rect.height/2;
  
      // distance between mouse and star
      const distance = this.distance(mousePosX, mousePosY, posX, posY);
      if(distance < 300) {
        // deportation decrease when distance increase
        this.deportationForce = Math.sqrt((1/distance) * 300*300) -17;
        this.deportationDirX = (posX - mousePosX) / distance;
        this.deportationDirY = (posY - mousePosY) / distance;
      }
      else {
        this.deportationForce = 0;
      }
    }
  }

  /**
   * @desc compute distance between to points
   * @param x1 x coord of first position
   * @param y1 y coord of first position
   * @param x2 x coord of second position
   * @param y2 y coord of second position
   */
  private distance(x1 : number, y1 : number, x2 : number, y2 : number) : number {
    return Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2));
  }

  /**
   * @desc rotate a given point around a given center through a given angle
   * @param cx center x coord
   * @param cy center y coord
   * @param x point x coord
   * @param y point y coord
   * @param angle angle to rotate through
   * @returns an array of two numbers containing new coords : [x, y]
   */
  private rotateAroundCenter(cx, cy, x, y, angle) : Array<number> {
    let radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
  }

}