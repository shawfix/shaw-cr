import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TextlintSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f06292)" d="M10 22V8H4v20h24v-6z"></path>
  <path fill="var(--material-icon-color, #00e5ff)" d="M14 8h4v20h-4z"></path>
  <path fill="var(--material-icon-color, #00e5ff)" d="M4 4h24v6H4z"></path>
</svg>
;
};

function TextlintIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TextlintSvg} {...props} />
};

export default TextlintIcon;
