import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSconsOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M12 24h8v4h-8Zm12 0h8v4h-8Zm-12-6h4v4h-4Zm16 0h4v4h-4Zm-10-8h8v4h-8Zm4 14-4-4h2v-4h4v4h2Z"></path>
</svg>
;
};

function FolderSconsOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSconsOpenSvg} {...props} />
};

export default FolderSconsOpenIcon;
