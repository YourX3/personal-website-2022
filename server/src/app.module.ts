import { DynamicModule, Module } from '@nestjs/common';
import { ArticlesApiModule } from './api/articles-api/articles-api.module';
import { ImagesApiModule } from './api/images-api/images-api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ResumesApiModule } from './api/resumes-api/resume-api.module';


const moduleImports = [ImagesApiModule, ArticlesApiModule, ResumesApiModule] as any;
if(process.env.ENV === 'prod') {
  moduleImports.push(ServeStaticModule.forRoot({
    rootPath: path.join(__dirname, '../..', 'front/dist'),
  }))
}
@Module({
  imports: moduleImports,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
