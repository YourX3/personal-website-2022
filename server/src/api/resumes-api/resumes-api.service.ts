import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Utils } from 'src/classes/Utils';
import { Consts } from 'src/Consts';
import { FileManagerService } from 'src/services/file-manager.service';

@Injectable()
export class ResumesApiService {
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
  async loadResume(language : string) : Promise<any> {
    let path = Consts.resumesDir;
    switch(language) {
      case 'fr':
        path += '/youri_menubarbe_resume_fr.pdf';
        break;

      default: 
        path += '/youri_menubarbe_resume_en.pdf';
        break;
    }
    
    try {
      const fileData = await this.fileManagerService.readFileAsync(path);
      if(!fileData) return Utils.createExceptionObj("file not found", HttpStatus.NOT_FOUND);

      return fileData;
    } 
    catch(err) {
      console.log(err);
      return Utils.createExceptionObj("file not found", HttpStatus.NOT_FOUND);
    }
  }
}
