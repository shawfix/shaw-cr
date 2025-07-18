import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function KarmaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1em" height="1em">
  <path fill="var(--material-icon-color, #009688)" d="m37.275 55.618-20.29-26.686 9.53-7.247 20.29 26.686h.003l5.527 7.247z"></path>
  <path fill="var(--material-icon-color, #4DB6AC)" d="M34.4 8.378 23.638 22.533V8.403H11.665V22.22l7.84 33.234h4.132V42.308l.003.003 20.29-26.686-.008-.006 5.504-7.24H34.558v.12z"></path>
</svg>
;
};

function KarmaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={KarmaSvg} {...props} />
};

export default KarmaIcon;
