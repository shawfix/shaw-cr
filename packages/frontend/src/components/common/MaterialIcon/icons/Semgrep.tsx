import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SemgrepSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="M5.918 8.101a3.898 3.898 0 1 0 3.041 6.336l.004-.005.002.001q.055-.069.107-.142a2.7 2.7 0 0 0 .36-.602l.029-.064.03-.067h.13a2 2 0 0 1-.117.348 7 7 0 0 1-.38.705l-.007.01A3.9 3.9 0 0 0 12 15.898a3.9 3.9 0 0 0 2.883-1.277l-.006-.01a7 7 0 0 1-.383-.705 2 2 0 0 1-.117-.348h.13q.035.079.071.155a2.7 2.7 0 0 0 .348.578l.023.03.008.01q.038.052.078.1v.003l.002.002a3.898 3.898 0 1 0 .149-5.047c.238.385.416.677.537.974h-.137c-.238-.388-.319-.543-.545-.802a3.89 3.89 0 0 0-3.04-1.46 3.89 3.89 0 0 0-3.042 1.46c-.226.26-.309.414-.547.802h-.135c.121-.297.297-.589.536-.974a3.9 3.9 0 0 0-2.895-1.287zm0 1.715a2.184 2.184 0 1 1 0 4.368 2.184 2.184 0 0 1 0-4.368m6.082 0a2.184 2.184 0 1 1 0 4.368 2.184 2.184 0 0 1 0-4.368m6.082 0c1.206 0 2.182.978 2.182 2.184a2.182 2.182 0 1 1-4.366 0c0-1.206.978-2.184 2.184-2.184"></path>
</svg>
;
};

function SemgrepIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SemgrepSvg} {...props} />
};

export default SemgrepIcon;
