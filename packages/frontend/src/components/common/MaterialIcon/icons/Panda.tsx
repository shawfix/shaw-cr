import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PandaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffd740)" d="M4.524 20.862c-.258-.317-.958-2.683-1.319-4.451-1.238-6.075.1-10.397 3.824-12.354 1.596-.838 2.918-1.114 5.37-1.118 3.212-.007 5.102.617 6.808 2.244 2.52 2.403 2.735 6.732.459 9.222-1.267 1.387-4.598 2.82-6.551 2.82h-.593l-.408-1.239c-.224-.68-.456-1.502-.516-1.825l-.108-.586.656.088c.777.104 1.89-.27 2.365-.798.998-1.102.824-3.595-.302-4.333-1.063-.697-3.124-.653-4.166.089-1.888 1.345-1.382 6.248 1.172 11.343.248.495.406.944.351.999-.054.055-1.624.1-3.49.1-2.519 0-3.431-.052-3.552-.2z"></path>
</svg>
;
};

function PandaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PandaSvg} {...props} />
};

export default PandaIcon;
