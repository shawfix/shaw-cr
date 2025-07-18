import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ChangelogSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 24 24" width="1em" height="1em">
  <path d="M0 0h24v24H0z"></path>
  <path fill="var(--material-icon-color, #8bc34a)" d="M13 3a9 9 0 0 0-9 9H1l4 4 4-4H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.95 8.95 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z"></path>
</svg>
;
};

function ChangelogIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ChangelogSvg} {...props} />
};

export default ChangelogIcon;
