import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderScriptsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="M28 12h-6a4 4 0 0 0-4 4v8h2v-8h8v9.893a2.074 2.074 0 0 1-1.664 2.08A2 2 0 0 1 24 26h-8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V16h2a4 4 0 0 0-4-4"></path>
</svg>
;
};

function FolderScriptsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderScriptsSvg} {...props} />
};

export default FolderScriptsIcon;
