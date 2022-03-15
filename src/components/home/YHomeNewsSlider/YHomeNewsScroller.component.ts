import { Component, Prop, Vue } from "vue-property-decorator";
import VueScrollbar from 'vue2-scrollbar';

import "vue2-scrollbar/dist/style/vue2-scrollbar.css";

/**
 * @desc scroller component, allowing visitors to watch latest content posted on
 */
@Component({
  components: {
    VueScrollbar
  }
})
export default class YHomeNewsScroller extends Vue {

  mounted() : void {
    this.birthAnim();
  }

  /**
   * @desc starts birth delayed animation 
   */
  private birthAnim() : void {
    setTimeout(() => {
      (this.$refs.scrollerContainer as HTMLElement).classList.remove("hide");
      (this.$refs.scrollerContainer as HTMLElement).classList.add("show");
    }, 200);
  }
}