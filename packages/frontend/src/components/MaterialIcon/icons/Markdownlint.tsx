import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MarkdownlintSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42a5f5)" d="M6 5 4 6.75 2 5H1v6h2V8l1 1 1-1v3h2V5zm4.73 3.975L10 8H8l2 3h2l3-6h-2z"></path>
</svg>
;
};

function MarkdownlintIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MarkdownlintSvg} {...props} />
};

export default MarkdownlintIcon;
