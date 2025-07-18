import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderDartSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2196f3)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M23.037 14.036 15.999 16l-1.948 7.036c-.147.533.058 1.273.458 1.654a486 486 0 0 1 5.49 5.31H26v-4h4v-6l-5.306-5.513c-.383-.397-1.125-.599-1.657-.45z"></path>
</svg>
;
};

function FolderDartIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderDartSvg} {...props} />
};

export default FolderDartIcon;
