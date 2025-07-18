import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function StrykerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <g fill="#ef5350">
    <path d="M11.095 2.498v1.404a8.14 8.14 0 0 0-7.194 7.193H2.499v1.81h1.404a8.14 8.14 0 0 0 7.193 7.194v1.403h1.81v-1.403a8.14 8.14 0 0 0 7.193-7.194h1.404v-1.81h-1.404a8.14 8.14 0 0 0-7.193-7.193V2.498zm0 3.231v1.294h1.81V5.729a6.315 6.315 0 0 1 5.366 5.366h-1.294v1.81h1.294a6.315 6.315 0 0 1-5.366 5.366v-1.294h-1.81v1.294a6.315 6.315 0 0 1-5.366-5.366h1.294v-1.81H5.729a6.315 6.315 0 0 1 5.366-5.366" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"></path>
    <path d="M10.945 2.348V3.79a8.26 8.26 0 0 0-7.154 7.154H2.347v2.11h1.444a8.26 8.26 0 0 0 7.154 7.154v1.443h2.11V20.21a8.26 8.26 0 0 0 7.154-7.154h1.443v-2.11H20.21a8.26 8.26 0 0 0-7.155-7.154V2.348zm.299.3h1.512v1.39l.132.013a7.99 7.99 0 0 1 7.06 7.06l.015.133h1.388v1.512h-1.388l-.014.133a7.99 7.99 0 0 1-7.06 7.06l-.133.014v1.389h-1.512v-1.39l-.133-.013a7.99 7.99 0 0 1-7.06-7.06l-.014-.133H2.648v-1.512h1.389l.014-.133a7.99 7.99 0 0 1 7.06-7.06l.133-.014zm0 2.909-.17.023a6.466 6.466 0 0 0-5.494 5.494l-.024.17h1.317v1.512H5.556l.024.17a6.466 6.466 0 0 0 5.494 5.494l.17.023v-1.316h1.512v1.316l.17-.023a6.466 6.466 0 0 0 5.494-5.494l.023-.17h-1.316v-1.512h1.316l-.023-.17a6.466 6.466 0 0 0-5.495-5.494l-.17-.023v1.316h-1.511zm-.299.373v1.244h2.11V5.93a6.13 6.13 0 0 1 5.015 5.015h-1.244v2.11h1.244a6.13 6.13 0 0 1-5.016 5.015v-1.244h-2.109v1.244a6.13 6.13 0 0 1-5.016-5.015h1.244v-2.11H5.93a6.13 6.13 0 0 1 5.016-5.015z"></path>
  </g>
</svg>
;
};

function StrykerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={StrykerSvg} {...props} />
};

export default StrykerIcon;
