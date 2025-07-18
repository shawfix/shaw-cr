import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderConfigSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00acc1)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #80deea)" d="M23.001 24.15A3.195 3.195 0 0 1 19.762 21a3.24 3.24 0 1 1 3.239 3.15m6.875-2.277a7 7 0 0 0 .064-.874 8 8 0 0 0-.064-.9l1.951-1.467a.446.446 0 0 0 .113-.576l-1.853-3.112a.46.46 0 0 0-.564-.199l-2.302.9a6.8 6.8 0 0 0-1.565-.882l-.342-2.385A.464.464 0 0 0 24.85 12h-3.7a.464.464 0 0 0-.463.378l-.341 2.385a6.8 6.8 0 0 0-1.563.881l-2.304-.899a.46.46 0 0 0-.564.198l-1.851 3.113a.436.436 0 0 0 .112.576l1.95 1.468a8 8 0 0 0-.064.9 7 7 0 0 0 .064.873l-1.95 1.493a.436.436 0 0 0-.112.576l1.85 3.115a.47.47 0 0 0 .565.198l2.304-.91a6.4 6.4 0 0 0 1.563.892l.342 2.385a.464.464 0 0 0 .463.378h3.7a.464.464 0 0 0 .464-.378l.34-2.385a6.8 6.8 0 0 0 1.566-.891l2.302.909a.475.475 0 0 0 .566-.198l1.85-3.115a.446.446 0 0 0-.112-.576Z"></path>
</svg>
;
};

function FolderConfigIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderConfigSvg} {...props} />
};

export default FolderConfigIcon;
