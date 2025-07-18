import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPublicSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #039be5)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M22 10a10 10 0 1 0 10 10 10 10 0 0 0-10-10m6.918 6H25.96a15.8 15.8 0 0 0-1.342-3.54 8.04 8.04 0 0 1 4.3 3.54M22 12a14.1 14.1 0 0 1 1.89 4h-3.78A14.1 14.1 0 0 1 22 12m-2.618.46A15.8 15.8 0 0 0 18.04 16h-2.958a8.04 8.04 0 0 1 4.3-3.54M14.263 22a7.7 7.7 0 0 1 0-4h3.407a15.5 15.5 0 0 0 0 4Zm.82 2h2.957a15.8 15.8 0 0 0 1.342 3.54 8.04 8.04 0 0 1-4.3-3.54ZM22 28a14.1 14.1 0 0 1-1.89-4h3.78A14.1 14.1 0 0 1 22 28m2.31-6h-4.62a13.4 13.4 0 0 1 0-4h4.62a13.4 13.4 0 0 1 0 4m.308 5.54A15.8 15.8 0 0 0 25.96 24h2.958a8.04 8.04 0 0 1-4.3 3.54M29.737 22H26.33a15.5 15.5 0 0 0 0-4h3.407a7.7 7.7 0 0 1 0 4"></path>
</svg>
;
};

function FolderPublicIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPublicSvg} {...props} />
};

export default FolderPublicIcon;
