import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSnapcraftOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #66bb6a)" d="M14.033 6H4.597a.97.97 0 0 0-.918.684L2 12V5h11.566c0-.552-.433-1-.967-1H7.343a.95.95 0 0 1-.619-.232l-.622-.536A.95.95 0 0 0 5.483 3H1.967C1.433 3 1 3.448 1 4v8c0 .552.433 1 .967 1h10.632l2.323-5.606c.273-.66-.195-1.394-.889-1.394"></path>
  <path fill="var(--material-icon-color, #DCEDC8)" d="m12.538 7.077 2.077 1.038-2.077 2.077zM8.385 14l3.807-3.462-1.73-1.73zM7 5l5.192 5.192V7.077zm8.654 2.077-3.116-.346L16 8.46z"></path>
</svg>
;
};

function FolderSnapcraftOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSnapcraftOpenSvg} {...props} />
};

export default FolderSnapcraftOpenIcon;
