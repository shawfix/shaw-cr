import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderVideoOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff9800)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffe0b2)" d="m28 14 2 4h-2l-2-4h-2l2 4h-2l-2-4h-2l2 4h-2l-2-4h-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V14.5a.5.5 0 0 0-.5-.5Z"></path>
</svg>
;
};

function FolderVideoOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderVideoOpenSvg} {...props} />
};

export default FolderVideoOpenIcon;
