import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AndroidSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <rect width="4" height="10" x="2" y="12" fill="#8bc34a" rx="2"></rect>
  <rect width="4" height="10" x="26" y="12" fill="#8bc34a" rx="2"></rect>
  <path fill="var(--material-icon-color, #8bc34a)" d="M8 12h16v12H8zm2 12h4v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2zm8 0h4v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2zm3.545-19.759 2.12-2.12A1 1 0 0 0 22.251.707l-2.326 2.326a7.97 7.97 0 0 0-7.85 0L9.75.707a1 1 0 1 0-1.414 1.414l2.12 2.12A7.97 7.97 0 0 0 8 10h16a7.97 7.97 0 0 0-2.455-5.759M14 8h-2V6h2Zm6 0h-2V6h2Z"></path>
</svg>
;
};

function AndroidIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AndroidSvg} {...props} />
};

export default AndroidIcon;
