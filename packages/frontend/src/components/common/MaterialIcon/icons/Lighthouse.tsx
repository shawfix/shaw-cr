import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LighthouseSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #F4511E)" d="M8.852 10.182V8.364h.851V4.727h-.851v-.909L12.258 2l3.407 1.818v.91h-.852v3.636h.852v1.818h-1.073L9.226 13.49l.477-3.31h-.851zm4.258-1.818V4.727h-1.703v3.637zM8 22l.034-.218L15.792 17l.443 3.073L13.11 22zm.894-6.21L15.077 12l.443 3.064-7.154 4.409z"></path>
</svg>
;
};

function LighthouseIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LighthouseSvg} {...props} />
};

export default LighthouseIcon;
