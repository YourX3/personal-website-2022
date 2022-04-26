<template>
  <v-dialog
    v-model="visible"
    :dark="false"
    :width="boxWidth"
    @click:outside="close()"
    content-class="carousel-dialog"
    ref="carouselDialog"
    eager
  >
    <div class="background-dialog" ref="container" >
      
      <div class="arrow-button" @click="previous()" v-if="imageSources && imageSources.length > 1">
        <div class="arrow-icon-box">
          <v-icon class="arrow-icon" x-large color="white" >mdi-chevron-left</v-icon>
        </div>
      </div>
      <div class="carousel-img-box"  ref="carouselImgBox">
        <YImage :imageSrc="imageSources[imgIndex]" 
          onloadEvent="carousel-img-loaded"
          childclass="carousel-img" 
          :articleId="articleId"
          ref="customImg"/> 
      </div>

      <div class="exit-button" @click="close()" color="white">
        <v-icon color="white" class="exit-icon" large>mdi-close</v-icon>
      </div>

      <div class="loading-bar" v-if="loading">
        <v-progress-circular indeterminate> </v-progress-circular>
      </div>

      <div class="arrow-button" @click="next()" v-if="imageSources && imageSources.length > 1">
        <div class="arrow-icon-box">
          <v-icon class="arrow-icon" x-large color="white" >mdi-chevron-right</v-icon>
        </div>
      </div>
    </div>

  </v-dialog>
</template>

<script src="./YImageCarousel.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YImageCarousel.component.scss">
  
</style>

<style>
  .carousel-dialog {
    overflow: hidden;
    box-shadow: none !important;
    justify-content: center;
    display: flex;
    border-radius: 25px;
  }

  .carousel-img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;

    -webkit-user-drag: none; 
    -khtml-user-drag: none; 
    -moz-user-drag: none; 
    -o-user-drag: none; 
  }
</style>