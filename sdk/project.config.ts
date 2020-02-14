export class ProjectConfig {
    private static path = 'http://localhost:3004/api';
    public static getPath(): string {
      return ProjectConfig.path;
    }
  }