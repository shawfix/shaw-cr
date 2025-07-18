import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderWordpressSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0277BD)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #e1f5fe)" d="M22 8a10 10 0 0 0-8.356 4.51l.642.013c1.049 0 2.669-.125 2.669-.125a.413.413 0 0 1 .07.824l-1.155.119 3.648 10.803 2.188-6.56-1.559-4.243-1.061-.12a.414.414 0 0 1 .07-.823l2.632.125c1.049 0 2.67-.125 2.67-.125a.413.413 0 0 1 .062.824l-1.143.119 3.612 10.72 1.002-3.332a12.7 12.7 0 0 0 .757-3.228 5.2 5.2 0 0 0-.83-2.764 4.67 4.67 0 0 1-.978-2.34 1.73 1.73 0 0 1 1.681-1.771h.127A10 10 0 0 0 22.001 8Zm8.777 5.201.07 1.037a9.5 9.5 0 0 1-.771 3.576l-3.053 8.822a10 10 0 0 0 3.754-13.435m-17.916.724A10.2 10.2 0 0 0 12 18.003 9.98 9.98 0 0 0 17.64 27Zm9.315 4.952-2.996 8.72a10.06 10.06 0 0 0 6.144-.164l-.073-.142Z"></path>
</svg>
;
};

function FolderWordpressIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderWordpressSvg} {...props} />
};

export default FolderWordpressIcon;
