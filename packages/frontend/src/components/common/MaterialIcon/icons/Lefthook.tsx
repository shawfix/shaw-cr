import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LefthookSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M6 16v6H2zm5.106-6.537-3.317 1.775a2.22 2.22 0 0 0-.895 2.873l.333.71L14 11.571v-.193a2.006 2.006 0 0 0-2.894-1.915m18.82 7.545a2 2 0 0 0-.393-.744l-7.89-8.883a2.76 2.76 0 0 0-3.138-.384L16 8v4.559a3.97 3.97 0 0 1-1.566 3.18L16 20l8.457 2.204 4.624-2.979a2 2 0 0 0 .845-2.217"></path>
  <path fill="var(--material-icon-color, #b71c1c)" fill-rule="evenodd" d="m2 22 4-2 4 2-4 2zm12.434-6.262a6 6 0 0 1-1.194.695l-2.544 1.136A6.55 6.55 0 0 1 8 18v.764l9.71 4.855a4.05 4.05 0 0 0 2.343.366 7.8 7.8 0 0 0 2.667-.82 24 24 0 0 0 1.737-.96zm-6.97-1.635 5.829-2.937a.5.5 0 0 1 .712.475c.007.417-.005.871-.005 1.153a2.1 2.1 0 0 1-1.367 2.03l-2.987 1.067c-1.629.581-3.103-1.324-2.182-1.788"></path>
</svg>
;
};

function LefthookIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LefthookSvg} {...props} />
};

export default LefthookIcon;
