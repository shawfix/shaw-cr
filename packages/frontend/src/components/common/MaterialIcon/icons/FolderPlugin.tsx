import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPluginSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M30.107 20H32v-4a2 2 0 0 0-2-2h-4v-2a2 2 0 0 0-4 0v2h-4a2 2 0 0 0-2 2v4h-2a2 2 0 0 0 0 4h2v4a2 2 0 0 0 2 2h4v-1.893a2.074 2.074 0 0 1 1.664-2.08A2 2 0 0 1 26 28v2h4a2 2 0 0 0 2-2v-4h-2a2 2 0 0 1-1.973-2.336A2.074 2.074 0 0 1 30.107 20"></path>
</svg>
;
};

function FolderPluginIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPluginSvg} {...props} />
};

export default FolderPluginIcon;
