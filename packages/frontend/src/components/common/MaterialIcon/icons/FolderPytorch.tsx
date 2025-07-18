import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPytorchSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f4511e)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffab91)" d="M23.334 14.011a1.334 1.334 0 0 1 1.333-1.335 1.335 1.335 0 1 1-1.333 1.335m6.497 5.29a7.5 7.5 0 0 0-1.449-3.066 8 8 0 0 0-.734-.814l-1.883 1.892a6 6 0 0 1 .498.543 4.9 4.9 0 0 1 .961 2.01 5 5 0 0 1 .11.822 5.334 5.334 0 0 1-10.667.016v-.016a3.86 3.86 0 0 1 .463-1.845 5 5 0 0 1 .852-1.267c.12-.12 1.209-1.166 2.493-2.394l1.537-1.473L22 10l-3.372 3.255a337 337 0 0 0-2.584 2.486 7.7 7.7 0 0 0-1.327 1.965A6.54 6.54 0 0 0 14 20.688a8 8 0 1 0 16-.02 8 8 0 0 0-.17-1.366"></path>
</svg>
;
};

function FolderPytorchIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPytorchSvg} {...props} />
};

export default FolderPytorchIcon;
