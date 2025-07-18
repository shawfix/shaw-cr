import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderAndroidSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #8bc34a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #dcedc8)" d="M27.943 19.471 32 15.414 30.586 14l-4.333 4.333a11.01 11.01 0 0 0-10.505 0L11.414 14 10 15.414l4.057 4.057A10.98 10.98 0 0 0 10 28h22a10.98 10.98 0 0 0-4.057-8.529M18 26h-4v-4h4Zm10 0h-4v-4h4Z"></path>
</svg>
;
};

function FolderAndroidIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderAndroidSvg} {...props} />
};

export default FolderAndroidIcon;
