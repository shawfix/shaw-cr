import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderBlocOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #26A69A)" d="M29 12H9.4c-.9 0-1.6.6-1.9 1.4L4 24V10h24c0-1.1-.9-2-2-2H15.1c-.5 0-.9-.2-1.3-.5l-1.3-1.1c-.3-.2-.8-.4-1.2-.4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h22l4.8-11.2c.4-1 0-2.2-1-2.6-.3-.1-.6-.2-.8-.2"></path>
  <path fill="var(--material-icon-color, #B2DFDB)" d="m25 12 7 4.198v8.103L25 28.5l-7-4.212V16.21z"></path>
</svg>
;
};

function FolderBlocOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderBlocOpenSvg} {...props} />
};

export default FolderBlocOpenIcon;
