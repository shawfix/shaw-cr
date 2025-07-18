import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderPlasticSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff9800)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #fffde7)" d="m30.973 14.255-6.955-3.984a2.05 2.05 0 0 0-2.033 0l-6.955 3.984A2.05 2.05 0 0 0 14 16.032v7.94a1.93 1.93 0 0 0 1.016 1.708l.984.56v-9.306a1.7 1.7 0 0 1 .14-.58 1.64 1.64 0 0 1 .689-.798l5.398-3.092a1.59 1.59 0 0 1 1.576 0l5.398 3.092a1.6 1.6 0 0 1 .749.983 1.6 1.6 0 0 1 .05.395v6.138a1.58 1.58 0 0 1-.797 1.375l-5.406 3.096a1.6 1.6 0 0 1-.797.21v2.246a2.06 2.06 0 0 0 1.02-.27l6.95-3.982A2.05 2.05 0 0 0 32 23.97v-7.938a2 2 0 0 0-.076-.548 2.03 2.03 0 0 0-.95-1.229Z"></path>
  <path fill="var(--material-icon-color, #fffde7)" d="m23.539 25.412 3.89-2.228a1.14 1.14 0 0 0 .57-.985v-4.402a1.14 1.14 0 0 0-.572-.988l-3.862-2.211a1.14 1.14 0 0 0-1.13 0l-3.862 2.211a1.15 1.15 0 0 0-.512.618 1.2 1.2 0 0 0-.061.37l-.014 9.578L20 28.505v-4.468l2.402 1.375a1.15 1.15 0 0 0 1.137 0m-3.2-3.5a.68.68 0 0 1-.339-.585v-2.649a.7.7 0 0 1 .04-.232.68.68 0 0 1 .304-.36l2.321-1.329a.68.68 0 0 1 .671 0l2.322 1.33a.68.68 0 0 1 .328.45 1 1 0 0 1 .014.141v2.65a.68.68 0 0 1-.34.585l-2.322 1.329a.7.7 0 0 1-.339.09.7.7 0 0 1-.339-.089Z"></path>
</svg>
;
};

function FolderPlasticIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderPlasticSvg} {...props} />
};

export default FolderPlasticIcon;
