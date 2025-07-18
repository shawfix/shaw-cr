import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCypressSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #009688)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b2dfdb)" d="M22.999 10A8.994 8.994 0 0 0 14 18.99V19a8.994 8.994 0 0 0 8.988 9H23a8.994 8.994 0 0 0 9-8.988V19a9.017 9.017 0 0 0-9.001-9m-4.222 10.931a1.41 1.41 0 0 0 1.242.557 1.9 1.9 0 0 0 .755-.133 6.4 6.4 0 0 0 .817-.425l.916 1.31a3.9 3.9 0 0 1-2.585.916 4.05 4.05 0 0 1-2.028-.49 3.3 3.3 0 0 1-1.31-1.44 5.04 5.04 0 0 1-.457-2.194 5.2 5.2 0 0 1 .456-2.193 3.46 3.46 0 0 1 1.312-1.503 3.6 3.6 0 0 1 1.996-.525 3.7 3.7 0 0 1 1.407.23 4.2 4.2 0 0 1 1.21.72l-.915 1.243a3.6 3.6 0 0 0-.754-.427 2.1 2.1 0 0 0-.785-.131c-1.112 0-1.669.852-1.669 2.585a3.24 3.24 0 0 0 .393 1.899Zm9 2.03a4.7 4.7 0 0 1-1.505 2.323 4.9 4.9 0 0 1-2.75.95l-.228-1.537a3.74 3.74 0 0 0 1.67-.526 4 4 0 0 0 .391-.391l-2.716-8.707h2.257l1.572 6.513 1.67-6.513h2.193Z"></path>
</svg>
;
};

function FolderCypressIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCypressSvg} {...props} />
};

export default FolderCypressIcon;
