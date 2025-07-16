import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MarkdownSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="m14 10-4 3.5L6 10H4v12h4v-6l2 2 2-2v6h4V10zm12 6v-6h-4v6h-4l6 8 6-8z"></path>
</svg>
;
};

function MarkdownIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MarkdownSvg} {...props} />
};

export default MarkdownIcon;
