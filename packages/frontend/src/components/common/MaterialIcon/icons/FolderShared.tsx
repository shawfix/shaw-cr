import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSharedSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ab47bc)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #e1bee7)" d="M28 26a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h-4v2h18v-2Zm-5-6v-2l4 2.798L23 24v-2a4.12 4.12 0 0 0-4 2c.448-2.003.888-3.595 4-4"></path>
</svg>
;
};

function FolderSharedIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSharedSvg} {...props} />
};

export default FolderSharedIcon;
