import { Controller, Get, Inject, HttpStatus, HttpCode, Param, Header } from '@nestjs/common';
import { ArticlesApiService } from './articles-api.service';

@Controller('/articles')
export class ArticlesApiController 
{
  constructor(
    @Inject(ArticlesApiService)
    private articlesApiService : ArticlesApiService
  ) {}


  @Get('/project/:articleId')
  @HttpCode(HttpStatus.OK)
  async getProjectArticle(@Param('articleId') articleId : string) {
    const articleData = await this.articlesApiService.loadProjectArticle(articleId);
    if(articleData.error) {
      throw articleData.error;
    }
    return articleData;
  }

  @Get('/projects/all-sums/:lang')
  @HttpCode(HttpStatus.OK)
  async getAllProjectsSummaries(@Param('lang') lang : string) {
    const articlesData = await this.articlesApiService.loadAllProjectsSummaries(lang);
    if(articlesData.error) {
      throw articlesData.error;
    }
    return articlesData;
  }

  @Get('/projects/last-sums/:count/:lang')
  @HttpCode(HttpStatus.OK)
  async getLastProjectsSummaries(@Param('count') count : string, @Param('lang') lang : string) {
    const articlesData = await this.articlesApiService.loadLastProjectsSummaries(parseInt(count), lang);
    if(articlesData.error) {
      throw articlesData.error;
    }
    return articlesData;
  }
}


