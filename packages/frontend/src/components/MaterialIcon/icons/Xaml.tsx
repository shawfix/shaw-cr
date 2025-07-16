import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function XamlSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="m32 16-5.387 9.333L24.307 24l4.613-8-4.613-8 2.306-1.333z"></path>
  <path fill="var(--material-icon-color, #42a5f5)" d="m25.24 16-4.627 8h-9.226L6.76 16l4.627-8h9.226z"></path>
  <path fill="var(--material-icon-color, #42a5f5)" d="m0 16 5.387-9.333L7.693 8 3.08 16l4.613 8-2.306 1.333z"></path>
</svg>
;
};

function XamlIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={XamlSvg} {...props} />
};

export default XamlIcon;
