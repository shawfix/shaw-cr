import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PoetrySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #3f51b5)" d="M20.137 17.834A18.52 18.52 0 0 1 6 24l5 6a25.1 25.1 0 0 0 13-8Z"></path>
  <path fill="var(--material-icon-color, #1976d2)" d="M6 2v22a18.52 18.52 0 0 0 14.137-6.166Z"></path>
  <path fill="var(--material-icon-color, #29b6f6)" d="m6 2 14.137 15.834A23.7 23.7 0 0 0 26 2Z"></path>
</svg>
;
};

function PoetryIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PoetrySvg} {...props} />
};

export default PoetryIcon;
