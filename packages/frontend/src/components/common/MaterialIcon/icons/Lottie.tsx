import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LottieSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="M2 4v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m20.237 8.11c-2.974.426-3.518 2.058-4.34 4.523-.92 2.764-2.145 6.436-7.635 7.217a1.996 1.996 0 1 1-.499-3.96c2.974-.426 3.518-2.058 4.34-4.523.92-2.764 2.145-6.436 7.635-7.217a1.996 1.996 0 1 1 .499 3.96"></path>
</svg>
;
};

function LottieIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LottieSvg} {...props} />
};

export default LottieIcon;
