import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HerokuSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7E57C2)" d="M28 2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M10 26v-6l4 3Zm14 0h-4v-6.45a2.55 2.55 0 0 0-.95-1.987 2.75 2.75 0 0 0-2.278-.478L10 18.44V6h4v7.56l2.16-.43A6.558 6.558 0 0 1 24 19.55Zm0-16h-4V6h4Z"></path>
</svg>
;
};

function HerokuIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HerokuSvg} {...props} />
};

export default HerokuIcon;
