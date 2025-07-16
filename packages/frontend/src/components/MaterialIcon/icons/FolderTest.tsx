import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderTestSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #a7ffeb)" d="M16 12v2h2v12a4 4 0 0 0 8 0V14h2v-2Zm5 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1m2-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1m1-4h-4v-4h4Z"></path>
</svg>
;
};

function FolderTestIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderTestSvg} {...props} />
};

export default FolderTestIcon;
