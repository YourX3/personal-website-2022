import { Controller, Delete, Get, UseGuards, Request, Post, Body, Inject, UsePipes, ValidationPipe, HttpException, HttpStatus, HttpCode, Param, UseInterceptors, UploadedFile, Header } from '@nestjs/common';
import { ImagesApiService } from '../images-api/images-api.service';
import { ResumesApiService } from './resumes-api.service';

@Controller('/resumes')
export class ResumesApiController 
{
  constructor(
    @Inject(ResumesApiService)
    private resumesApiService : ResumesApiService,
    @Inject(ImagesApiService)
    private imageService : ImagesApiService
  ) {}


  /**
   * @desc load stored resume file 
   * @param lang file language
   * @returns buffer file
   */
  @Get('/:lang')
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'inline;filename=youri_menubarbe_resume.pdf')
  async getResume(@Param('lang') lang : string) {
    const fileData = await this.resumesApiService.loadResume(lang);
    if(fileData.error) {
      throw fileData.error;
    }
    return fileData;
  }


  /**
 * @desc load stored image 
 * @param fileName image file name
 * @param articleId article with which image is associated
 * @returns buffer image
 */
   @Get('/:fileName/:articleId')
   @HttpCode(HttpStatus.OK)
    @Header('Content-Type', 'application/pdf')
    @Header('Content-Disposition', 'inline;filename=youri_menubarbe_resume.pdf')
    async getImg(@Param('fileName') fileName : string, @Param('articleId') articleId : string) {
  
      const imageData = await this.imageService.loadImg('cover.jpg', 'article-2');
      if(imageData.error) {
        throw imageData.error;
      }
      return imageData;
    }
}


