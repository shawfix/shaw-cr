import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SanSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #01579B)" d="M28 17.898 4 23.316V30l24-5.418Zm0-10.623L4 12.694v6.683l24-5.418Z"></path>
  <path fill="var(--material-icon-color, #B3E5FC)" d="M28 13.926 4 8.684V2l24 5.242Zm0 10.623L4 19.307v-6.684l24 5.242Z"></path>
</svg>
;
};

function SanIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SanSvg} {...props} />
};

export default SanIcon;
