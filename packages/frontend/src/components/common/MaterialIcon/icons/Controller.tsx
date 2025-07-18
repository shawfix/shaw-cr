import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ControllerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffc107)" d="M8.002 10.45A2.45 2.45 0 0 1 5.552 8a2.45 2.45 0 0 1 2.45-2.45A2.45 2.45 0 0 1 10.452 8a2.45 2.45 0 0 1-2.45 2.45m5.2-1.771c.029-.224.05-.448.05-.679a6 6 0 0 0-.05-.7l1.478-1.141a.35.35 0 0 0 .084-.448l-1.4-2.422a.344.344 0 0 0-.427-.154l-1.743.7a5 5 0 0 0-1.183-.686l-.26-1.855A.354.354 0 0 0 9.402 1h-2.8a.354.354 0 0 0-.35.294l-.258 1.855a5 5 0 0 0-1.183.686l-1.743-.7a.344.344 0 0 0-.427.154l-1.4 2.422a.345.345 0 0 0 .084.448L2.8 7.3a6 6 0 0 0-.05.7c0 .231.022.455.05.679L1.324 9.841a.345.345 0 0 0-.084.448l1.4 2.422c.084.154.273.21.427.154l1.743-.707c.364.28.742.518 1.183.693l.259 1.855a.354.354 0 0 0 .35.294h2.8a.354.354 0 0 0 .35-.294l.259-1.855a5 5 0 0 0 1.183-.693l1.743.707c.154.056.343 0 .427-.154l1.4-2.422a.35.35 0 0 0-.084-.448z"></path>
</svg>
;
};

function ControllerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ControllerSvg} {...props} />
};

export default ControllerIcon;
