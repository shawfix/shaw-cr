import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GcpSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M184.351 103.816h7.786l22.191-22.191 1.09-9.421a99.743 99.743 0 0 0-162.266 48.664 12.07 12.07 0 0 1 7.786-.467l44.382-7.32s2.258-3.737 3.426-3.503a55.36 55.36 0 0 1 75.76-5.762z"></path>
  <path fill="var(--material-icon-color, #448aff)" d="M245.94 120.868a100 100 0 0 0-30.132-48.587l-31.146 31.146a55.36 55.36 0 0 1 20.323 43.914v5.529a27.72 27.72 0 1 1 0 55.438h-55.439l-5.528 5.606v33.248l5.528 5.528h55.439a72.101 72.101 0 0 0 40.956-131.822z"></path>
  <path fill="var(--material-icon-color, #43a047)" d="M94.03 252.379h55.438v-44.382H94.03a27.6 27.6 0 0 1-11.446-2.492l-7.786 2.414-22.347 22.19-1.947 7.787a71.7 71.7 0 0 0 43.526 14.483"></path>
  <path fill="var(--material-icon-color, #ffc107)" d="M94.03 108.41a72.101 72.101 0 0 0-43.526 129.252l32.158-32.157a27.72 27.72 0 1 1 36.673-36.673l32.158-32.158A72.02 72.02 0 0 0 94.03 108.41"></path>
</svg>
;
};

function GcpIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GcpSvg} {...props} />
};

export default GcpIcon;
