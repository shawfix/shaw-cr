import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CaddySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #4fc3f7)" d="M20 22v-3.53q-.008-.155-.011-.31-.003-.436-.041-.87a5.3 5.3 0 0 0-.18-.994 2.9 2.9 0 0 0-1.026-1.563A4.42 4.42 0 0 0 16.017 14a4.5 4.5 0 0 0-2.762.74 2.9 2.9 0 0 0-1.05 1.57 5 5 0 0 0-.186 1.073q-.029.448-.014.897l.004.191v3.53Z"></path>
  <path fill="var(--material-icon-color, #4fc3f7)" d="M29 19c0-7.409-5.268-13-13-13S3 11.591 3 19c-.003 2.317 0 5 1 7.026v-.84c.001-1.673 2.264-3.002 4-3.186v-4.438C8 12.38 10.388 9.931 16 10c5.612-.07 8 2.38 8 7.562V22c1.736.184 3.999 1.513 4 3.187v.839C29 24 29.003 21.317 29 19"></path>
</svg>
;
};

function CaddyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CaddySvg} {...props} />
};

export default CaddyIcon;
