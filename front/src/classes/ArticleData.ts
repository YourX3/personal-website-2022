
/**
 * @desc class that contains all data used to define an article
 */
export default class ArticleData {
  constructor(data? : any) {
    if(data && data.articleId)
      this.articleId = data.articleId;
    if(data && data.title)
      this.title = data.title;
    if(data && data.sum)
      this.sum = data.sum;
    if(data && data.coverImgSrc)
      this.coverImgSrc = data.coverImgSrc;
    if(data && data.textContent)
      this.textContent = data.textContent;
    if(data && data.languages)
      this.languages = data.languages;
    if(data && data.type)
      this.type = data.type;
    if(data && data.updatedAt)
      this.updatedAt = new Date(data.updatedAt);
    if(data && data.createdAt)
      this.createdAt = new Date(data.createdAt);
  }

  public articleId : string;
  public title : string;
  public sum : string;
  public coverImgSrc : string;
  public textContent : string;
  public languages : string[];
  public type : string;
  public updatedAt : Date;
  public createdAt : Date;
}