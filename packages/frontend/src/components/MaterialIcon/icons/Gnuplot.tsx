import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GnuplotSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -16 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1E88E5)" d="M2-1c-.5 0-1-.5-1-1v-12c0-.5.5-1 1-1h12c.5 0 1 .5 1 1v12c0 .5-.5 1-1 1zm0-2v1h12v-7L9-4 6-7zm0-2 4-4 3 3 5-5v-3H2z"></path>
</svg>
;
};

function GnuplotIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GnuplotSvg} {...props} />
};

export default GnuplotIcon;
