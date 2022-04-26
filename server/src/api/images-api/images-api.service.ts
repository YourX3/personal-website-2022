import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Utils } from 'src/classes/Utils';
import { Consts } from 'src/Consts';
import { FileManagerService } from 'src/services/file-manager.service';

@Injectable()
export class ImagesApiService {
  constructor(
    @Inject(FileManagerService)
    private fileManagerService : FileManagerService,
  )
  {}

  /**
   * @desc load stored image 
   * @param fileName image file name
   * @param articleId article with which image is associated
   * @returns buffer image
   */
  async loadImg(fileName : string, articleId : string) : Promise<any> {
    const path = Consts.imgDir + '/' + articleId + '/' + fileName;
    
    try {
      const imgData = await this.fileManagerService.readFileAsync(path);
      if(!imgData) return Utils.createExceptionObj("image not found", HttpStatus.NOT_FOUND);

      return imgData;
    } 
    catch(err) {
      console.log(err);
      return Utils.createExceptionObj("image not found", HttpStatus.NOT_FOUND);
    }
  }
}
