<template>
  <div class="view-content">

    <section class="contacts-section">

      <div class="links-box">
        <YAnimatedLink :defaultX="50" :defaultY="50" :animationMovement="true" :birthDelay="500"
         :url="'https://github.com/YourX3'">
          <template v-slot:title>
            Github
          </template>
          <template v-slot:icon>
            mdi-github
          </template>
        </YAnimatedLink>

        <YAnimatedLink :defaultX="650" :defaultY="175" :animationMovement="true" :birthDelay="1100" textSide="left"
           :url="'https://github.com/YourX3'">
          <template v-slot:title>
            Linkedin
          </template>
          <template v-slot:icon>
            mdi-linkedin
          </template>
        </YAnimatedLink>

        <YAnimatedLink :defaultX="200" :defaultY="300" :animationMovement="true" :birthDelay="1800"
           :url="'https://github.com/YourX3'">
          <template v-slot:title>
            Curriculum Vitae
          </template>
          <template v-slot:icon>
            mdi-file-account
          </template>
        </YAnimatedLink>
        </div>
      

      <div class="send-email-box">
        <v-btn class="send-email-button" text>
          <v-icon class="send-email-icon">mdi-email-send-outline</v-icon>
          Envoyer un mail
        </v-btn>
      </div>
      
    </section>
    
  </div>
</template>

<script src="./ContactsView.ts" lang="ts">

</script>

<style scoped lang="scss" src="./ContactsView.scss">
  
</style>
