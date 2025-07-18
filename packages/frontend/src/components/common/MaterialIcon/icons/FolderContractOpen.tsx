import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderContractOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #448aff)" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M24.368 20.368a.947.947 0 0 0-.044 1.339l.044.044a.98.98 0 0 0 1.382 0 4.87 4.87 0 0 0 0-6.883l-3.446-3.447a4.867 4.867 0 0 0-6.883 6.882l1.449 1.452a6.7 6.7 0 0 1 .39-2.356l-.457-.468a2.903 2.903 0 0 1-.022-4.105l.022-.023a2.903 2.903 0 0 1 4.106-.02l.021.02 3.438 3.437a2.903 2.903 0 0 1 .022 4.106zm-2.746-4.128a.98.98 0 0 0-1.383 0 4.87 4.87 0 0 0 0 6.883l3.448 3.447a4.867 4.867 0 0 0 6.892-6.873l-.01-.01-1.45-1.451a6.8 6.8 0 0 1-.39 2.366l.458.456a2.903 2.903 0 0 1 .024 4.105l-.024.025a2.903 2.903 0 0 1-4.106.022l-.022-.022-3.437-3.437a2.903 2.903 0 0 1-.023-4.106l.023-.022a.947.947 0 0 0 .043-1.34q-.02-.022-.043-.043"></path>
</svg>
;
};

function FolderContractOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderContractOpenSvg} {...props} />
};

export default FolderContractOpenIcon;
