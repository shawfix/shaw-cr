import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SwaySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00e676)" d="M4 6v22h19a2.4 2.4 157.5 0 0 1.707-.707l2.586-2.586A2.4 2.4 112.5 0 0 28 23V4H6a2 2 135 0 0-2 2"></path>
  <path fill="var(--material-icon-color, #263238)" d="m18 8-6.69 7.244c-.171.186-.44.506-.656.633-.224.131-.457.157-.681.06-.23-.1-.432-.47-.517-.708-.602-1.696-1.04-3.489-1.415-5.268C7.814 8.88 8.543 8 9.647 8zm-8 15.436c-.8.855-1.997.755-2-.416V19c-.019-.47.53-.987 1-1h6zM16.045 16h-2.82L20 8.765c.373-.42 1.438-.76 2-.765h2l-6.486 7.33a2 2 0 0 1-1.469.67"></path>
</svg>
;
};

function SwayIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SwaySvg} {...props} />
};

export default SwayIcon;
