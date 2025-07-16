import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VueSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #41b883)" d="M1.791 3.851 12 21.471 22.209 3.936V3.85H18.24l-6.18 10.616L5.906 3.851z"></path>
  <path fill="var(--material-icon-color, #35495e)" d="m5.907 3.851 6.152 10.617L18.24 3.851h-3.723L12.084 8.03 9.66 3.85z"></path>
</svg>
;
};

function VueIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VueSvg} {...props} />
};

export default VueIcon;
