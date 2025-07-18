import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CssMapSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7e57c2)" d="M26 11.998v2h2v14H14v-2h-2v4L30 30V11.998Z"></path>
  <path fill="var(--material-icon-color, #7e57c2)" d="M16 14h-2v-2h-2v2c0 .193 0 .703 1.254 1.033A3.345 3.345 0 0 1 16 18h2v2h2v-2c0-.388-.562-.851-1.254-1.034C16.356 16.34 16 14.84 16 14m-3.254 2.966C10.356 16.34 10 14.84 10 14H8v-2H6v8h2v-2h4v2h2v-2c0-.388-.562-.851-1.254-1.034"></path>
  <path fill="var(--material-icon-color, #7e57c2)" d="M2 2v21.998h22V2Zm20 12h-2v-2h-2v2c0 .193 0 .703 1.254 1.033A3.345 3.345 0 0 1 22 18v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1 2-2h2a2 2 0 0 1 2 2 2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"></path>
</svg>
;
};

function CssMapIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CssMapSvg} {...props} />
};

export default CssMapIcon;
