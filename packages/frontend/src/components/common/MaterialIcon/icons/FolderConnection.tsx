import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderConnectionSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00acc1)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b2ebf2)" d="M30.868 15.821a1.81 1.81 0 0 1 .064 2.566q-.031.033-.064.064l-2.642 2.63-7.358-7.325 2.642-2.63a1.83 1.83 0 0 1 2.577-.063q.033.031.064.064l1.698 1.69L30.679 10 32 11.314l-2.83 2.818zm-5.471 5.445-1.322-1.314-2.64 2.63-1.981-1.974 2.64-2.627-1.32-1.316-2.642 2.63-1.415-1.314-2.64 2.627a1.81 1.81 0 0 0-.064 2.566q.03.033.064.064l1.697 1.69L12 28.683 13.322 30l3.774-3.756 1.697 1.69a1.83 1.83 0 0 0 2.578.063q.033-.031.064-.064l2.64-2.628-1.32-1.315Z"></path>
</svg>
;
};

function FolderConnectionIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderConnectionSvg} {...props} />
};

export default FolderConnectionIcon;
