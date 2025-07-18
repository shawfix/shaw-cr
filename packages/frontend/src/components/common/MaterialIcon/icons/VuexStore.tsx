import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function VuexStoreSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #41b883)" d="M1.646 14.41 6.729 4.157l1.27 2.501v2.63l-2.525 5.124zm12.708.009L9.27 4.164 8 6.665v2.63l2.517 5.124z"></path>
  <path fill="var(--material-icon-color, #35495e)" d="M1.646 1.582 4.823 8l1.906-3.844-1.27-2.574zm12.708 0L11.177 8 9.27 4.156l1.27-2.574z"></path>
</svg>
;
};

function VuexStoreIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={VuexStoreSvg} {...props} />
};

export default VuexStoreIcon;
