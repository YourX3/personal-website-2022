import { Component, Prop, Vue } from 'vue-property-decorator';
import YImage from '../YImage/YImage.component.vue';


  /**
   * @desc component able to display an image list in full screen
   */
  @Component({
    components: {
      YImage,
    },
  })
  export default class YImageCarousel extends Vue {
    boxWidth = "72rem";
    visible = false;

    /**
     * @desc images sources
     */
    imageSources : Array<string> = [];
    articleId : string = "";

    /**
     * @desc currently displayed image index
     */
    imgIndex = 0;

    loading = false;

    mounted() : void {
      this.$root.$on("carousel-img-loaded", (imgEl : HTMLImageElement) => {
        this.loading = false;
        this.updateView(imgEl);
      });

      this.$root.$on("open-image-carousel", (imageSources : Array<string>, articleId : string, imgIndex : number) => {
        this.show(imageSources, articleId, imgIndex);
      });
    }

    /**
     * @desc opens the carousel dialog box
     * @param imageSources image sources to display
     * @param articleId the article id associated to the images
     * @param initialImg the index of the first image to display
     */
    show(imageSources: Array<string>, articleId : string, initialImg: number) : void {
      this.visible = true;
      this.$vuetify.theme.dark = false;

      if(this.arraysEqual(this.imageSources, imageSources) && this.imgIndex === initialImg && this.articleId === articleId) {
        this.loading = false;
      }
      else{
        this.loading = true;
        this.imageSources = imageSources;
        this.imgIndex = initialImg;
        this.articleId = articleId;
      }
      this.init();
    }

    /**
     * @desc checks if the two given arrays are containing the same elements
     */
    private arraysEqual(a : Array<any>, b : Array<any>) {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length !== b.length) return false;

      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }

    /**
     * @desc init event listening
     */
    init() : void {
      // click en dehors de la boite de dialogue
      const backgroundDialog = this.$refs.container as HTMLElement;
      if(!backgroundDialog) return;
      backgroundDialog.parentNode?.addEventListener("click", (event: Event) => {
        if((event.target as Element).querySelector(".background-dialog")) {
          this.close();
        }
      });
    }

    /**
     * @desc loads the next image
     */
    next() : void  {
      this.editIndex(1);
    }

    /**
     * @desc loads the previous image
     */
    previous() : void  {
      this.editIndex(-1);
    }

    /**
     * @desc edit the index of the displayed image
     * @param nbToAdd number to add to the index
     */
    editIndex(nbToAdd : number) : void {
      if(this.imageSources.length < 2) return;

      let newIndex = this.imgIndex + nbToAdd;
      if(newIndex >= this.imageSources.length) {
        newIndex = newIndex % this.imageSources.length;
      }
      else if(newIndex < 0) {
        newIndex = this.imageSources.length + (newIndex%this.imageSources.length);
      }
      this.imgIndex = newIndex;
      this.loading = true;
    }

    /**
     * @desc updates the dimensions of the displayed image
     * @param imgEl the image element of the carousel
     */
    updateView(imgEl : HTMLImageElement) : void {
      if(!imgEl) return;

      // the dialog box container
      const container = this.$refs.container as HTMLElement;
      if(!container) return;

      // the image element box
      const carouselImgBox = this.$refs.carouselImgBox as HTMLElement;

      // maximize the displayed image dimensions in the window
      container.style.width = "100%";
      carouselImgBox.style.width = "100%";
      imgEl.style.width = "100%";

      // get the real displayed image dimensions
      const displayedW = imgEl.clientWidth;
      const imgW = imgEl.naturalWidth;
      const displayedH = imgEl.clientHeight;
      const imgH = imgEl.naturalHeight;

      // dimension ratios
      const ratioW = imgW / displayedW;
      const ratioH = imgH / displayedH;

      // if the image has been more shrink in height than in width
      if(ratioH > ratioW) {
        // adapts the image width to its height
        imgEl.style.width = (imgW / ratioH).toString() + "px";
        carouselImgBox.style.width = "unset";
      }
      else{
        imgEl.style.width = "100%";
      }
      container.style.width = imgEl.clientWidth + "px";
    }

    /**
     * @desc shut the dialog box
     */
    close() : void{
      this.visible = false;
    }
  }