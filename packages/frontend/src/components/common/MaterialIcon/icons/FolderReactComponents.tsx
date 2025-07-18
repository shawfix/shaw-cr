import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderReactComponentsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bcd4)" d="m6.922 3.768-.644-.536A1 1 0 0 0 5.638 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7.562a1 1 0 0 1-.64-.232"></path>
  <g fill="#b2ebf2">
    <path d="M10.5 8.399c2.924 0 4.714 1.037 4.714 1.6s-1.79 1.602-4.714 1.602S5.785 10.564 5.785 10s1.79-1.601 4.715-1.601m0-.8c-3.038 0-5.5 1.075-5.5 2.4s2.462 2.402 5.5 2.402S16 11.326 16 10s-2.463-2.401-5.5-2.401"></path>
    <path d="M10.5 9.2a.786.8 0 1 0 .785.8.786.8 0 0 0-.785-.8"></path>
    <path d="M8.322 5.8c.793 0 2.333 1.272 3.538 3.4 1.463 2.58 1.476 4.677.997 4.959a.354.36 0 0 1-.18.04c-.792 0-2.333-1.271-3.538-3.399-1.463-2.58-1.476-4.677-.997-4.96a.354.36 0 0 1 .18-.04m0-.8a1.128 1.149 0 0 0-.572.147c-1.128.663-.81 3.374.708 6.054C9.748 13.478 11.491 15 12.678 15a1.128 1.149 0 0 0 .572-.148c1.127-.663.81-3.373-.71-6.053C11.25 6.522 9.509 5 8.323 5Z"></path>
    <path d="M12.677 5.8a.354.36 0 0 1 .18.04c.48.283.466 2.38-.997 4.96-1.206 2.128-2.746 3.4-3.538 3.4a.354.36 0 0 1-.18-.04c-.48-.284-.466-2.38.997-4.96 1.206-2.128 2.746-3.4 3.538-3.4m0-.8c-1.186 0-2.929 1.522-4.22 3.8-1.517 2.68-1.835 5.39-.707 6.052a1.128 1.149 0 0 0 .572.148c1.186 0 2.929-1.523 4.22-3.8 1.517-2.68 1.835-5.39.708-6.052A1.128 1.149 0 0 0 12.677 5"></path>
  </g>
</svg>
;
};

function FolderReactComponentsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderReactComponentsSvg} {...props} />
};

export default FolderReactComponentsIcon;
