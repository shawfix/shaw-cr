import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderDirectiveOpenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M14.484 6H4.72a1 1 0 0 0-.949.684L2 12V5h12a1 1 0 0 0-1-1H7.562a1 1 0 0 1-.64-.232l-.644-.536A1 1 0 0 0 5.638 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11l2.403-5.606A1 1 0 0 0 14.483 6"></path>
  <g fill="#ffcdd2">
    <path d="m11.5 6.001-1.5 2h3z"></path>
    <path d="M11 7v2h1V7zm-1 3H8v1.001h2z"></path>
    <path d="m9 9-2 1.5L9 12zm2 3h1v2h-1Z"></path>
    <path d="m10 13 1.5 2 1.5-2Zm2.715-3v1.001H15v-1Z"></path>
    <path d="m14 9 2 1.5-2 1.5Z"></path>
  </g>
</svg>
;
};

function FolderDirectiveOpenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderDirectiveOpenSvg} {...props} />
};

export default FolderDirectiveOpenIcon;
