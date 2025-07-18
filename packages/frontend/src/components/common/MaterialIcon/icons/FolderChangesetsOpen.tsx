import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderChangesetsOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2196f3)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M14.003 14a6.68 6.68 0 0 0 6.335 6.98h1.9a6.62 6.62 0 0 0-6.238 7h1.172A6.36 6.36 0 0 0 23 23.73a6.36 6.36 0 0 0 5.828 4.25H30a6.62 6.62 0 0 0-6.239-7h1.901A6.68 6.68 0 0 0 31.997 14h-3.169A6.34 6.34 0 0 0 23 18.23 6.34 6.34 0 0 0 17.172 14ZM23 18.234a7.7 7.7 0 0 1 0 5.493 7.7 7.7 0 0 1 0-5.493"></path>
</svg>
;
};

function FolderChangesetsOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderChangesetsOpenSvg} {...props} />
};

export default FolderChangesetsOpenIcon;
