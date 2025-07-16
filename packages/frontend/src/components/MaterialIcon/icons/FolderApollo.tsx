import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderApolloSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7e57c2)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #d1c4e9)" d="M25 28h3l-4-12h-4l-4 12h3l.667-2h3.01L22 24h-1.667L22 19z"></path>
  <path fill="var(--material-icon-color, #d1c4e9)" d="M28 12a2 2 0 0 0-.416.045 10.996 10.996 0 0 0-17.102 13.473 1.003 1.003 0 0 0 1.72-1.034A8.986 8.986 0 0 1 26.1 13.406 2 2 0 0 0 26 14a2 2 0 1 0 2-2"></path>
</svg>
;
};

function FolderApolloIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderApolloSvg} {...props} />
};

export default FolderApolloIcon;
