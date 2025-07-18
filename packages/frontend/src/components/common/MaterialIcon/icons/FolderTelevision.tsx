import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTelevisionSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #fff9c4)" d="M30 12H14a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h8v-2h4a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2m0 12H14V14h16Z"></path>
</svg>
;
};

function FolderTelevisionIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTelevisionSvg} {...props} />
};

export default FolderTelevisionIcon;
