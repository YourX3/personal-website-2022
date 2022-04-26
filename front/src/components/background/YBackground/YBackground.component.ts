import { Component, Prop, Vue } from "vue-property-decorator";
import YBackgroundStar from "../YBackgroundStar/YBackgroundStar.component.vue";

/**
 * @desc component that contains all background rendering features 
 */
@Component({
  components: {
    YBackgroundStar,
  }
})
export default class YBackground extends Vue {
  
  /**
   * @desc count of stars in the background
   */
  starCount = 0;
  

  mounted() : void {
    this.generateStars();
  }

  /**
   * @desc starts star generation
   */
  generateStars() : void {
    // factor associated to window ratio
    const windowFactor = Math.sqrt(Math.sqrt((window.innerWidth * window.innerHeight) / (1200*720)));
    // defines displayed star count 
    this.starCount = (Math.round(Math.random() * 40) + 135) * windowFactor;
  }
}