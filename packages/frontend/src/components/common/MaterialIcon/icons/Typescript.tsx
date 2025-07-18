import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TypescriptSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M2 2v12h12V2zm4 6h3v1H8v4H7V9H6zm5 0h2v1h-2v1h1a1.003 1.003 0 0 1 1 1v1a1.003 1.003 0 0 1-1 1h-2v-1h2v-1h-1a1.003 1.003 0 0 1-1-1V9a1.003 1.003 0 0 1 1-1"></path>
</svg>
;
};

function TypescriptIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TypescriptSvg} {...props} />
};

export default TypescriptIcon;
