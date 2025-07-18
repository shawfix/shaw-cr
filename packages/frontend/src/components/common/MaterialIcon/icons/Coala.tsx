import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CoalaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, #90a4ae)" d="M22 8.95c0-2.59-1.74-3.63-3.89-3.63-.9 0-1.83.2-2.6.57-1-.69-2.17-1.09-3.51-1.09s-2.51.41-3.51 1.09c-.78-.38-1.7-.57-2.6-.57C3.74 5.32 2 6.35 2 8.95c0 2.14 1.18 3.56 2.8 4-.02.3-.04.6-.04.89 0 3.18 2.51 4.26 4.77 4.63.61.45 1.49.73 2.47.73s1.86-.28 2.47-.73c2.26-.36 4.77-1.44 4.77-4.63 0-.3-.01-.6-.04-.89 1.62-.44 2.8-1.87 2.8-4"></path>
  <path xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, #f8bbd0)" d="M7.31 6.9c-.18-.02-.35-.03-.53-.03-1.72 0-3.11.83-3.11 2.9 0 1.2.47 2.12 1.19 2.68.26-2.11 1.11-4.12 2.45-5.55m9.91-.03c-.18 0-.35.01-.53.03 1.34 1.43 2.19 3.44 2.45 5.55.72-.56 1.19-1.48 1.19-2.68 0-2.07-1.39-2.9-3.11-2.9"></path>
  <path xmlns="http://www.w3.org/2000/svg" fill="var(--material-icon-color, #263238)" d="M14.07 15.21c0 1.86-.96 2.33-2.07 2.33s-2.07-.47-2.07-2.33.96-3.36 2.07-3.36 2.07 1.51 2.07 3.36M9.5 11.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m7.5 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"></path>
</svg>
;
};

function CoalaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CoalaSvg} {...props} />
};

export default CoalaIcon;
