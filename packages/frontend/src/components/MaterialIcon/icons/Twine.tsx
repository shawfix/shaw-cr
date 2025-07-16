import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TwineSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="M4.229 3.119h6.657v17.755H4.23z"></path>
  <path fill="var(--material-icon-color, #69f0ae)" d="M4.229 17.545c0-12.207 15.535-12.207 15.535-12.207v6.658s-8.877 0-8.877 5.549v3.329H4.229z"></path>
</svg>
;
};

function TwineIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TwineSvg} {...props} />
};

export default TwineIcon;
