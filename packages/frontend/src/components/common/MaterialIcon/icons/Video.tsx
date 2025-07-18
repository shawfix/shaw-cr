import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VideoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff9800)" d="m24 6 2 6h-4l-2-6h-3l2 6h-4l-2-6h-3l2 6H8L6 6H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V6Z"></path>
</svg>
;
};

function VideoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VideoSvg} {...props} />
};

export default VideoIcon;
