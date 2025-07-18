import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderFirebaseSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff9100)" fill-rule="nonzero" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4c-1.097 0-2 .903-2 2v16c0 1.097.903 2 2 2h24c1.097 0 2-.903 2-2V10c0-1.097-.903-2-2-2H15.124c-.468 0-.921-.164-1.28-.464"></path>
  <path fill="var(--material-icon-color, #ffe0b2)" d="M24 28.014s-4.584.213-7-4.014c-.66-1.156-1.006-2.805-1-4 .012-2.264.962-3.881 1.038-4 .117-.181 2.954-.867 4.962 0s3.979 3.215 4 6-2.275 4.565-2.691 4.881.691 1.133.691 1.133M22 25.5c2.051-1.646 1.875-2.063 2-3.5s-1.007-3.071-2-4-2.934-.65-3.5-.5c-2.418 5.405 3.5 8 3.5 8"></path>
  <path fill="var(--material-icon-color, #ffe0b2)" d="m24 28.014 2.527-.941s-1.988-1.265-2.909-2.168C21.381 22.71 20.021 20.085 20 16s4-8 4-8 8.063 6.276 8 12c-.644 8.183-8 8.014-8 8.014m4-3.023c1.044-1.135 1.95-2.042 2-4.991.075-4.381-6-9.5-6-9.5s-1.856 2.393-2 5.5c-.338 7.273 6 8.991 6 8.991"></path>
  <path fill="var(--material-icon-color, #ffe0b2)" d="M22.34 25.64s3.453-.086 5.66-.649c3.451-.879-1.022 2.191-1.022 2.191L24 28.015l-1.313-.536z"></path>
</svg>
;
};

function FolderFirebaseIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderFirebaseSvg} {...props} />
};

export default FolderFirebaseIcon;
