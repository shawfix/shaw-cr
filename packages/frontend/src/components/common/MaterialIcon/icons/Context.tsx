import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ContextSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffd600)" d="M7 6h2c.554 0 1 .446 1 1v2c0 .554-.446 1-1 1H7c-.554 0-1-.446-1-1V7c0-.554.446-1 1-1"></path>
  <path fill="var(--material-icon-color, #aeea00)" d="M7 0h2c.554 0 1 .446 1 1v3c0 .554-.446 1-1 1H7c-.554 0-1-.446-1-1V1c0-.554.446-1 1-1"></path>
  <path fill="var(--material-icon-color, #f57f17)" d="M12 3h2c.554 0 1 .446 1 1v3c0 .554-.446 1-1 1h-2c-.554 0-1-.446-1-1V4c0-.554.446-1 1-1"></path>
  <path fill="var(--material-icon-color, #8e24aa)" d="M12 9h2c.554 0 1 .446 1 1v3c0 .554-.446 1-1 1h-2c-.554 0-1-.446-1-1v-3c0-.554.446-1 1-1"></path>
  <path fill="var(--material-icon-color, #4db6ac)" d="M7 11h2c.554 0 1 .446 1 1v3c0 .554-.446 1-1 1H7c-.554 0-1-.446-1-1v-3c0-.554.446-1 1-1"></path>
  <path fill="var(--material-icon-color, #e53935)" d="M2 9h2c.554 0 1 .446 1 1v3c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1v-3c0-.554.446-1 1-1"></path>
  <path fill="var(--material-icon-color, #1565c0)" d="M2 3h2c.554 0 1 .446 1 1v3c0 .554-.446 1-1 1H2c-.554 0-1-.446-1-1V4c0-.554.446-1 1-1"></path>
</svg>
;
};

function ContextIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ContextSvg} {...props} />
};

export default ContextIcon;
