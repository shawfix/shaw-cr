import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function KeySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #26a69a)" d="M30 14H17.738a8 8 0 1 0 0 4H24v4h4v-4h2Zm-20 5a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3"></path>
</svg>
;
};

function KeyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={KeySvg} {...props} />
};

export default KeyIcon;
