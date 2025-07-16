import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderAnimationSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ec407a)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #f8bbd0)" d="M25 14a7 7 0 0 0-2 .29 7.04 7.04 0 0 0-4 0 7 7 0 0 0-2-.29 7 7 0 0 0 0 14 7 7 0 0 0 2-.29 7.04 7.04 0 0 0 4 0 7 7 0 0 0 2 .29 7 7 0 0 0 0-14m-13 7a5 5 0 0 1 4.01-4.9 6.98 6.98 0 0 0 0 9.8A5 5 0 0 1 12 21m8.01 4.9a4.999 4.999 0 0 1 0-9.8 6.98 6.98 0 0 0 0 9.8M23 16.41a5.011 5.011 0 0 1 0 9.18 5.011 5.011 0 0 1 0-9.18m2.99 9.49a6.98 6.98 0 0 0 0-9.8 4.999 4.999 0 0 1 0 9.8"></path>
</svg>
;
};

function FolderAnimationIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderAnimationSvg} {...props} />
};

export default FolderAnimationIcon;
