import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderExpoSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1976d2)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M25.182 13.148c-.663-1.013-.82-1.148-2.17-1.148h-.032c-1.35 0-1.499.135-2.17 1.148C20.187 14.1 14 25.473 14 25.79a2.5 2.5 0 0 0 .545 1.513c.434.626 1.183.974 1.728.42.37-.373 4.34-7.24 6.257-9.837a.575.575 0 0 1 .94 0c1.916 2.597 5.887 9.464 6.257 9.837.545.554 1.294.204 1.728-.42A2.5 2.5 0 0 0 32 25.79c-.008-.317-6.195-11.699-6.818-12.642"></path>
</svg>
;
};

function FolderExpoIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderExpoSvg} {...props} />
};

export default FolderExpoIcon;
