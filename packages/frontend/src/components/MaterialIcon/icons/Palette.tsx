import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PaletteSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4fc3f7)" d="M12.278 8a1.167 1.167 0 0 1-1.167-1.167 1.167 1.167 0 0 1 1.167-1.166 1.167 1.167 0 0 1 1.166 1.166A1.167 1.167 0 0 1 12.278 8M9.944 4.889a1.167 1.167 0 0 1-1.166-1.167 1.167 1.167 0 0 1 1.166-1.166 1.167 1.167 0 0 1 1.167 1.166A1.167 1.167 0 0 1 9.944 4.89m-3.888 0a1.167 1.167 0 0 1-1.167-1.167 1.167 1.167 0 0 1 1.167-1.166 1.167 1.167 0 0 1 1.166 1.166A1.167 1.167 0 0 1 6.056 4.89M3.722 8a1.167 1.167 0 0 1-1.166-1.167 1.167 1.167 0 0 1 1.166-1.166A1.167 1.167 0 0 1 4.89 6.833 1.167 1.167 0 0 1 3.722 8M8 1a7 7 0 0 0-7 7 7 7 0 0 0 7 7 1.167 1.167 0 0 0 1.167-1.167c0-.303-.117-.575-.304-.777a1.2 1.2 0 0 1-.295-.778 1.167 1.167 0 0 1 1.166-1.167h1.377A3.89 3.89 0 0 0 15 7.222C15 3.784 11.866 1 8 1"></path>
</svg>
;
};

function PaletteIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PaletteSvg} {...props} />
};

export default PaletteIcon;
