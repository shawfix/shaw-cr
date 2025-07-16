import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ProtoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="M16 27 2 19v-5l14 8z"></path>
  <path fill="var(--material-icon-color, #ffeb3b)" d="m30 14-14 8v5l14-8z"></path>
  <path fill="var(--material-icon-color, #ff5722)" d="M16 6 2 14v5l14-8z"></path>
  <path fill="var(--material-icon-color, #00e676)" d="m30 19-14-8V6l14 8z"></path>
  <path fill="var(--material-icon-color, #03a9f4)" d="M16 27 2 19v-5l14 8z"></path>
</svg>
;
};

function ProtoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ProtoSvg} {...props} />
};

export default ProtoIcon;
