import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LilypondSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #66bb6a)" d="M10 8v11.023A4.986 4.986 0 1 0 11.9 24h.1V11.6l16-3.2v8.623A4.986 4.986 0 1 0 29.9 22h.1V4Z"></path>
</svg>
;
};

function LilypondIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LilypondSvg} {...props} />
};

export default LilypondIcon;
