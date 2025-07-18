import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSvgSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffb300)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #fff9c4)" d="M29 17a1.99 1.99 0 0 0-1.723 1h-3.863l3.074-3.074a2.035 2.035 0 1 0-1.414-1.414L22 16.586v-3.863a2 2 0 1 0-2 0v3.863l-3.074-3.075a2.034 2.034 0 1 0-1.414 1.415L18.586 18h-3.863a2 2 0 1 0 0 2h3.863l-3.075 3.074a2.035 2.035 0 1 0 1.415 1.415L20 21.414v3.863a2 2 0 1 0 2 0v-3.863l3.074 3.074a2.035 2.035 0 1 0 1.415-1.414L23.414 20h3.863A1.997 1.997 0 1 0 29 17"></path>
</svg>
;
};

function FolderSvgIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSvgSvg} {...props} />
};

export default FolderSvgIcon;
