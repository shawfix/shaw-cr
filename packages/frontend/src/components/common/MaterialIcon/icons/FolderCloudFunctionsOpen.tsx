import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderCloudFunctionsOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 32 32" width="1em" height="1em">
  <defs>
    <path id="a" fill="#bbdefb" d="m26 14 2-2 4 4-2 2z"></path>
  </defs>
  <path fill="var(--material-icon-color, #2196f3)" fill-rule="nonzero" d="M28.967 12H9.442c-.859 0-1.627.553-1.898 1.368L4 24V10h24c0-1.097-.903-2-2-2H15.124c-.468 0-.921-.164-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4c-1.097 0-2 .903-2 2v16c0 1.097.903 2 2 2h22l4.805-11.212c.107-.249.162-.517.162-.788 0-1.097-.903-2-2-2"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M21.982 17.988h2.037v1.996h-2.037zm-2.983.021h2.037v1.996h-2.037zm5.998 0h1.996v1.996h-1.996zM29 14h3v10h-3z"></path>
  <path fill="var(--material-icon-color, #bbdefb)" d="M14 14h3v10h-3z"></path>
  <use xlink:href="#a" transform="translate(0 -2)"></use>
  <use xlink:href="#a" transform="matrix(1 0 0 -1 0 40)"></use>
  <use xlink:href="#a" transform="matrix(-1 0 0 1 46 -2)"></use>
  <use xlink:href="#a" transform="rotate(180 23 20)"></use>
</svg>
;
};

function FolderCloudFunctionsOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderCloudFunctionsOpenSvg} {...props} />
};

export default FolderCloudFunctionsOpenIcon;
