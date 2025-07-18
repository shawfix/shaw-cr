import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderFaviconSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #fffde7)" d="m24 24 6 4-2-6 4-4h-6l-1.999-6L22 18h-6l4 4-2 6z"></path>
</svg>
;
};

function FolderFaviconIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderFaviconSvg} {...props} />
};

export default FolderFaviconIcon;
