import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderYarnSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="m13.844 7.536-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></path>
  <path fill="var(--material-icon-color, #b3e5fc)" d="M31.445 24.006a7.2 7.2 0 0 0-2.736 1.301 16.2 16.2 0 0 1-4.038 1.886 1.1 1.1 0 0 1-.68.394 42 42 0 0 1-4.455.413c-.805.006-1.296-.212-1.434-.554a1.14 1.14 0 0 1 .58-1.474l.02-.008a2.5 2.5 0 0 1-.357-.27c-.118-.122-.243-.368-.28-.277-.156.392-.237 1.352-.654 1.784a2.04 2.04 0 0 1-2.3.052c-.704-.386.05-1.295.05-1.295a.497.497 0 0 1-.679-.23l-.007-.015a3.56 3.56 0 0 1-.46-2.106 3.92 3.92 0 0 1 1.221-2.08 6.85 6.85 0 0 1 .455-3.144 7.4 7.4 0 0 1 2.187-2.614s-1.34-1.527-.84-2.912c.322-.903.453-.895.56-.935a2.5 2.5 0 0 0 1.003-.61 3.58 3.58 0 0 1 3.046-1.213s.8-2.53 1.546-2.035a13.3 13.3 0 0 1 1.06 2.062s.885-.535.985-.336a8.35 8.35 0 0 1 .361 4.382 10.1 10.1 0 0 1-1.795 3.863 7.9 7.9 0 0 1 1.808 2.778 8.4 8.4 0 0 1 .181 3.722l.024.044a4.44 4.44 0 0 0 2.343-.934 5.77 5.77 0 0 1 2.954-1.147.75.75 0 0 1 .873.62.775.775 0 0 1-.542.888"></path>
</svg>
;
};

function FolderYarnIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderYarnSvg} {...props} />
};

export default FolderYarnIcon;
