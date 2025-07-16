import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SmlSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M4.747 6.562h6.437c1.202 0 2.176.974 2.176 2.176v8.702h-2.176V8.738H9.008v7.614H6.833V8.738H4.746v8.702H2.481V8.738a2.176 2.176 0 0 1 2.266-2.176m10.244 0h2.176v8.702h4.352v2.176H14.99z"></path>
</svg>
;
};

function SmlIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SmlSvg} {...props} />
};

export default SmlIcon;
