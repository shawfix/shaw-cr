import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function RamlSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M6 18.087a2 2 0 0 0-2-2 2 2 0 0 0 2-2v-6h4v-4H6a2 2 0 0 0-2 2v8H2v4h1.5a.5.5 0 0 1 .5.5v7.5a2 2 0 0 0 2 2h4v-4H6Zm22-3.999v-8a2 2 0 0 0-2-2h-4v4h4v6a2 2 0 0 0 2 2 2 2 0 0 0-2 2v6h-4v4h4a2 2 0 0 0 2-2v-8h2v-4Z"></path>
  <rect width="4" height="4" x="10" y="14.088" fill="#42a5f5" rx=".5"></rect>
  <rect width="4" height="4" x="18" y="14.088" fill="#42a5f5" rx=".5"></rect>
</svg>
;
};

function RamlIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={RamlSvg} {...props} />
};

export default RamlIcon;
