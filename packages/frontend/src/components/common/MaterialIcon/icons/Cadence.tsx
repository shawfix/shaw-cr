import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CadenceSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00e676)" d="M14 12h6v-1a1 1 0 0 1 1-1h7V4h-6a8 8 0 0 0-8 8m6 0h6v6h-6zm-6 6v2.65A1.35 1.35 0 0 1 12.65 22h-1.3A1.35 1.35 0 0 1 10 20.65v-1.3A1.35 1.35 0 0 1 11.35 18zv-6h-2.65A7.35 7.35 0 0 0 4 19.35v1.3A7.35 7.35 0 0 0 11.35 28h1.3A7.35 7.35 0 0 0 20 20.65V18Z"></path>
</svg>
;
};

function CadenceIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CadenceSvg} {...props} />
};

export default CadenceIcon;
