import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CabalSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="1em" height="1em">
  <g transform="translate(0 -822.52)">
    <rect width="107.25" height="156.59" x="405.55" y="967.22" fill="#0097A7" rx="12.306" ry="12.31" transform="matrix(-.98339 .18149 .60192 .79856 0 0)"></rect>
    <rect width="108.34" height="123.15" x="-1156.5" y="1461.9" fill="#3F51B5" rx="10.69" ry="12.31" transform="matrix(-.98528 .17093 -.59175 .80612 0 0)"></rect>
    <path fill="#3F51B5" d="M52.112 965.158c-1.343 3.515-26.292 23.248-25.744 27.277.548 4.03 29.812 16.023 32.04 19.027s10.545 41.668 13.603 42.5 18.828-31.274 21.548-32.932 32.808 2.503 34.15-1.01c1.343-3.515-18.174-35.352-18.721-39.381s9.732-40.12 7.502-43.125-30.06 9.427-33.118 8.594-26.793-27.3-29.514-25.643-.405 41.177-1.747 44.693z"></path>
  </g>
</svg>
;
};

function CabalIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CabalSvg} {...props} />
};

export default CabalIcon;
