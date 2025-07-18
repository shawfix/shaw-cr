import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function BiomeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 74" width="1em" height="1em">
  <path fill="var(--material-icon-color, #42A5F5)" d="M37 9 22.745 33.69a32.2 32.2 0 0 1 16.869-.584l4.818 1.137-4.533 19.22-4.825-1.137c-5.93-1.399-11.628 1.716-14.036 6.685l-4.46-2.158c3.404-7.029 11.425-11.285 19.637-9.347l2.259-9.58A27.23 27.23 0 0 0 5 64.424l64 .001z"></path>
</svg>
;
};

function BiomeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={BiomeSvg} {...props} />
};

export default BiomeIcon;
