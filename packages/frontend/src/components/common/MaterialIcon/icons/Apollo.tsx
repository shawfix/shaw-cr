import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ApolloSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7e57c2)" d="M31.93 14.457a.51.51 0 0 0-.506-.457h-2.01a.497.497 0 0 0-.491.559l.014.134c.616 6.284-4.097 12.817-10.29 14.044A13.009 13.009 0 1 1 24.3 6h4.19a16.013 16.013 0 1 0 3.44 8.457"></path>
  <path fill="var(--material-icon-color, #7e57c2)" d="M17 8h-3L8 24h3z"></path>
  <path fill="var(--material-icon-color, #7e57c2)" d="M15 8h3l6 16h-3zm2.88 13H12v-3h4.75z"></path>
  <circle cx="24.533" cy="4.267" r="4.267" fill="#7e57c2"></circle>
</svg>
;
};

function ApolloIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ApolloSvg} {...props} />
};

export default ApolloIcon;
