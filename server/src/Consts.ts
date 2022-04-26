
export class Consts {

  static dataDir_path = process.env.DATA_DIR || '/tmp';
  static imgDir = Consts.dataDir_path + '/images';
  static projectsDir = Consts.dataDir_path + '/articles/projects';
  static resumesDir = Consts.dataDir_path + '/resumes';
}