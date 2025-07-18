import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderShaderSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ab47bc)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #e1bee7)" d="M21.58 25.999A3.9 3.9 0 0 1 17.79 30a4.007 4.007 0 0 1 0-8.003A3.9 3.9 0 0 1 21.58 26Zm4.704-9.47a3.966 3.966 0 0 0-3.257-4.494 3.833 3.833 0 0 0-4.255 3.439 4.026 4.026 0 0 0 2.457 4.285c2.905 1.205 3.59 2.423 3.226 5.71a3.967 3.967 0 0 0 3.254 4.495 3.83 3.83 0 0 0 4.257-3.435 4.03 4.03 0 0 0-2.456-4.288c-2.905-1.207-3.59-2.427-3.225-5.713Z"></path>
</svg>
;
};

function FolderShaderIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderShaderSvg} {...props} />
};

export default FolderShaderIcon;
