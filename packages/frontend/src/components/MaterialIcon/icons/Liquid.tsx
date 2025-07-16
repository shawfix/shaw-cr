import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LiquidSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #29b6f6)" d="M12 21.669a6.927 6.927 0 0 1-6.927-6.927C5.073 10.124 12 2.33 12 2.33s6.927 7.793 6.927 12.41A6.927 6.927 0 0 1 12 21.67z"></path>
</svg>
;
};

function LiquidIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LiquidSvg} {...props} />
};

export default LiquidIcon;
