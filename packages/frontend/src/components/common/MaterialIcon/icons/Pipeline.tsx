import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PipelineSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f57f17)" d="M20 24h-8.1a5 5 0 0 0-.732-1.754l11.078-11.078A4.997 4.997 0 1 0 20.1 6h-8.202a5 5 0 1 0 0 2H20.1a5 5 0 0 0 .73 1.754L9.755 20.832A4.997 4.997 0 1 0 11.9 26H20v4h10V20H20ZM7 10a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3m18-6a3 3 0 1 1-3 3 3.003 3.003 0 0 1 3-3M7 28a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3m15-6h6v6h-6Z"></path>
</svg>
;
};

function PipelineIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PipelineSvg} {...props} />
};

export default PipelineIcon;
