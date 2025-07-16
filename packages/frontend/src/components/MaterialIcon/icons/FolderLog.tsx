import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderLogSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #afb42b)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #afb42b)" d="M20 14h8v2h-8zm0 4h8v2h-8zm0 4h6v2h-6z"></path>
  <path fill="var(--material-icon-color, #f0f4c3)" d="M30.337 14H17.663A1.663 1.663 0 0 0 16 15.663v10.674A1.663 1.663 0 0 0 17.663 28h12.674A1.663 1.663 0 0 0 32 26.337V15.663A1.663 1.663 0 0 0 30.337 14M26 26h-6v-2h6Zm2-4h-8v-2h8Zm0-4h-8v-2h8Z"></path>
</svg>
;
};

function FolderLogIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderLogSvg} {...props} />
};

export default FolderLogIcon;
