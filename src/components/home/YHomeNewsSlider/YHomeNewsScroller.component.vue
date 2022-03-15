<template>
  <div class="scroller-container hide" ref="scrollerContainer">

    <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
      <div class="scroller-content">
        <div class="chips">
          Chips
        </div>
        <div class="chips">
          Chips
        </div>
        <div class="chips">
          Chips
        </div>
        <div class="chips">
          Chips
        </div>
        <div class="chips">
          Chips
        </div>
        <div class="chips">
          Chips
        </div>

                <div class="chips">
          Chips
        </div>        <div class="chips">
          Chips
        </div>        <div class="chips">
          Chips
        </div>
      </div>
    </vue-scrollbar>

  </div>
</template>

<script src="./YHomeNewsScroller.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YHomeNewsScroller.component.scss">
  
</style>

<style lang="scss">
  .vue-scrollbar__scrollbar-vertical {
    right: unset !important;
    left: 0 !important;
    border-radius: 20px;
    width: 6px !important;
  }

  .scrollbar {
    width: 6px !important;
    border-radius: 20px;
    background: #899fddcc !important;
    border: inset solid #5a70b1a2 2px; 

    //max-height: 80px !important;
  }
</style>
