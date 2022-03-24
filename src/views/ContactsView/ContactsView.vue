<template>
  <div class="view-content">

    <section class="contacts-section">

      <div class="links-box">
        <YAnimatedLink :defaultX="50" :defaultY="50" :animationMovement="true" :birthDelay="300"
         :url="'https://github.com/YourX3'">
          <template v-slot:title>
            {{ languageData.github }}
          </template>
          <template v-slot:icon>
            mdi-github
          </template>
        </YAnimatedLink>

        <YAnimatedLink :defaultX="650" :defaultY="175" :animationMovement="true" :birthDelay="600" textSide="left"
           :url="'https://www.linkedin.com/in/youri-menubarbe-b68b51234/'">
          <template v-slot:title>
            {{ languageData.linkedin }}
          </template>
          <template v-slot:icon>
            mdi-linkedin
          </template>
        </YAnimatedLink>

        <YAnimatedLink :defaultX="200" :defaultY="300" :animationMovement="true" :birthDelay="900"
           :url="'https://github.com/YourX3'">
          <template v-slot:title>
            {{ languageData.resume }}
          </template>
          <template v-slot:icon>
            mdi-file-account
          </template>
        </YAnimatedLink>
        </div>
      

      <div class="send-email-box">
        <YSendMailDialog />
      </div>
      
    </section>
    
  </div>
</template>

<script src="./ContactsView.ts" lang="ts">

</script>

<style scoped lang="scss" src="./ContactsView.scss">
  
</style>
