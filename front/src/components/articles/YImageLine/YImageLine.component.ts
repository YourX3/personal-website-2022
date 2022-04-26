import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import axios from 'axios';
import * as UrlConsts from '@/classes/UrlConsts';
import YImage from '../YImage/YImage.component.vue';


/**
 * @desc component containing a list of images
 */
@Component({
  components: {
    YImage
  },
})
export default class YImageLine extends Vue {
  
  @Prop({default: []})
  imageSources? : string | undefined;

  @Prop({default: 0})
  articleId? : string | undefined;

  /**
   * @desc the root element of the parent
   */
  @Prop()
  root? : Vue | undefined;

  openCarousel(imageIndex : number) : void {
    if(!this.root) this.root = this.$root;
    this.root.$emit("open-image-carousel", this.imageSources, this.articleId, imageIndex);
  }
}