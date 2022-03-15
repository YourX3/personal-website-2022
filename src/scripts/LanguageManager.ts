import { LanguageData } from "@/classes/LanguageData";

const textData_fr = require('@/assets/text-data/text-data.fr.json');
const textData_en = require('@/assets/text-data/text-data.en.json');

/**
 * @desc class containing static methods / properties allowing language switching
 */
export default class LanguageManager {
  public static languageData : LanguageData = new LanguageData();

  public static currentLanguage : string = "";

  /**
   * @desc load the given language if it's available
   * @param language
   */
  public static loadLanguage(language : string) : void {
    if(this.currentLanguage !== language) {
      this.currentLanguage = language;
      switch(language) {
        case 'fr': 
          this.languageData = textData_fr;
          break;

        case 'en': 
          this.languageData = textData_en;
          break;

        default: 
          this.languageData = textData_fr;
          this.currentLanguage = 'fr';
          break;
      }
    }
  }
}