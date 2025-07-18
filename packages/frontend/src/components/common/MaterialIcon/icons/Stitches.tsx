import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function StitchesSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="1em" height="1em">
  <g fill="#cfd8dc" clip-rule="evenodd">
    <path d="M32 8.812C19.193 8.812 8.81 19.193 8.81 32S19.193 55.189 32 55.189 55.188 44.807 55.188 32 44.807 8.812 32 8.812M5.27 32C5.27 17.238 17.239 5.27 32 5.27S58.73 17.239 58.73 32 46.761 58.73 32 58.73 5.27 46.761 5.27 32"></path>
    <path d="M57.179 37.624 24.384 56.558l-.886-1.533L56.294 36.09zM40.826 9.3 8.031 28.236l-.885-1.533L39.941 7.767zm6.527 25.024a.887.887 0 0 1-.324 1.21L17.214 52.747a.885.885 0 0 1-.885-1.534L46.143 34a.885.885 0 0 1 1.21.324m.967-22.422c.245.424.1.965-.323 1.21L18.183 30.325a.885.885 0 0 1-.886-1.534l29.814-17.213a.885.885 0 0 1 1.21.324z"></path>
    <path d="M23.944 25.844a.885.885 0 0 1 1.239-.184L41.15 37.499a.885.885 0 1 1-1.054 1.422L24.128 27.08a.885.885 0 0 1-.184-1.238zm5.963-3.442a.885.885 0 0 1 1.238-.184l15.967 11.838a.885.885 0 0 1-1.054 1.422L30.09 23.64a.885.885 0 0 1-.183-1.239zM17.02 29.043a.885.885 0 0 1 1.235-.205l16.92 12.094a.885.885 0 1 1-1.03 1.44l-16.92-12.094a.885.885 0 0 1-.205-1.235"></path>
  </g>
</svg>
;
};

function StitchesIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={StitchesSvg} {...props} />
};

export default StitchesIcon;
