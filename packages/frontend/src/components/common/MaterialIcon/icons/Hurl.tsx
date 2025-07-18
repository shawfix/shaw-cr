import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function HurlSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ec407a)" d="M11 2v2H2v2h9v2l4-3zM5 8l-4 3 4 3v-2h9v-2H5z"></path>
</svg>
;
};

function HurlIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={HurlSvg} {...props} />
};

export default HurlIcon;
