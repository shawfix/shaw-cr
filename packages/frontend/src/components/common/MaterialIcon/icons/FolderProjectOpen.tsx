import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderProjectOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M27.354 20.871 32 25.343l-2.74 2.624-4.613-4.471v-.737l1.947-1.888zm.751-2.023-.8-.768-3.953 3.839v1.577L18.706 28 16 25.343l4.612-4.472h1.626l.644-.624-3.17-3.08h-1.071l-2.32-2.271 2.162-2.096 2.311 2.24v1.048l3.21 3.072 2.194-2.128-.791-.808 1.072-1.049h-2.196l-.536-.52L26.48 12l.545.527v2.129l1.081-1.057 2.707 2.625a2.22 2.22 0 0 1 0 3.184l-1.627-1.609Z"></path>
</svg>
;
};

function FolderProjectOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderProjectOpenSvg} {...props} />
};

export default FolderProjectOpenIcon;
