import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderDrizzleOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4caf50)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #c8e6c9)" d="m10.752 27.217 3.127-5.764a1.51 1.51 0 0 0-.573-2.034 1.45 1.45 0 0 0-1.995.586l-3.127 5.763a1.51 1.51 0 0 0 .573 2.034 1.44 1.44 0 0 0 .71.187 1.46 1.46 0 0 0 1.285-.772m10.305 0 3.127-5.764a1.51 1.51 0 0 0-.574-2.034 1.45 1.45 0 0 0-1.995.586l-3.127 5.763a1.51 1.51 0 0 0 .574 2.034 1.44 1.44 0 0 0 .709.187 1.46 1.46 0 0 0 1.286-.772m-2.896-5.21 3.326-5.76a1.507 1.507 0 0 0-.518-2.04 1.447 1.447 0 0 0-2.002.527l-3.326 5.76a1.51 1.51 0 0 0 .519 2.041 1.43 1.43 0 0 0 .74.206 1.46 1.46 0 0 0 1.261-.734m10.31 0 3.327-5.76a1.507 1.507 0 0 0-.518-2.04 1.447 1.447 0 0 0-2.002.527l-3.326 5.76a1.51 1.51 0 0 0 .518 2.041 1.43 1.43 0 0 0 .74.206 1.46 1.46 0 0 0 1.262-.734Z"></path>
</svg>
;
};

function FolderDrizzleOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderDrizzleOpenSvg} {...props} />
};

export default FolderDrizzleOpenIcon;
