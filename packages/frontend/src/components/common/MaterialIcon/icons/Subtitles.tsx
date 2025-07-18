import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SubtitlesSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, #ff9800)" viewBox="0 0 32 32" width="1em" height="1em">
  <path d="M4.625 26q-1.083 0-1.854-.735C2 24.53 2 24.187 2 23.5V8.49q0-1.032.771-1.76A2.6 2.6 0 0 1 4.625 6h22.75q1.083 0 1.854.735C30 7.47 30 7.813 30 8.5v15.01q0 1.032-.771 1.76a2.6 2.6 0 0 1-1.854.73zM6 22h13v-4H6zm15 0h5v-4h-5zM6 16h5v-4H6zm7 0h13v-4H13z"></path>
</svg>
;
};

function SubtitlesIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SubtitlesSvg} {...props} />
};

export default SubtitlesIcon;
