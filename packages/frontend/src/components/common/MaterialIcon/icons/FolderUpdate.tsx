import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderUpdateSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #43a047)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #c8e6c9)" d="M20 14v6.48l5.38 4.3 1.24-1.56-4.62-3.7V14z"></path>
  <path fill="var(--material-icon-color, #c8e6c9)" d="m32 10.162-2.898 2.821A9.984 9.984 0 1 0 31.8 22h-2.05a8.034 8.034 0 1 1-2.082-7.62L24.975 17H32Z"></path>
</svg>
;
};

function FolderUpdateIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderUpdateSvg} {...props} />
};

export default FolderUpdateIcon;
