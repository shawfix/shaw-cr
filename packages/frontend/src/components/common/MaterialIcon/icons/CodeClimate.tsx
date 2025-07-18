import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CodeClimateSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="1em" height="1em">
  <path fill="var(--material-icon-color, #eee)" d="m196.19 75.562-51.846 51.561 30.766 30.766 21.08-21.08 59.252 59.537 30.481-30.766zm-61.246 60.961-30.481-30.481-78.053 78.053-11.964 11.964 30.766 30.766 11.964-12.249 39.596-39.312 7.691-7.691 30.481 30.48 28.772 28.773 30.766-30.766-28.772-28.772z"></path>
</svg>
;
};

function CodeClimateIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CodeClimateSvg} {...props} />
};

export default CodeClimateIcon;
