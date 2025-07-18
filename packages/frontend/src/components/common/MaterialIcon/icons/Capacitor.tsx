import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CapacitorSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4fc3f7)" d="m19.081 2.35-4.795 4.795L9.62 2.482 7.05 5.05l4.664 4.665 2.57 2.57 4.705 4.705 2.57-2.57-4.705-4.705 4.795-4.797zM5.052 7.05l-2.57 2.57 4.665 4.664L2.35 19.08l2.57 2.57 4.796-4.796 4.704 4.705 2.57-2.57-7.274-7.274z" paint-order="fill markers stroke"></path>
</svg>
;
};

function CapacitorIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CapacitorSvg} {...props} />
};

export default CapacitorIcon;
