import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AppsScriptSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M6.053 20.055H21.21a3.01 3.01 0 0 1 3.049 2.966 3.01 3.01 0 0 1-3.049 2.966H6.053a3.01 3.01 0 0 1-3.049-2.966 3.01 3.01 0 0 1 3.049-2.966"></path>
  <path fill="var(--material-icon-color, #ffc107)" d="M19.44 25.433 7.179 16.765a2.914 2.914 0 0 1-.674-4.143 3.104 3.104 0 0 1 4.258-.656l12.263 8.668a2.914 2.914 0 0 1 .674 4.143 3.104 3.104 0 0 1-4.258.656Z"></path>
  <path fill="var(--material-icon-color, #43a047)" d="m19.489 8.05 4.683 14.026a2.95 2.95 0 0 1-1.957 3.737 3.067 3.067 0 0 1-3.841-1.904L13.69 9.884a2.95 2.95 0 0 1 1.957-3.738 3.067 3.067 0 0 1 3.842 1.905Z"></path>
  <path fill="var(--material-icon-color, #448aff)" d="M18.363 22.076 23.047 8.05a3.067 3.067 0 0 1 3.841-1.904 2.95 2.95 0 0 1 1.958 3.737L24.162 23.91a3.067 3.067 0 0 1-3.842 1.904 2.95 2.95 0 0 1-1.957-3.737Z"></path>
</svg>
;
};

function AppsScriptIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AppsScriptSvg} {...props} />
};

export default AppsScriptIcon;
