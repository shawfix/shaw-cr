import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CairoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #F44336)" d="M13.15 7.455a1.94 1.94 0 0 1-1.938-1.94c0-1.07.87-1.94 1.939-1.94 1.07 0 1.94.87 1.94 1.94s-.87 1.94-1.94 1.94M12 2C6.477 2 2 6.477 2 12c0 2.348.811 4.506 2.166 6.212 1.092-1.532 2.258-2.977 3.721-4.18.042-.035.143-.11.272-.203a2.92 2.92 0 0 0 1.15-1.876v-.012c.37-2.438 1.371-3.279 4.152-3.279q.37.001.786.02c1.423.067 2.243.473 2.34.685a.57.57 0 0 1 .027.363l-.111-.015c-.878-.109-2.231.16-2.419 1.117-.105.544.02 1.143.072 1.693.054.567.104 1.139.099 1.711-.003.044-.035.266-.005.29-1.514-1.449-5.014.37-6.116 1.17q.17-.058.34-.122c1.05-.357 4.24-1.314 5.47-.256 1.043 1.277.104 3.634-.673 4.802a9.7 9.7 0 0 1-1.64 1.87q.184.009.369.01c5.523 0 10-4.477 10-10S17.523 2 12 2"></path>
</svg>
;
};

function CairoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CairoSvg} {...props} />
};

export default CairoIcon;
