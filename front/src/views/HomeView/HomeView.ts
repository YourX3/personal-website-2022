import YHomeNewsScroller from "@/components/home/YHomeNewsScroller/YHomeNewsScroller.component.vue";
import YHomeTitle from "@/components/home/YHomeTitle/YHomeTitle.component.vue";
import YHomeTitleMobile from "@/components/mobile-components/YHomeTitleMobile/YHomeTitleMobile.component.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

/**
 * @desc view containing main website informations
 */
@Component({
  components: {
    YHomeTitle,
    YHomeNewsScroller,
    YHomeTitleMobile
  }
})
export default class HomeView extends Vue {

}