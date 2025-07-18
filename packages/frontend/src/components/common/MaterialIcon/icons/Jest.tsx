import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function JestSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f4511e)" d="m21.032 8-1.878 4L20 13.998h2L22.928 12z"></path>
  <path fill="var(--material-icon-color, #f4511e)" d="m14 2 2 8h2l3.032-6L24 10h2l2-8zm14 18h-2a4.34 4.34 0 0 1-4-4h-2a4.17 4.17 0 0 1-4.23 3.87c-1.522 2.38-5.155 4.283-7.77 5.148A4.724 4.724 0 0 1 5 20H4c-4.718 7.978 3.064 13.219 10.955 7.895C18.85 24.497 29.658 27.487 28 20"></path>
  <circle cx="7" cy="15" r="3" fill="#f4511e"></circle>
  <circle cx="27" cy="15" r="3" fill="#f4511e"></circle>
  <circle cx="16" cy="16" r="2" fill="#f4511e"></circle>
</svg>
;
};

function JestIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={JestSvg} {...props} />
};

export default JestIcon;
