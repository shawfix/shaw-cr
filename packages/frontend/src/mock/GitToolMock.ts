import type { ModuleEventGitRes } from '../models/response/ModuleEventGitRes';

import { GitStatus } from '../constants/GitStatus';

export const GitToolMock: ModuleEventGitRes['data'] = {
  label: 'Changes',
  fileList: [
    {
      name: 'xxx.tape',
      absolutePath: '/User/shawfix/document/xxx.tape',
      relativePath: './shawfix/document/xxx.tape',
      status: GitStatus.deleted,
    },
    {
      name: 'xxx.tsx',
      absolutePath: '/User/shawfix/document/xxx.tape',
      relativePath: './shawfix/document/xxx.tape',
      status: GitStatus.modified,
    },
    {
      name: 'xxx.js',
      absolutePath: '/User/shawfix/document/xxx.tape',
      relativePath: './shawfix/document/xxx.tape',
      status: GitStatus.untrack,
    },
    {
      name: 'xxx.jsx',
      absolutePath: '/User/shawfix/document/xxx.tape',
      relativePath: './shawfix/document/xxx.tape',
      status: GitStatus.modified,
    },
    {
      name: 'xxx.css',
      absolutePath: '/User/shawfix/document/xxx.tape',
      relativePath: './shawfix/document/xxx.tape',
      status: GitStatus.modified,
    },
    {
      name: 'xxx.json',
      absolutePath: '/User/shawfix/document/xxx.tape',
      relativePath: './shawfix/document/xxx.tape',
      status: GitStatus.modified,
    },
    {
      name: 'xxx.txt',
      absolutePath: '/User/shawfix/document/xxx.tape',
      relativePath: './shawfix/document/xxx.tape',
      status: GitStatus.modified,
    },
    {
      name: '.latexmkrc',
      absolutePath: '/User/shawfix/document/xxx.tape',
      relativePath: './shawfix/document/xxx.tape',
      status: GitStatus.modified,
    },
  ],
};
