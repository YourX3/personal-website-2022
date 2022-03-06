import { Component, Prop, Vue } from "vue-property-decorator";

/**  
 * @desc background star component, controlling animation behaviour
*/
@Component({})
export default class YBackgroundStar extends Vue {

  // star birth animation duration
  birthDuration : number;
  lightIntensity : number;

  // birth animation start timestamp
  birthStart : number;
  birthDone = false;

  // html element of the star
  starEl? : HTMLElement;

  // initial star position
  xStartPos : number;
  yStartPos : number;
  size : number;

  // window center
  centerX : number;
  centerY : number;

  // duration for the star to complete a tour around window center 
  cirlceRevolutionDuration : number;

  // force applied to stars when mouse around
  deportationForce = 0;
  deportationDirX = 0;
  deportationDirY = 0;

  private mounted() : void {
    this.init();
  }

  /**
   * @desc init star position, animation, movements, etc...
   */
  private init() : void {
    // to create a real circle around center
    const windowLargestDimension = Math.max(window.screen.width, window.screen.height);
    this.xStartPos = Math.random() * windowLargestDimension; 
    this.yStartPos = Math.random() * windowLargestDimension; 
    this.size = Math.random() * 10 + 6;
    this.birthDuration = Math.random() * 4000 + 1200; // in ms
    this.lightIntensity = Math.random() * 0.7 + 0.1;
    this.cirlceRevolutionDuration = Math.random() * 10 * 60 * 1000 + 5 * 60 * 1000; // ~= 7min 30

    // window center
    this.centerX = window.screen.width /2;
    this.centerY = window.screen.height /2;

    // set all style properties
    this.starEl = (this.$refs.star as HTMLElement);
    this.starEl.style.left = this.xStartPos + 'px';
    this.starEl.style.top = this.yStartPos + 'px';
    this.starEl.style.width = this.size + 'px';
    this.starEl.style.height = this.size + 'px';

    // start animations
    this.birthAnimation();
    window.requestAnimationFrame((timestamp : number) => {this.updateMovement(timestamp)});
    window.addEventListener('mousemove', (event: MouseEvent) => this.mouseMove(event));
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
        this.starEl.style.backgroundImage  = `-moz-radial-gradient(circle, rgba(209,241,247,${intensity}) 30%, rgba(18,38,58, 0) 70%)`;
        this.starEl.style.backgroundImage  = `-webkit-radial-gradient(circle, rgba(209,241,247,${intensity}) 30%, rgba(18,38,58, 0) 70%)`;
        this.starEl.style.backgroundImage  = `radial-gradient(circle, rgba(209,241,247,${intensity}) 30%, rgba(18,38,58, 0) 70%)`;   
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
      newPos[0] += this.deportationDirX * this.deportationForce;
      newPos[1] += this.deportationDirY * this.deportationForce;
    }

    this.starEl.style.left = newPos[0] + 'px';
    this.starEl.style.top = newPos[1] + 'px';

    window.requestAnimationFrame((timestamp) => {this.updateMovement(timestamp)});
  }

  /**
   * @desc update star deportation due to mouse
   * @param event mouse event
   */
  private mouseMove(event : MouseEvent){
    const mousePosX = event.clientX;
    const mousePosY = event.clientY;

    const rect = this.starEl.getBoundingClientRect();
    const posX = rect.left + rect.width/2;
    const posY = rect.top + rect.height/2;

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