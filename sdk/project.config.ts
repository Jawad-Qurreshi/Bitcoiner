export class ProjectConfig {
    private static path = 'http://localhost:3003/api';
    public static getPath(): string {
      return ProjectConfig.path;
    }
  }