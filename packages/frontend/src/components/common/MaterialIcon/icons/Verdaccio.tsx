import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VerdaccioSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00897b)" d="M18.2 10.237h-4.448l-1.827 3.654-4.812-9.624H2.665l7.96 15.92h2.6z" clip-rule="evenodd"></path>
  <path fill="var(--material-icon-color, #e57373)" d="M14.845 3.813v.7h1.767l-.416.825h-2.773v.7h2.42l-.546 1.085h-3.264v.7h3.526l3.766.017 2.01-4.018-1.1-.003v-.006z"></path>
</svg>
;
};

function VerdaccioIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VerdaccioSvg} {...props} />
};

export default VerdaccioIcon;
