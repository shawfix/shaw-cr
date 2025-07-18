import type { ValueOf } from '../types/ValueOf';
import { GitStatus } from '../constants/GitStatus';

export type FileInfo = {
  name: string;
  absolutePath: string;
  relativePath: string;
  status: ValueOf<typeof GitStatus>;
};
