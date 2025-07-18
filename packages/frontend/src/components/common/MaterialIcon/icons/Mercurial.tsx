import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MercurialSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <g fill="#78909c">
    <path d="M21.29 12.66c.287-4.983-3.45-10.35-9.202-9.68-2.588.288-4.121 1.63-4.792 3.067-1.15 2.397.095 5.56 3.834 6.614 2.3.67 2.78 1.63 2.492 2.78-.288 1.054-1.055 2.204-1.246 3.163-.096.287-.096.575-.096.862.096 2.109 4.409 2.972 7.764-2.684.766-1.15 1.15-2.587 1.246-4.121zM6.433 11.51v-.383c0-.096 0-.191-.096-.287-.192-.959-.958-1.534-1.917-1.438s-1.63.863-1.725 1.821v.48c.096 1.054 1.054 1.82 2.013 1.725 1.054-.192 1.725-.959 1.725-1.917z"></path>
    <path d="M10.65 16.59c-.383-1.533-1.917-2.491-3.45-2.012-1.246.287-2.013 1.342-2.109 2.588-.096.383 0 .767.096 1.15.383 1.534 2.013 2.492 3.546 2.013 1.342-.383 2.205-1.63 2.109-3.067-.096-.192-.096-.384-.192-.671z"></path>
  </g>
</svg>
;
};

function MercurialIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MercurialSvg} {...props} />
};

export default MercurialIcon;
