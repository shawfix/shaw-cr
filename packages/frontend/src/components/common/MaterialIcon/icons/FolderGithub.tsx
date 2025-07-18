import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGithubSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #eceff1)" d="M23 10a9.03 9.03 0 0 0-9 9.063 9.08 9.08 0 0 0 6.157 8.609c.45.072.593-.21.593-.453v-1.532c-2.493.544-3.024-1.214-3.024-1.214a2.42 2.42 0 0 0-.998-1.333c-.82-.561.062-.544.062-.544a1.9 1.9 0 0 1 1.377.933 1.925 1.925 0 0 0 2.62.754 1.96 1.96 0 0 1 .566-1.215c-1.998-.227-4.094-1.007-4.094-4.459a3.52 3.52 0 0 1 .927-2.456 3.26 3.26 0 0 1 .09-2.392s.754-.245 2.474.924a8.6 8.6 0 0 1 4.5 0c1.718-1.169 2.476-.924 2.476-.924a3.26 3.26 0 0 1 .088 2.392 3.52 3.52 0 0 1 .927 2.456c0 3.462-2.105 4.223-4.112 4.45a2.17 2.17 0 0 1 .622 1.676v2.484c0 .244.143.533.602.453A9.08 9.08 0 0 0 23 10"></path>
</svg>
;
};

function FolderGithubIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGithubSvg} {...props} />
};

export default FolderGithubIcon;
