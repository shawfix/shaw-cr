import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ObjectiveCppSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffab40)" d="M28 14v-4h-2v4h-6v-4h-2v4h-4v2h4v4h2v-4h6v4h2v-4h4v-2z"></path>
  <path fill="var(--material-icon-color, #ffab40)" d="M13.563 22A5.57 5.57 0 0 1 8 16.437v-2.873A5.57 5.57 0 0 1 13.563 8H18V2h-4.437A11.563 11.563 0 0 0 2 13.563v2.873A11.564 11.564 0 0 0 13.563 28H18v-6Z"></path>
</svg>
;
};

function ObjectiveCppIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ObjectiveCppSvg} {...props} />
};

export default ObjectiveCppIcon;
