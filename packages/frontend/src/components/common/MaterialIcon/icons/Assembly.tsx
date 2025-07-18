import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AssemblySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff6e40)" d="M8 6V2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h4v-4H4V6Zm16-4v4h4v20h-4v4h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-4 4h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2 6V8h2v4Zm-4 6h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m-2 6v-4h2v4Zm0-18c0 2 0 2-2 2v2h2v4h2V6Zm8 12c0 2 0 2-2 2v2h2v4h2v-8Z"></path>
</svg>
;
};

function AssemblyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AssemblySvg} {...props} />
};

export default AssemblyIcon;
