import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Utils } from 'src/classes/Utils';
import { Consts } from 'src/Consts';
import { FileManagerService } from 'src/services/file-manager.service';

@Injectable()
export class ArticlesApiService {
  constructor(
    @Inject(FileManagerService)
    private fileManagerService : FileManagerService,
  )
  {}




  async loadProjectArticle(articleId : string) : Promise<any> {
    if(!this.fileManagerService.allProjects) {
      const path = Consts.projectsDir;
      await this.fileManagerService.loadAllProjects(path);
    }

    const project = this.fileManagerService.allProjects.find(x => x.articleId === articleId);
    if(!project) return Utils.createExceptionObj("project not found", HttpStatus.NOT_FOUND);
    
    return project;
  }
  
  async loadArticle(path : string, articleId : string) : Promise<any> {    
    try {
      const articleData = await this.fileManagerService.loadJSONfile(path);
      if(!articleData) return Utils.createExceptionObj("article not found", HttpStatus.NOT_FOUND);

      if(articleData.articleId !== articleId) return Utils.createExceptionObj("Article corrupted", HttpStatus.CONFLICT);
      return articleData;
    } 
    catch(err) {
      console.log(err);
      return Utils.createExceptionObj("article not found", HttpStatus.NOT_FOUND);
    }
  }


  async loadAllProjectsSummaries(lang : string) {
    if(!this.fileManagerService.allProjects) {
      const path = Consts.projectsDir;
      await this.fileManagerService.loadAllProjects(path);
    }

    let projects = [...this.fileManagerService.allProjects];

    if(!projects)
      return Utils.createExceptionObj("can't load projects", HttpStatus.INTERNAL_SERVER_ERROR);

    if(lang) projects = projects.filter(x => x.languages.includes(lang));

    return projects.map(x => {
      return {
        articleId : x.articleId,
        coverImgSrc : x.coverImgSrc,
        sum : x.sum,
        title : x.title,
        languages : x.languages,
        type: x.type,
        createdAt: x.createdAt,
        updatedAt : x.updatedAt
      };
    });
  }

  async loadLastProjectsSummaries(maxCount : number, lang : string) {
    if(!this.fileManagerService.allProjects) {
      const path = Consts.projectsDir;
      await this.fileManagerService.loadAllProjects(path);
    }

    let projects = [...this.fileManagerService.allProjects];

    if(projects) {   
      if(lang) projects = projects.filter(x => x.languages.includes(lang));
      
      projects = projects.sort((a, b) => 
        b.createdAt.getTime() - a.createdAt.getTime()
      );
      projects = projects.slice(0, maxCount);

      return projects.map(x => {
        return {
          articleId : x.articleId,
          coverImgSrc : x.coverImgSrc,
          sum : x.sum,
          title : x.title,
          languages : x.languages,
          type: x.type,
          createdAt: x.createdAt,
          updatedAt : x.updatedAt
        };
      });
    }
    return Utils.createExceptionObj("can't load projects", HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
