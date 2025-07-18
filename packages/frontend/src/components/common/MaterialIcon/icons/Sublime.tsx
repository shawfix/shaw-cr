import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SublimeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffb74d)" d="m14.576 18.857-8.088-2.425a.6.6 0 0 1-.41-.516L6 10.169a.57.57 0 0 1 .4-.514l19.06-5.637a.29.29 0 0 1 .408.275v5.744a.59.59 0 0 1-.406.52l-7.864 2.424 7.994 2.307a.58.58 0 0 1 .408.513v5.664a.59.59 0 0 1-.402.521l-19.11 5.993a.285.285 0 0 1-.406-.265l-.04-5.913a.58.58 0 0 1 .403-.514Z"></path>
</svg>
;
};

function SublimeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SublimeSvg} {...props} />
};

export default SublimeIcon;
