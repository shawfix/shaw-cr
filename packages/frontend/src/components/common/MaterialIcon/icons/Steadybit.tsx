import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function SteadybitSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #e53935)" d="M19.2 10.7c-.2 0-.3 0-.5.1L16.3 7c.6-.5 1.1-1.3 1.1-2.2 0-1.6-1.3-3-3-3s-3 1.3-3 3c0 .3 0 .5.1.8L7 7.9c-.5-.6-1.3-1-2.2-1-1.6 0-3 1.3-3 3s1.3 3 3 3c.2 0 .4 0 .6-.1l2.3 4.3c-.6.5-.9 1.3-.9 2.1 0 1.6 1.3 3 3 3s3-1.3 3-3c0-.2 0-.4-.1-.6l4.2-3.1c.5.7 1.4 1.1 2.3 1.1 1.6 0 3-1.3 3-3s-1.4-2.9-3-2.9m-4.8-6.9c.6 0 1 .5 1 1 0 .6-.5 1-1 1s-1-.5-1-1c0-.6.4-1 1-1m-9.6 7.1c-.6 0-1-.5-1-1 0-.6.5-1 1-1s1 .5 1 1c.1.6-.4 1-1 1m2 1.2c.6-.5 1-1.3 1-2.2 0-.3 0-.5-.1-.7l4.5-2.4c.2.2.4.4.7.5l-2.8 9h-.3c-.3 0-.6.1-.8.1zm3 8.2c-.6 0-1-.5-1-1 0-.6.5-1 1-1s1 .5 1 1-.4 1-1 1m6.4-6.6c0 .2 0 .3.1.5l-4.2 3.1-.6-.6 2.9-9h.1c.2 0 .4 0 .6-.1l2.3 3.7c-.7.6-1.2 1.5-1.2 2.4m3 1c-.6 0-1-.5-1-1 0-.6.5-1 1-1s1 .5 1 1c0 .6-.5 1-1 1"></path>
</svg>
;
};

function SteadybitIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={SteadybitSvg} {...props} />
};

export default SteadybitIcon;
