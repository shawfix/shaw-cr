import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function WebassemblySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7c4dff)" d="M22 18h4v4h-4z"></path>
  <path fill="var(--material-icon-color, #7c4dff)" d="M20 2a4 4 0 0 1-8 0H2v28h28V2Zm-2 24h-2v2h-4v-2h-2v2H6v-2H4V16h2v10h4V16h2v10h4V16h2Zm10 2h-2v-4h-4v4h-2V18h2v-2h4v2h2Z"></path>
</svg>
;
};

function WebassemblyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={WebassemblySvg} {...props} />
};

export default WebassemblyIcon;
