import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HppSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M28 6V2h-2v4h-6V2h-2v4h-4v2h4v4h2V8h6v4h2V8h4V6zm-15.5 5A5.49 5.49 0 0 0 8 13.344V4H2v24h6V17a2 2 0 0 1 4 0v11h6V16.5a5.5 5.5 0 0 0-5.5-5.5"></path>
</svg>
;
};

function HppIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HppSvg} {...props} />
};

export default HppIcon;
