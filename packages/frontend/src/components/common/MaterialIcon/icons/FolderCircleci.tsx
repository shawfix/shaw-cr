import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCircleciSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #eceff1)" d="M22.954 10a9 9 0 0 0-8.555 6.367.5.5 0 0 0 .486.633h3.23a.5.5 0 0 0 .442-.28 5 5 0 1 1-.001 4.557.5.5 0 0 0-.439-.277h-3.232a.5.5 0 0 0-.486.633 8.997 8.997 0 0 0 17.597-2.892A9.103 9.103 0 0 0 22.954 10"></path>
  <circle cx="23" cy="19" r="2" fill="#eceff1"></circle>
</svg>
;
};

function FolderCircleciIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCircleciSvg} {...props} />
};

export default FolderCircleciIcon;
