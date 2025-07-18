import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AudioSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ef5350)" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m6 10h-4v8a4 4 0 1 1-4-4 3.96 3.96 0 0 1 2 .555V8h6Z"></path>
</svg>
;
};

function AudioIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AudioSvg} {...props} />
};

export default AudioIcon;
