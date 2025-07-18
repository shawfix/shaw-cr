import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMacosSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="M30.64 27.499c-.82 1.24-1.687 2.45-3.008 2.47-1.322.03-1.746-.79-3.245-.79-1.508 0-1.972.77-3.224.82-1.292.05-2.268-1.32-3.096-2.53-1.687-2.47-2.979-7.02-1.243-10.08a4.81 4.81 0 0 1 4.063-2.51c1.262-.02 2.465.87 3.244.87.77 0 2.229-1.07 3.757-.91a4.56 4.56 0 0 1 3.59 1.98 4.57 4.57 0 0 0-2.12 3.81A4.41 4.41 0 0 0 32 24.67a11.1 11.1 0 0 1-1.36 2.83Zm-5.632-16a4.46 4.46 0 0 1 2.9-1.499 4.42 4.42 0 0 1-1.026 3.19 3.58 3.58 0 0 1-2.91 1.42 4.3 4.3 0 0 1 1.036-3.11Z"></path>
</svg>
;
};

function FolderMacosIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMacosSvg} {...props} />
};

export default FolderMacosIcon;
