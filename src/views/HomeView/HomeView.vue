<template>
  <div class="view-content">

    <section class="home-section" v-if="$mq !== 'mobile' && $mq !== 'tablet'">

      <div class="splitted-section">
        <div class="section-left">
          <YHomeTitle />
        </div>

        <div class="section-right">
          <YHomeNewsScroller/>
        </div>
      </div>
      
    </section>

    <YHomeTitleMobile v-if="$mq === 'mobile' || $mq === 'tablet'" />
    
  </div>
</template>

<script src="./HomeView.ts" lang="ts">

</script>

<style scoped lang="scss" src="./HomeView.scss">
  
</style>
