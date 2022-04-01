<template>
  <div class="view-content">

    <section class="contacts-section">

      <div class="links-box" v-if="$mq !== 'mobile' && $mq !== 'tablet'">
        <YAnimatedLink :defaultX="15" :defaultY="50" :animationMovement="true" :birthDelay="300"
         :url="'https://github.com/YourX3'">
          <template v-slot:title>
            {{ languageData.github }}
          </template>
          <template v-slot:icon>
            mdi-github
          </template>
        </YAnimatedLink>

        <YAnimatedLink :defaultX="15" :defaultY="175" :animationMovement="true" :birthDelay="600" textSide="left"
           :url="'https://www.linkedin.com/in/youri-menubarbe-b68b51234/'">
          <template v-slot:title>
            {{ languageData.linkedin }}
          </template>
          <template v-slot:icon>
            mdi-linkedin
          </template>
        </YAnimatedLink>

        <YAnimatedLink :defaultX="25" :defaultY="300" :animationMovement="true" :birthDelay="900"
           :url="'https://github.com/YourX3'">
          <template v-slot:title>
            {{ languageData.resume }}
          </template>
          <template v-slot:icon>
            mdi-file-account
          </template>
        </YAnimatedLink>
      </div>
      

      <div class="mobile-links-box" v-if="$mq === 'mobile' || $mq === 'tablet'">
        <h2 class="contacts-title">Contacts</h2>

        <YMobileContactLink :birthDelay="300" :url="'https://github.com/YourX3'">
          <template v-slot:title>
            {{ languageData.github }}
          </template>
          <template v-slot:icon>
            mdi-github
          </template>
        </YMobileContactLink>

        <YMobileContactLink :birthDelay="600" :url="'https://www.linkedin.com/in/youri-menubarbe-b68b51234/'">
          <template v-slot:title>
            {{ languageData.linkedin }}
          </template>
          <template v-slot:icon>
            mdi-linkedin
          </template>
        </YMobileContactLink>

        <YMobileContactLink :birthDelay="900" :url="'https://github.com/YourX3'">
          <template v-slot:title>
            {{ languageData.resume }}
          </template>
          <template v-slot:icon>
            mdi-file-account
          </template>
        </YMobileContactLink>
      </div>

      <div :class="'send-email-box ' + (($mq === 'mobile' || $mq === 'tablet') ? 'mobile' : '')" >
        <YSendMailDialog :mobile="($mq === 'mobile' || $mq === 'tablet')" />
      </div>
      
    </section>
    
  </div>
</template>

<script src="./ContactsView.ts" lang="ts">

</script>

<style scoped lang="scss" src="./ContactsView.scss">
  
</style>
