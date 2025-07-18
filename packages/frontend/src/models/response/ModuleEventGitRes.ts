import type { FileInfo } from '../FileInfo';
import type { ModuleEvent } from '../ModuleEvent';

export type ModuleEventGitRes = ModuleEvent<{ label: string; fileList: FileInfo[] }, 'git'>;
