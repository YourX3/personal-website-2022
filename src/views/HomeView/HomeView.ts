import YHomeNewsScroller from "@/components/home/YHomeNewsSlider/YHomeNewsScroller.component.vue";
import YHomeTitle from "@/components/home/YHomeTitle/YHomeTitle.component.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc view containing main website informations
 */
@Component({
  components: {
    YHomeTitle,
    YHomeNewsScroller
  }
})
export default class HomeView extends Vue {

}