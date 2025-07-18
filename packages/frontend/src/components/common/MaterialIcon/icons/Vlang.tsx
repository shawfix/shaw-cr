import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VlangSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 0 500 500" width="1em" height="1em">
  <path fill="var(--material-icon-color, #546e7a)" d="m311.64 433.372 130.885-363.97c2.22-6.173-1.28-10.674-7.809-10.044l-102.93 9.915c-6.529.63-13.582 6.17-15.739 12.363L194.901 429.48c-2.158 6.194 1.416 11.223 7.975 11.223h100.191c3.28 0 6.843-2.505 7.953-5.592z"></path>
  <path fill="var(--material-icon-color, #039be5)" d="m65.278 59.359 102.93 9.915c6.529.63 13.59 6.167 15.757 12.358l123.714 353.456c1.083 3.097-.7 5.608-3.98 5.608H202.877c-6.56 0-13.688-5.01-15.907-11.183L57.472 69.398c-2.22-6.173 1.28-10.674 7.809-10.044z"></path>
</svg>
;
};

function VlangIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VlangSvg} {...props} />
};

export default VlangIcon;
