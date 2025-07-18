import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderMojoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff7043)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffccbc)" d="M30.495 17.1a9 9 0 0 0-.88-.913c-.765-.663-1.638-1.14-2.365-1.84A5.4 5.4 0 0 1 26.253 8a7.5 7.5 0 0 0-2.845 1.462 8.59 8.59 0 0 0-2.743 9.877.8.8 0 0 1 .094.364.62.62 0 0 1-.4.556.72.72 0 0 1-.757-.135 5.42 5.42 0 0 1-.785-5.87 7.8 7.8 0 0 0-2.802 6.469 8 8 0 0 0 .335 1.669 7.2 7.2 0 0 0 .808 1.918 8.02 8.02 0 0 0 5.675 3.566 8.8 8.8 0 0 0 6.934-1.769 6.44 6.44 0 0 0 1.746-7.324l-.145-.285a12 12 0 0 0-.88-1.398m-3.61 6.99a4 4 0 0 1-1.258.662 3.33 3.33 0 0 1-3.318-.913 3.13 3.13 0 0 0 2.415-2.275 6.2 6.2 0 0 0-.32-2.467 4 4 0 0 1 .19-2.282 7 7 0 0 0 .727 1.17c.873 1.112 2.256 1.597 2.554 3.109a1.7 1.7 0 0 1 .073.47 3.34 3.34 0 0 1-1.063 2.525Z"></path>
</svg>
;
};

function FolderMojoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderMojoSvg} {...props} />
};

export default FolderMojoIcon;
