import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AstroConfigSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #757575)" d="M15 2H6a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h6v-4H6v-2h6v-2H6v-2h6v-2H6v-2h6v-2h2V4l8 8h2v-1Z"></path>
  <path fill="var(--material-icon-color, #7c4dff)" d="M12 12v18h18V12Zm10 16c-.9 0-2.025-1.267-2.025-3.005-.914 0-.975.464-.975 1.005-.881-.213-1-1.15-1-2h6c0 1.919-2 1.787-2 4m2.542-6a2.5 2.5 0 0 1-2.308-1.641l-.946-2.42a.305.305 0 0 0-.576 0l-.946 2.42A2.5 2.5 0 0 1 17.458 22H16l2.965-7.59a.63.63 0 0 1 .577-.41h2.916a.63.63 0 0 1 .577.41L26 22Z"></path>
</svg>
;
};

function AstroConfigIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AstroConfigSvg} {...props} />
};

export default AstroConfigIcon;
