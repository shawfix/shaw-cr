import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MarkdocConfigSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #757575)" d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h6v-4H6v-2h6v-2H6v-2h6v-2H6v-2h6v-2h2V4l8 8h2v-1Z"></path>
  <path fill="var(--material-icon-color, #ffb300)" d="M12 12v18h18V12Zm10 14h-2v-6l-2 2-2-2v6h-2V16h2l2 2 2-2h2Zm6 2h-4V14h4Z"></path>
</svg>
;
};

function MarkdocConfigIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MarkdocConfigSvg} {...props} />
};

export default MarkdocConfigIcon;
