import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ContentlayerSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, none)" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #651FFF)" fill-rule="evenodd" stroke="#651FFF" stroke-width="1.073" d="M-2.482.404A1.93 1.93 0 0 1-.16.427l6.967 5.356a1.93 1.93 0 0 1 0 3.058L4.15 10.883l2.7 2.171c.983.79.956 2.294-.053 3.048l-7.152 5.344a1.93 1.93 0 0 1-2.439-.106l-5.596-4.996-.782-.672c-3.492-3-3.062-8.526.845-10.951zm5.6 9.65L-.13 7.444a1.93 1.93 0 0 0-2.384-.026l-2.403 1.848a1.93 1.93 0 0 0 0 3.058l2.42 1.86a1.93 1.93 0 0 0 2.352 0l3.246-2.494 2.944 2.366a.643.643 0 0 1-.018 1.016l-7.152 5.344a.64.64 0 0 1-.813-.035l-5.6-5-.796-.684c-2.839-2.439-2.482-6.935.705-8.896l.023-.014 5.888-4.349a.64.64 0 0 1 .774.008l6.967 5.356a.643.643 0 0 1 0 1.02zm-1.049.807-2.998 2.304a.64.64 0 0 1-.783 0l-2.421-1.86a.643.643 0 0 1 0-1.02l2.403-1.848a.64.64 0 0 1 .795.009z" clip-rule="evenodd" transform="matrix(.5949 0 0 .61208 9.182 1.311)"></path>
</svg>
;
};

function ContentlayerIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ContentlayerSvg} {...props} />
};

export default ContentlayerIcon;
