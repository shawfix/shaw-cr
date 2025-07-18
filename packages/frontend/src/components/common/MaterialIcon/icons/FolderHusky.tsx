import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderHuskySvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #607d8b)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #cfd8dc)" d="M24.942 12.076c.872.35 1.217 1.731.761 3.095-.452 1.357-1.518 2.184-2.395 1.84-.869-.34-1.22-1.725-.771-3.093.444-1.36 1.523-2.179 2.405-1.842m4.879 2.832c.738.602.566 1.947-.371 3.023-.961 1.07-2.321 1.46-3.057.87-.74-.595-.561-1.937.388-3.005.948-1.078 2.308-1.468 3.04-.888m-10.343-1.795c.97.116 1.68 1.34 1.62 2.724-.104 1.386-.935 2.421-1.9 2.31-.963-.111-1.668-1.326-1.588-2.716s.928-2.425 1.868-2.319m12.285 7.131c.561.765.094 2.021-1.064 2.785s-2.555.76-3.133-.026c-.578-.782-.102-2.024 1.04-2.808 1.163-.742 2.571-.738 3.157.05m-5.388 6.733a2.14 2.14 0 0 1-1.984 1.017c-1.545-.147-2.323-2.153-3.68-2.94-1.358-.79-3.515-.422-4.367-1.731a2.41 2.41 0 0 1 .065-2.586c.711-.952 2.249-.792 3.4-1.12 1.519-.409 3.245-1.831 4.617-1.033 1.366.79 1.06 3 1.41 4.53.277 1.278 1.134 2.718.539 3.863"></path>
</svg>
;
};

function FolderHuskyIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderHuskySvg} {...props} />
};

export default FolderHuskyIcon;
