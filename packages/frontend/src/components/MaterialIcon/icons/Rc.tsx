import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RcSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M4 28V8H2v21.5a.5.5 0 0 0 .5.5H24v-2Z"></path>
  <path fill="var(--material-icon-color, #0288d1)" d="M29.5 2h-21a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5h21a.5.5 0 0 0 .5-.5v-21a.5.5 0 0 0-.5-.5M26 8.04a3.4 3.4 0 0 0-.56-.04H21a5 5 0 0 0 0 10h4.44a3.4 3.4 0 0 0 .56-.04V22h-5a9 9 0 0 1 0-18h5Z"></path>
</svg>
;
};

function RcIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RcSvg} {...props} />
};

export default RcIcon;
