import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderBlocSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #26A69A)" d="m13.8 7.5-1.3-1.1c-.3-.2-.8-.4-1.2-.4H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2H15.1c-.5 0-.9-.1-1.3-.5"></path>
  <path fill="var(--material-icon-color, #B2DFDB)" d="m25 12 7 4.198v8.103L25 28.5l-7-4.212V16.21z"></path>
</svg>
;
};

function FolderBlocIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderBlocSvg} {...props} />
};

export default FolderBlocIcon;
