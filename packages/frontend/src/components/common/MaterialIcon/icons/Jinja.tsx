import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function JinjaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #bdbdbd)" d="M30 8V4a94.4 94.4 0 0 1-14 1A94.4 94.4 0 0 1 2 4v4s1.482.247 3.95.495L5.4 14H2v2h3.2L4 28h6V16h12v12h6l-1.2-12H30v-2h-3.4l-.55-5.505C28.517 8.247 30 8 30 8m-20 6V8.817c1.235.074 2.576.13 4 .16V14Zm12 0h-4V8.977a104 104 0 0 0 4-.16Z"></path>
</svg>
;
};

function JinjaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={JinjaSvg} {...props} />
};

export default JinjaIcon;
