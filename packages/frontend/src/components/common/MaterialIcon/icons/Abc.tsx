import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AbcSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff5722)" d="M13.295 11.033V7.65l2.126-2.136c.774-.763.919-1.981.377-2.929a2.38 2.38 0 0 0-2.068-1.217c-.203 0-.435.029-.619.087-1.044.28-1.749 1.246-1.749 2.33v3.13L8.327 9.98a5.75 5.75 0 0 0-1.208 6.214 5.62 5.62 0 0 0 4.243 3.432v.59a.5.5 0 0 1-.483.482h-1.45v1.934h1.45a2.43 2.43 0 0 0 2.416-2.417v-.483c1.962 0 4.02-1.856 4.02-4.591 0-2.223-1.855-4.108-4.02-4.108m0-7.249c0-.222.106-.396.31-.454a.47.47 0 0 1 .54.222.48.48 0 0 1-.077.59l-.773.83V3.785m-1.933 7.732c-.938.619-1.643 1.682-1.894 2.668l1.894.503v2.948a3.73 3.73 0 0 1-2.484-2.185 3.8 3.8 0 0 1 .802-4.098l1.682-1.769zm1.933 6.283v-4.89c1.13 0 2.107 1.062 2.107 2.232 0 1.691-1.227 2.658-2.107 2.658"></path>
</svg>
;
};

function AbcIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AbcSvg} {...props} />
};

export default AbcIcon;
