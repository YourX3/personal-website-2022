import { Module } from '@nestjs/common';
import { FileManagerModule } from 'src/services/file-manager.module';
import { ImagesApiController } from './images-api.controller';
import { ImagesApiService } from './images-api.service';

@Module({
    imports: [
      FileManagerModule
    ],
    providers: [ImagesApiService],
    controllers: [ImagesApiController],
    exports: [ImagesApiService]
})
export class ImagesApiModule {}
