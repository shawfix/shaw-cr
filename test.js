import { execSync } from 'node:child_process';

const output = execSync('git status').toString();
console.log('output', output);

const files = output
  .trim()
  .split('\n')
  .filter((item) => item.startsWith('\t'))
  .map((item) => item.replace('\t', ''));
console.log('files', files);
