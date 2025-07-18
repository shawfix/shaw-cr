import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CthreeSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #0288d1)" d="M11.563 22A5.57 5.57 0 0 1 6 16.437v-2.873A5.57 5.57 0 0 1 11.563 8H14V2h-2.437A11.563 11.563 0 0 0 0 13.563v2.873A11.564 11.564 0 0 0 11.563 28H14v-6Zm20.129-4.131A5.17 5.17 0 0 0 28 14c3.39-.894 4.268-5.241 2.792-8.108-3.305-6.304-14.028-4.545-15.407 2.381l4.89 1.255a3.17 3.17 0 0 1 3.04-2.754 3 3 0 0 1 1.814.702c1.19.911 1.249 3.785-.353 4.232A9 9 0 0 1 22 12h-2v4h2c1.7.107 3.362.577 4.23 2.313a3.4 3.4 0 0 1 .377 1.636 3.25 3.25 0 0 1-.297 1.464c-.919 1.985-3.984 2.166-5.407.749a4.43 4.43 0 0 1-1.285-2.143l-4.89 1.429c2.447 10.449 19.993 7.76 16.964-3.58"></path>
</svg>
;
};

function CthreeIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CthreeSvg} {...props} />
};

export default CthreeIcon;
