import { Module } from '@nestjs/common';
import { FileManagerModule } from 'src/services/file-manager.module';
import { ImagesApiModule } from '../images-api/images-api.module';
import { ResumesApiController } from './resume-api.controller';
import { ResumesApiService } from './resumes-api.service';

@Module({
    imports: [
      FileManagerModule,
      ImagesApiModule
    ],
    providers: [ResumesApiService],
    controllers: [ResumesApiController]
})
export class ResumesApiModule {}
