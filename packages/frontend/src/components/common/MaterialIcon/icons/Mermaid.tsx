import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MermaidSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 64 64" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff4081)" d="M56.954 11.425C45.907 10.952 35.763 17.749 32 28.146 28.236 17.749 18.093 10.952 7.046 11.425a25.46 25.46 0 0 0 11.073 22.072 13.66 13.66 0 0 1 5.92 11.286v7.815h15.924v-7.815a13.66 13.66 0 0 1 5.92-11.286 25.44 25.44 0 0 0 11.072-22.072z"></path>
</svg>
;
};

function MermaidIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MermaidSvg} {...props} />
};

export default MermaidIcon;
