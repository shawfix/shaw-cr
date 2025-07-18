import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function NunjucksSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #388e3c)" d="M12 4v12L8 4H4v24h4V18l4 10h4V4zm12 6v14h-2v-4h-4v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10Z"></path>
</svg>
;
};

function NunjucksIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={NunjucksSvg} {...props} />
};

export default NunjucksIcon;
