import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function IfanrCloudSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M126.9 41.6c30.2 0 56.1 18.5 67.1 44.8 29.2 6.3 51.1 32.2 51.1 63.3 0 35.7-29 64.7-64.7 64.7H60.7c-27.5 0-49.7-22.3-49.7-49.7 0-25.3 18.8-46.1 43.2-49.3v-.8c0-40.3 32.6-73 72.7-73m2.6 49c-3.5 0-6.3 2.8-6.3 6.4v86.7c0 3.5 2.8 6.4 6.3 6.4s6.3-2.8 6.3-6.4V97c0-3.5-2.8-6.4-6.3-6.4m-41 25.7c-.2 10.4-1.6 21-3.7 30.4-.9 3.9-1.8 7.4-2.8 10.1-.4 1.2-.8 2.2-1.1 3-.1.3-.3.6-.4.7-2.2 2.7-1.7 6.7 1 8.9s6.7 1.8 8.9-1c4.8-6 10.3-30.4 10.7-51.9.1-3.5-2.7-6.4-6.2-6.5s-6.3 2.8-6.4 6.3m75.3-6.3h-.1c-3.5.1-6.3 3-6.2 6.5.4 21.5 5.9 45.9 10.7 51.9 2.2 2.7 6.2 3.2 8.9 1s3.1-6.2 1-8.9c-.1-.2-.2-.4-.4-.7-.3-.7-.7-1.8-1.1-3-.9-2.7-1.9-6.2-2.8-10.1-2.1-9.4-3.5-20-3.7-30.4-.1-3.5-3-6.3-6.5-6.2z"></path>
</svg>
;
};

function IfanrCloudIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={IfanrCloudSvg} {...props} />
};

export default IfanrCloudIcon;
