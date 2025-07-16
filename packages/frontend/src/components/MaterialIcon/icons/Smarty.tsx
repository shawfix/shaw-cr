import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SmartySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #FFCA28)" d="M16 5a7 7 0 0 1 4.198 12.601l-1.198.9V21h-6v-2.498l-1.198-.9a7 7 0 0 1 3.362-12.554A7 7 0 0 1 16 5m0-3a10 10 0 0 0-1.176.067A10 10 0 0 0 10 20.001V22a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2a10 10 0 0 0-6-18m-4 24h8v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"></path>
</svg>
;
};

function SmartyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SmartySvg} {...props} />
};

export default SmartyIcon;
