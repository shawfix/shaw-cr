import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderGamemakerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #26a69a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b2dfdb)" d="m32 20-9.03-9.03L13.942 20l9.03 9.03 3.765-3.766.007-5.264Zm-9.513 2.526L19.96 20l3.01-3.01L25.98 20h-3.494Z"></path>
</svg>
;
};

function FolderGamemakerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderGamemakerSvg} {...props} />
};

export default FolderGamemakerIcon;
