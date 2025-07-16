import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderScalaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffcdd2)" d="M18 26v4c2.281-.781 8.713-1.025 10-2v-4c-1.287.975-7.719 1.219-10 2m0-6v4c2.281-.781 8.713-1.025 10-2v-4c-1.287.975-7.719 1.219-10 2m0-6v4c2.281-.781 8.713-1.025 10-2v-4c-1.287.975-7.719 1.219-10 2"></path>
</svg>
;
};

function FolderScalaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderScalaSvg} {...props} />
};

export default FolderScalaIcon;
