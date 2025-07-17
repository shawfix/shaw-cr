import type { GitStatus } from './GitStatus';

export type FileInfo = {
  name: string;
  absolutePath: string;
  relativePath: string;
  status: GitStatus;
};
