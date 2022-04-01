<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="700px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn :class="'send-email-button ' + (mobile ? 'mobile' : '')" text
          v-bind="attrs"
          v-on="on"
        >
          <v-icon class="send-email-icon">mdi-email-send-outline</v-icon>
          {{ languageData.title }}
        </v-btn>
      </template>
      <v-card class="send-mail-card">
        <v-card-title>
          <span class="card-title">{{ languageData.title }}</span>
        </v-card-title>
        <v-card-text class="card-text-box">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  class="field"
                  :label="languageData.name + '*'"
                  required
                  rounded
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  :label="languageData.email + '*'"
                  required
                  class="field"
                  type="email"
                  rounded
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  :label="languageData.subject + '*'"
                  required
                  class="field"
                  hide-details
                  rounded
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  :label="languageData.message + '*'"
                  required
                  class="text-area"
                  rounded
                  hide-details
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small class="tertiary--text">*{{ languageData.mandatoryText }}</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
          <v-btn
            color="tertiary"
            @click="dialog = false"
            text
            class="send-button"
          >
            <v-icon left>mdi-email-send-outline</v-icon>
            {{ languageData.send }}
          </v-btn>
          <v-btn
            color="tertiary"
            text
            @click="dialog = false"
          >
            <v-icon left>mdi-close</v-icon>
            {{ languageData.cancel }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script src="./YSendMailDialog.component.ts" lang="ts">

</script>

<style scoped lang="scss" src="./YSendMailDialog.component.scss">
  
</style>

<style lang="scss">

  .v-input__slot {
    background-color: #18304a !important;
    //border-radius: 10px !important;
    color: var(--v-secondary-lighten2) !important;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
    font-size: 0.9em;
  }

  .v-application--is-ltr .v-text-field .v-label {
    color: var(--v-secondary-lighten2) !important;
  }

  .v-text-field .v-label--active {
    transform: translateY(-30px) scale(0.75) !important;
  }

  .v-input input, .v-input textarea {
    color: var(--v-secondary-lighten3) !important;
    caret-color: var(--v-secondary-lighten1) !important;
  }
  
</style>
