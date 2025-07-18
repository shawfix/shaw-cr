import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function TypescriptDefSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <g fill="#0288d1">
    <path d="M2 2v12h12V2zm1 1h10v10H3z"></path>
    <path d="M5 7v1h1v4h1V8h1V7zm5 0a1.003 1.003 0 0 0-1 1v1a1.003 1.003 0 0 0 1 1h1v1H9v1h2a1.003 1.003 0 0 0 1-1v-1a1.003 1.003 0 0 0-1-1h-1V8h2V7z"></path>
  </g>
</svg>
;
};

function TypescriptDefIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={TypescriptDefSvg} {...props} />
};

export default TypescriptDefIcon;
