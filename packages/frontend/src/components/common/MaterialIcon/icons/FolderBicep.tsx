import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderBicepSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #fff9c4)" d="M15 25s1.15-11.115 4-15l4 1-1 3h-2v7h2c1.9-2.915 5.381-4.255 7.755-3.19 3.134 1.453 2.85 5.831 0 7.769C27.475 27.137 20.699 28.885 15 25"></path>
</svg>
;
};

function FolderBicepIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderBicepSvg} {...props} />
};

export default FolderBicepIcon;
