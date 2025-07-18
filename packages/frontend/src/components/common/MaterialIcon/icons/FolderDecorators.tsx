import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderDecoratorsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ab47bc)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #e1bee7)" d="M23.66 30a7.8 7.8 0 0 1-3.737-.929 7.06 7.06 0 0 1-2.81-2.784 9.2 9.2 0 0 1-1.07-4.655 18.3 18.3 0 0 1 .863-5.874 12.6 12.6 0 0 1 2.349-4.267 10.1 10.1 0 0 1 3.392-2.604A9.3 9.3 0 0 1 26.607 8a5.22 5.22 0 0 1 4.101 1.455A5.64 5.64 0 0 1 32 13.347a5.4 5.4 0 0 1-.069.832q-.07.443-.153.914l-1.611 7.97h-2.308l-.029-1.006h-.11c-.464.258-.96.665-1.488.96a3.96 3.96 0 0 1-1.96.444 3.03 3.03 0 0 1-2.098-.818 2.79 2.79 0 0 1-.904-2.175 4.34 4.34 0 0 1 1.877-3.781 13 13 0 0 1 5.907-1.76 6 6 0 0 0 .167-1.22 3.94 3.94 0 0 0-.611-2.258 2.71 2.71 0 0 0-2.39-.9 4.9 4.9 0 0 0-2.42.692 7.7 7.7 0 0 0-2.266 2.051 10.9 10.9 0 0 0-1.682 3.367 15.3 15.3 0 0 0-.638 4.641 7.05 7.05 0 0 0 .721 3.366 5 5 0 0 0 1.864 2.009 4.67 4.67 0 0 0 2.39.665 4.4 4.4 0 0 0 1.668-.29 6.2 6.2 0 0 0 1.418-.818l1.279 2.272a7.3 7.3 0 0 1-2.21 1.122A9 9 0 0 1 23.66 30m2.018-9.056a2.8 2.8 0 0 0 1.04-.21 4.8 4.8 0 0 0 1.04-.574l.56-2.742a6.8 6.8 0 0 0-2.99.951 1.87 1.87 0 0 0-.772 1.512 1 1 0 0 0 .31.783 1.16 1.16 0 0 0 .812.28"></path>
</svg>
;
};

function FolderDecoratorsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderDecoratorsSvg} {...props} />
};

export default FolderDecoratorsIcon;
