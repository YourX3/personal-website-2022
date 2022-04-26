<template>
    <div class="title-content hide" ref="titleContent">
      <div class="title-name">
        Youri Menubarbe
        <img src="@/assets/logo.svg" class="title-logo" />
      </div>

      <div class="title-activity">
        {{ languageData.activity }}
      </div>

      <div class="title-job">
        {{ languageData.job }}
      </div>

      <div class="details">
        {{ languageData.details }}
      </div>
    </div>
</template>

<script src="./YHomeTitle.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YHomeTitle.component.scss">
  
</style>
