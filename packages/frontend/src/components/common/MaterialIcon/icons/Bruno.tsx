import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BrunoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #212121)" d="M26 10H6v14h6v2h8v-2h6z"></path>
  <path fill="var(--material-icon-color, #ffab40)" d="M27.897 9.794a6.86 6.86 0 0 0-4.35-3.55A7.97 7.97 0 0 0 18 4h-4a7.97 7.97 0 0 0-5.548 2.244 6.86 6.86 0 0 0-4.35 3.55A19.9 19.9 0 0 0 2 18.702V20a4 4 0 0 0 4 4v-8h2v6a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2v-2h2v2h2v-2h4v2h2v-2h2v2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4v-6h2v8a4 4 0 0 0 4-4v-1.298a19.9 19.9 0 0 0-2.103-8.908M10 14v-2h2v2Zm4 4v-2h4v2Zm8-4h-2v-2h2Z"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M16 24a6.8 6.8 0 0 1-2 .996V28a2 2 0 0 0 4 0v-3.004A6.8 6.8 0 0 1 16 24"></path>
</svg>
;
};

function BrunoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BrunoSvg} {...props} />
};

export default BrunoIcon;
