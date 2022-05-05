import { LanguageData } from "@/classes/LanguageData";

const textData_fr = require('@/assets/text-data/text-data.fr.json');
const textData_enUS = require('@/assets/text-data/text-data.en-US.json');
const textData_enUK = require('@/assets/text-data/text-data.en-UK.json');

/**
 * @desc class containing static methods / properties allowing language switching
 */
export default class LanguageManager {
  public static languageData : LanguageData = new LanguageData();

  public static currentLanguage : string = "";

  // available languages
  static languages : Array<string> = ['fr', 'en-US', 'en-UK'];

  
  /**
   * @desc returns navigator official language, if it's available
   */
   static getNavigatorLanguage() : string {
    const foundLanguage = this.languages.find(x => navigator.language.indexOf(x) > -1);
    if(foundLanguage !== undefined) return foundLanguage;
    return '';
  }

  /**
   * @desc load the given language if it's available
   * @param language
   */
  public static loadLanguage(language : string) : void {
    if(language === 'en') {
      const navigatorLanguage = this.getNavigatorLanguage();

      // loads navigator language if it's available, else, loads french data
      const defaultLanguage = navigatorLanguage.length && (navigatorLanguage.indexOf('en') > -1) ? navigatorLanguage : 'en-US';
      language = defaultLanguage;
    }

    if(this.currentLanguage !== language) {

      this.currentLanguage = language;
      switch(language) {
        case 'fr': 
          this.languageData = textData_fr;
          break;
          
        case 'en-US': 
          this.languageData = textData_enUS;
          break;
        
        case 'en-UK': 
          this.languageData = textData_enUK;
          break;

        default: 
          this.languageData = textData_fr;
          this.currentLanguage = 'fr';
          break;
      }
    }
  }
}