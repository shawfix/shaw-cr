import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ProtractorSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80" width="1em" height="1em">
  <defs>
    <clipPath id="a">
      <path fill="#424242" d="M-2.983 69.251h69.412V2.143H-2.983z"></path>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" transform="matrix(1.1304 0 0 -1.1304 5.714 82.137)">
    <g stroke-width=".1">
      <path fill="#e53935" d="M61.216 37.276C61.216 20.217 47.39 6.39 30.33 6.39S-.554 20.218-.554 37.276 13.27 68.161 30.33 68.161c17.059 0 30.885-13.827 30.885-30.885"></path>
      <path fill="#D32F2F" d="m46.274 52.172-10.504.096-6.142 6.142-7.21-4.789 1.245-1.243-2.92.026-9.913-16.682H6.94l2.44-2.44-2.458-4.137L29.67 6.398q.33-.007.66-.008c17.042 0 30.858 13.806 30.885 30.841L46.273 52.173"></path>
      <path fill="#f5f5f5" d="M15.114 35.02c0 8.404 6.813 15.214 15.217 15.214s15.214-6.81 15.214-15.215zm34.206-.702v1.404h4.401a23.3 23.3 0 0 1-6.353 15.342l-3.289-3.29-.992.995 3.287 3.289a23.3 23.3 0 0 1-15.34 6.352l-.002-4.4h-1.404v4.4a23.3 23.3 0 0 1-15.34-6.352l3.288-3.29-.995-.991-3.288 3.287A23.32 23.32 0 0 1 6.94 35.722h4.4V34.32H6.921v-5.151H53.74v5.15h-4.42"></path>
    </g>
  </g>
</svg>
;
};

function ProtractorIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ProtractorSvg} {...props} />
};

export default ProtractorIcon;
