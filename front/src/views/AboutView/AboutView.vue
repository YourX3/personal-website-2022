<template>
  <div class="view-content">

    <section class="about-section">

      <div>
        <div class="self-photo-box" v-if="$mq !== 'mobile' && $mq !== 'tablet'" >
          <img class="self-photo" src="@/assets/images/official_photo.jpg" />
        </div>

        <div class="about-title">
          {{ languageData.title }}
        </div>

        <p class="about-text">
          {{ languageData.text1 }} <span class="spe-color">{{ languageData.speColorText1 }}</span>{{ languageData.text2 }}
        </p>

        <p class="about-text">
          {{ languageData.text3 }}
        </p>

        <p class="about-text">
          {{ languageData.text4 }}
        </p>

        <p class="about-text">
          {{ languageData.text5 }}
          <ul>
            <li>{{ languageData.text6 }}</li>
            <li>{{ languageData.text7 }}</li>
          </ul>
        </p>

        <div class="self-photo-box-mobile" v-if="$mq === 'mobile' || $mq === 'tablet'">
          <img class="self-photo-mobile" src="@/assets/images/official_photo.jpg" />
        </div>
      </div>

    </section>
   

  </div>
</template>

<script src="./AboutView.ts" lang="ts">

</script>

<style scoped lang="scss" src="./AboutView.scss">
  
</style>
