import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPackagesSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M31.2 12.933 29.6 10.8A2 2 0 0 0 28 10h-8a2 2 0 0 0-1.6.8l-1.6 2.133a4 4 0 0 0-.8 2.4V26a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V15.333a4 4 0 0 0-.8-2.4M20 12h8l1.5 2h-11Zm6 10v4h-4v-4h-4l6-6 6 6Z"></path>
</svg>
;
};

function FolderPackagesIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPackagesSvg} {...props} />
};

export default FolderPackagesIcon;
