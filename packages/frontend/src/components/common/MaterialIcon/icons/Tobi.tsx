import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TobiSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #c2185b)" d="M2 2v28h28V2Zm16 16h-4v10h-2V18H8v-2h10Zm10 10h-8V16h2v10h6Z"></path>
</svg>
;
};

function TobiIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TobiSvg} {...props} />
};

export default TobiIcon;
