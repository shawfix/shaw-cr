import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ClineSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M8 1a2 2 0 0 0-2 2H5C3.338 3 2 4.338 2 6v1L1 9l1 2v1c0 1.662 1.338 3 3 3h6c1.662 0 3-1.338 3-3v-1l1-2-1-2V6c0-1.662-1.338-3-3-3h-1a2 2 0 0 0-2-2M6 7c.554 0 1 .446 1 1v2c0 .554-.446 1-1 1s-1-.446-1-1V8c0-.554.446-1 1-1m4 0c.554 0 1 .446 1 1v2c0 .554-.446 1-1 1s-1-.446-1-1V8c0-.554.446-1 1-1"></path>
</svg>
;
};

function ClineIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ClineSvg} {...props} />
};

export default ClineIcon;
