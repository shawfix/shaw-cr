import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FreemarkerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2196f3)" d="m12.5 11 .75.5L15 8l-1.75-3.5-.75.5L14 8zM6 4h1v2h2V4h1v2h1.5v1H10v2h1.5v1H10v2H9v-2H7v2H6v-2H4.5V9H6V7H4.5V6H6zm1 5h2V7H7zM3.5 5l-.75-.5L1 8l1.75 3.5.75-.5L2 8z"></path>
</svg>
;
};

function FreemarkerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FreemarkerSvg} {...props} />
};

export default FreemarkerIcon;
