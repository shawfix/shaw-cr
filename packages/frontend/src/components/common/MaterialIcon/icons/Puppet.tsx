import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PuppetSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #fbc02d)" d="M6 2h8v8H6zm12 10h8v8h-8zM6 22h8v8H6z"></path>
  <path fill="var(--material-icon-color, #fbc02d)" d="m7.888 6.192 1.92-2.305 14.304 11.921-1.92 2.305z"></path>
  <path fill="var(--material-icon-color, #fbc02d)" d="m7.888 25.808 14.303-11.92 1.921 2.304-14.303 11.92z"></path>
</svg>
;
};

function PuppetIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PuppetSvg} {...props} />
};

export default PuppetIcon;
