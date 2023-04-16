import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

/**
 * @desc component containing a list of images
 */
@Component({
  components: {

  },
})
export default class YVideo extends Vue {
  
  @Prop({default: []})
  src? : string | undefined;

  /**
   * @desc the root element of the parent
   */
  @Prop()
  root? : Vue | undefined;

  mounted() : void {
    if(!this.root) this.root = this.$root;
  }
}