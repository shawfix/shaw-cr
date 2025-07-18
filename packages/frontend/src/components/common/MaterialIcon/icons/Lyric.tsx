import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LyricSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #50c5ef)" d="M26 7.7c0-.1-.1-.2-.2-.3l-5.2-5.2c-.1-.1-.3-.2-.4-.2h-.1q-.15 0 0 0H7.7c-1 .1-1.7.8-1.7 1.8v24.5c0 1 .8 1.7 1.7 1.7h16.6c1 0 1.7-.8 1.7-1.7zq0 .15 0 0M22 12h-4v8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.7 0 1.4.2 2 .6V8h6z"></path>
</svg>
;
};

function LyricIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LyricSvg} {...props} />
};

export default LyricIcon;
