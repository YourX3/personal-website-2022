<template>
  <div class="content">
    
    <div class="star-box">
      <div v-for="index in 10" :key="index" >
        <YBackgroundStar v-for="index2 in (Math.round(starCount/9))" :key="index2" 
           :sectionX="(index-1) % 3" :sectionY="Math.floor((index-1) / 3)" />
      </div>
    </div>
    

  </div>
</template>

<script src="./YBackground.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YBackground.component.scss">
  
</style>
