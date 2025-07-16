import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GrainSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffa726)" d="m16 2-4.97 9.782L16 16l5.094-4.218Z"></path>
  <path fill="var(--material-icon-color, #f57f17)" d="M2 6.848V18.64L16 30l7.228-5.844Z"></path>
  <path fill="var(--material-icon-color, #f57c00)" d="M30 18.645V6.71L17.334 17.235l7.284 5.808Z"></path>
</svg>
;
};

function GrainIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GrainSvg} {...props} />
};

export default GrainIcon;
