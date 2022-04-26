import { Route } from "vue-router";
import router from ".";

/**
 * @desc class containing static util methods about navigation
 */
export default class NavigationUtils {

  // available languages
  static languages : Array<string> = ['fr', 'en-US', 'en-UK'];

  /**
   * @desc insert language before the given path to create an url
   * @param path 
   * @returns the path containing the language
   */
  static getPathWithLanguage (path :string) : string {
    const currentLanguageEndIndex = location.pathname.indexOf('/', 1);
    return location.pathname.substring(0, currentLanguageEndIndex) + path;
  }

  /**
   * @desc returns language if there's one contained in the current url 
   * @returns 
   */
  static getUrlLanguage() : string{
    const currentLanguageEndIndex = location.pathname.indexOf('/', 1);
    const language = location.pathname.substring(0, currentLanguageEndIndex).replace('/', "");
    // if it's one of available languages
    if(this.languages.findIndex(x => x === language) > -1) return language;
    return '';
  }

  /**
   * @desc returns navigator official language, if it's available
   */
  static getNavigatorLanguage() : string {
    const foundLanguage = this.languages.find(x => navigator.language.indexOf(x) > -1);
    if(foundLanguage !== undefined) return foundLanguage;
    return '';
  }

}