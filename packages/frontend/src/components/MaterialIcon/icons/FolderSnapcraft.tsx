import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSnapcraftSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #66BB6A)" d="m6.922 3.768-.644-.536A1 1 0 0 0 5.638 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7.562a1 1 0 0 1-.64-.232"></path>
  <path fill="var(--material-icon-color, #DCEDC8)" d="m12.538 7.077 2.077 1.038-2.077 2.077zM8.385 14l3.807-3.462-1.73-1.73zM7 5l5.192 5.192V7.077zm8.654 2.077-3.116-.346L16 8.46z"></path>
</svg>
;
};

function FolderSnapcraftIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSnapcraftSvg} {...props} />
};

export default FolderSnapcraftIcon;
