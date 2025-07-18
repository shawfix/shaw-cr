import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ParcelSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffb74d)" d="M2.007 10.96a.985.985 0 0 1-.37-1.37L3.137 7c.11-.2.28-.34.47-.42l7.83-4.4c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.19.1.35.26.44.46l1.45 2.52c.28.48.11 1.09-.36 1.36l-1 .58v4.96c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44a.99.99 0 0 1-.53-.88v-5.54c-.3.17-.68.18-1 0m10-6.81v6.7l5.96-3.35zm-7 11.76 6 3.38v-6.71l-6-3.37zm14 0v-3.22l-5 2.9c-.33.18-.7.17-1 .01v3.69zm-5.15-2.55 6.28-3.63-.58-1.01-6.28 3.63z"></path>
</svg>
;
};

function ParcelIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ParcelSvg} {...props} />
};

export default ParcelIcon;
