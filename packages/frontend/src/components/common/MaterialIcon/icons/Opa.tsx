import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function OpaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #bdbdbd)" d="M29.12 10.065c0-2.5-4.686-8.122-4.998-8.434 1.124 5.057.984 4.302 1.172 5.917a2.44 2.44 0 0 1-.1 1.261c-.78 1.802-3.572 2.817-3.572 2.817l4.373 3.749s3.125-3.124 3.125-5.31m-26.24 0c0-2.5 4.686-8.122 4.998-8.434-1.124 5.057-.984 4.302-1.172 5.917a2.44 2.44 0 0 0 .1 1.261c.78 1.802 3.572 2.817 3.572 2.817l-4.373 3.749S2.88 12.25 2.88 10.065"></path>
  <path fill="var(--material-icon-color, #546e7a)" d="M16 8c4.897 0 8.452 3.007 9.996 7.375V22s-3.124 2.122-4.998 3.371A31.7 31.7 0 0 0 16.312 30H16Z"></path>
  <path fill="var(--material-icon-color, #78909c)" d="M16 8c-4.897 0-8.452 3.007-9.996 7.375V22s3.124 2.122 4.998 3.371A31.7 31.7 0 0 1 15.688 30H16Z"></path>
  <circle cx="16" cy="16" r="2" fill="#FAFAFA"></circle>
</svg>
;
};

function OpaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={OpaSvg} {...props} />
};

export default OpaIcon;
