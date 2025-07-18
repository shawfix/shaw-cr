import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGuardSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #43a047)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #c8e6c9)" d="m25 9.962-7 3.273v4.908c0 4.542 2.986 8.788 7 9.82 4.014-1.032 7-5.278 7-9.82v-4.908ZM28 20h-6v-2h6Z"></path>
</svg>
;
};

function FolderGuardIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGuardSvg} {...props} />
};

export default FolderGuardIcon;
