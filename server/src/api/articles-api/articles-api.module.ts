import { Module } from '@nestjs/common';
import { FileManagerModule } from 'src/services/file-manager.module';
import { ArticlesApiController } from './articles-api.controller';
import { ArticlesApiService } from './articles-api.service';

@Module({
    imports: [
      FileManagerModule
    ],
    providers: [ArticlesApiService],
    controllers: [ArticlesApiController]
})
export class ArticlesApiModule {}
