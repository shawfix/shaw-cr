import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCloudflareSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff8a65)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #EFEBE9)" d="M27.881 19.229a6.591 6.591 0 0 0-12.308-1.759 5.278 5.278 0 0 0 .572 10.524h11.428a4.388 4.388 0 0 0 .308-8.765"></path>
</svg>
;
};

function FolderCloudflareIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCloudflareSvg} {...props} />
};

export default FolderCloudflareIcon;
