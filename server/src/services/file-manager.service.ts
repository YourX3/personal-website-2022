import { Injectable } from '@nestjs/common';
import { Consts } from 'src/Consts';
import * as fs from 'fs';
import { ArticlesApiController } from 'src/api/articles-api/articles-api.controller';
import { Article } from 'src/classes/Article';

@Injectable()
export class FileManagerService {
  
  public allProjects : Article[];

  /**
   * @desc reads file async 
   * @param path full file path
   * @returns buffer containing the file
   */
  public async readFileAsync(path : string) : Promise<Buffer> {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data : Buffer) => {
        if(err) reject(err);

        resolve(data);
      })
    }) 
  }


  /**
   * @desc reads json file async 
   * @param path full file path
   * @returns js object containing the json file
   */
  public async loadJSONfile(path : string) : Promise<any> {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data : Buffer) => {
        if(err) reject(err);

        resolve(JSON.parse(data.toString()));
      })
    });
  }


  public listFilesInDirectory(dirPath : string) : Promise<Buffer[]>{
    return new Promise((resolve, reject) => {
      fs.readdir(dirPath, {}, (err, files : Buffer[]) => {
        if(err) reject(err);

        resolve(files);
      })
    });
  }

  public loadJSONFilesInDirectory(dirPath : string, maxCount : number = 0) : Promise<any[]>{
    return new Promise((resolve, reject) => {
      fs.readdir(dirPath, {}, async (err, files : Buffer[]) => {
        if(err) reject(err);

        const jsObjects = [];
        const neededFilesCount = maxCount ? Math.min(maxCount, files.length) : files.length;
        for(let i=0; i < neededFilesCount; ++i) {
          jsObjects.push(await this.loadJSONfile(dirPath + '/' + files[i]));
        }

        resolve(jsObjects);
      })
    });
  }


  public async loadAllProjects(dirPath : string) {
    const data = await this.loadJSONFilesInDirectory(dirPath);
    this.allProjects = data.map(x => new Article(x));
  }
}
