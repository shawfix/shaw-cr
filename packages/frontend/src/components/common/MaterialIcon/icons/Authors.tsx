import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AuthorsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #f44336)" d="M15.787 13.71c-.275 0-.587 0-.918.047 1.098.796 1.865 1.847 1.865 3.267v2.367h5.68v-2.367c0-2.206-4.42-3.314-6.627-3.314m-7.575 0c-2.206 0-6.628 1.108-6.628 3.314v2.367H14.84v-2.367c0-2.206-4.421-3.314-6.628-3.314m0-1.894a2.84 2.84 0 0 0 2.841-2.84 2.84 2.84 0 0 0-2.84-2.84 2.84 2.84 0 0 0-2.841 2.84 2.84 2.84 0 0 0 2.84 2.84m7.575 0a2.84 2.84 0 0 0 2.84-2.84 2.84 2.84 0 0 0-2.84-2.84 2.84 2.84 0 0 0-2.84 2.84 2.84 2.84 0 0 0 2.84 2.84"></path>
</svg>
;
};

function AuthorsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AuthorsSvg} {...props} />
};

export default AuthorsIcon;
