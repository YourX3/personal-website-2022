import { Controller, Delete, Get, UseGuards, Request, Post, Body, Inject, UsePipes, ValidationPipe, HttpException, HttpStatus, HttpCode, Param, UseInterceptors, UploadedFile, Header } from '@nestjs/common';
import { ImagesApiService } from './images-api.service';

@Controller('/images')
export class ImagesApiController 
{
  constructor(
    @Inject(ImagesApiService)
    private imageApiService : ImagesApiService
  ) {}


  /**
   * @desc load stored image 
   * @param fileName image file name
   * @param articleId article with which image is associated
   * @returns buffer image
   */
  @Get('/:fileName/:articleId')
  @HttpCode(HttpStatus.OK)
  @Header('Content-Type', 'image/jpeg')
  @Header('Content-Disposition', 'attachment; filename=imgTransfer.jpeg')
  async getImg(@Param('fileName') fileName : string, @Param('articleId') articleId : string) {

    const imageData = await this.imageApiService.loadImg(fileName, articleId);
    if(imageData.error) {
      throw imageData.error;
    }
    return imageData;
  }
}


