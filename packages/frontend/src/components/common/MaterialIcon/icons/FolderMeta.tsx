import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMetaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7cb342)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #dcedc8)" d="M16 16h-2v13a1 1 0 0 0 1 1h13v-2H16Z"></path>
  <path fill="var(--material-icon-color, #dcedc8)" d="M31 12H19a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1m-5 12h-6v-2h6Zm4-4H20v-2h10Zm0-4H20v-2h10Z"></path>
</svg>
;
};

function FolderMetaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMetaSvg} {...props} />
};

export default FolderMetaIcon;
