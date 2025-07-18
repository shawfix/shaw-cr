import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GoGopherSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <g fill="#4DD0E1">
    <path d="M10.575 1.695c-2.634 0-4.756 2.453-4.756 5.502v4.6l-.027-.003v4.71c0 3.05 2.122 5.502 4.756 5.502h2.287c2.634 0 4.756-2.453 4.756-5.502v-4.6l.027.003v-4.71c0-3.049-2.122-5.502-4.756-5.502z"></path>
    <rect width="2.289" height="3.335" x="-1.177" y="6.093" ry="1.125" transform="matrix(.48489 -.87457 .85979 .51065 0 0)"></rect>
    <rect width="2.297" height="3.39" x="10.261" y="-15.076" ry="1.143" transform="matrix(.44646 .8948 -.89204 .45195 0 0)"></rect>
  </g>
  <g data-mit-no-recolor transform="translate(.282 -.134)">
    <circle cx="9.267" cy="5.13" r="2.054" fill="#FAFAFA" stroke="#616161" stroke-width=".1"></circle>
    <circle cx="14.214" cy="5.116" r="2.054" fill="#FAFAFA" stroke="#616161" stroke-width=".1"></circle>
    <ellipse cx="8.039" cy="5.051" fill="#212121" rx=".792" ry=".901"></ellipse>
    <ellipse cx="8.51" cy="5.365" fill="#FAFAFA" rx=".138" ry=".166"></ellipse>
    <ellipse cx="12.945" cy="5.189" fill="#212121" rx=".792" ry=".901"></ellipse>
    <ellipse cx="13.414" cy="5.446" fill="#FAFAFA" rx=".138" ry=".166"></ellipse>
    <ellipse cx="-12.982" cy="-3.409" fill="#FFE0B2" rx=".708" ry="1.026" transform="rotate(-129.403)"></ellipse>
    <ellipse cx="11.734" cy="8.203" fill="#212121" stroke="#FAFAFA" stroke-width=".162" rx="1.208" ry=".68"></ellipse>
    <path fill="#FAFAFA" stroke="#FAFAFA" stroke-width=".155" d="m11.792 9.556.763.138a.403.689 0 0 1 .008.138.403.689 0 0 1-.403.69.403.689 0 0 1-.403-.69.403.689 0 0 1 .035-.276z"></path>
    <path fill="#FAFAFA" stroke="#FAFAFA" stroke-width=".153" d="m11.772 9.553-.757.135a.4.672 0 0 0-.008.134.4.672 0 0 0 .4.673.4.672 0 0 0 .4-.672.4.672 0 0 0-.035-.27z"></path>
    <g fill="#FFE0B2">
      <ellipse cx="1.841" cy="-21.563" rx=".707" ry="1.026" transform="scale(1 -1)rotate(50.597)"></ellipse>
      <ellipse cx="-17.281" cy="-21.784" rx=".864" ry="1.27" transform="matrix(.3054 -.95222 -.97065 -.24051 0 0)"></ellipse>
      <ellipse cx="22.885" cy="2.587" rx=".864" ry="1.27" transform="matrix(.22652 .97401 .95652 -.29167 0 0)"></ellipse>
      <path stroke="#546E7A" stroke-width=".1" d="M10.708 8.392a.594.594 0 0 0-.594.597v.115c0 .331.265.598.594.598h.386a.973.772 0 0 1 .697-.235.973.772 0 0 1 .698.235h.334c.33 0 .595-.267.595-.598V8.99a.595.595 0 0 0-.595-.597h-2.115z"></path>
    </g>
  </g>
</svg>
;
};

function GoGopherIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GoGopherSvg} {...props} />
};

export default GoGopherIcon;
