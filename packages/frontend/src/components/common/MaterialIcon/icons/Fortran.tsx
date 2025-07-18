import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FortranSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff7043)" d="M6 4v2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6v2h12v-2h-3a1 1 0 0 1-1-1v-9h4a2 2 0 0 1 2 2v2h2V10h-2v2a2 2 0 0 1-2 2h-4V6h6a4 4 0 0 1 4 4h2V4Z"></path>
</svg>
;
};

function FortranIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FortranSvg} {...props} />
};

export default FortranIcon;
