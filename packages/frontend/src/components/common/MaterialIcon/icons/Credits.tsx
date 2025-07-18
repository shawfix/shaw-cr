import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CreditsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #9ccc65)" d="M4 2h24v4H4zm6 6h12v4H10zm-6 6h24v4H4zm6 6h12v4H10zm-6 6h24v4H4z"></path>
</svg>
;
};

function CreditsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CreditsSvg} {...props} />
};

export default CreditsIcon;
