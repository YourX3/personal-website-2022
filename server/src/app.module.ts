import { Module } from '@nestjs/common';
import { ArticlesApiModule } from './api/articles-api/articles-api.module';
import { ImagesApiModule } from './api/images-api/images-api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ResumesApiModule } from './api/resumes-api/resume-api.module';

@Module({
  imports: [
    /*ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../..', 'front/dist'),
    }),*/
    ImagesApiModule, ArticlesApiModule, ResumesApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
