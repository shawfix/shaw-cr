import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MinecraftSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4caf50)" d="M4 4v24h24V4Zm20 10h-6v2h4v8h-4v-4h-4v4h-4v-8h4v-2H8V8h6v6h4V8h6Z"></path>
</svg>
;
};

function MinecraftIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MinecraftSvg} {...props} />
};

export default MinecraftIcon;
