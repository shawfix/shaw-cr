import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function XmakeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <circle cx="8" cy="8" r="7" fill="#e0f2f1"></circle>
  <path fill="var(--material-icon-color, #e0f2f1)" d="M11.759 2.944a6.3 6.3 0 0 0-8.932 1.462l3.281 2.023z"></path>
  <path fill="var(--material-icon-color, #8bc34a)" d="M1.796 9.088 6.107 6.43l-3.28-2.025A6.27 6.27 0 0 0 1.7 8a6.4 6.4 0 0 0 .096 1.088"></path>
  <path fill="var(--material-icon-color, #4db6ac)" d="M13.536 11.01a6.3 6.3 0 0 0-1.777-8.066l-5.65 3.485z"></path>
  <path fill="var(--material-icon-color, #009688)" d="M1.796 9.088a6.3 6.3 0 0 0 11.74 1.922L6.108 6.428z"></path>
</svg>
;
};

function XmakeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={XmakeSvg} {...props} />
};

export default XmakeIcon;
