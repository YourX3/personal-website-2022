
/**
 * @desc data format for home view texts
 */
export class HomeLanguageData {
  public activity : string = "Étudiant en école d'ingénieur";
  public job : string = "Développeur Web / Jeu vidéo";
  public details : string = "Site web personnel 2022";
  public lastNews : string = "Dernières actualités";
}

/**
 * @desc data format for toolbar texts
 */
export class ToolbarLanguageData {
  public home : string = "Accueil";
  public about : string = "À propos";
  public projects : string = "Projets";
  public contacts : string = "Contacts";
}

/**
 * @desc data format for about view texts
 */
export class AboutLanguageData {
  public title : string = "";
  public text1 : string = '';
  public speColorText1 : string = "";
  public text2 : string = ``;
  public text3 : string = ``;
  public text4 : string = ``;
  public text5 : string = ``;
  public text6 : string = ``;
  public text7 : string = ``;
}

/**
 * @desc data format containing all texts that have to be translated considering the selected language
 */
export class LanguageData {
  public toolbarData: ToolbarLanguageData = new ToolbarLanguageData();

  public homeData: HomeLanguageData = new HomeLanguageData();
  public aboutData: AboutLanguageData = new AboutLanguageData();
}
