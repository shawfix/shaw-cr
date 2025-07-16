import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AutoitSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1976d2)" d="M12.002 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10m.139 4.419q.642 0 1.07.294.431.294.731.731l5.71 8.262H9.026l1.707-2.35h3.15q.443 0 .77.028a11 11 0 0 1-.443-.62q-.253-.376-.485-.704l-1.64-2.417-4.29 6.063H4.45l5.86-8.262q.285-.396.723-.71.437-.315 1.108-.315"></path>
</svg>
;
};

function AutoitIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AutoitSvg} {...props} />
};

export default AutoitIcon;
