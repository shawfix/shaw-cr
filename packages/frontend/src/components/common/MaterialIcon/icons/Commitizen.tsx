import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CommitizenSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #64b5f6)" d="M29.422 17.4 17.4 29.422a1.986 1.986 0 0 1-2.8 0L2.578 17.4a1.986 1.986 0 0 1 0-2.8L14.6 2.578a1.986 1.986 0 0 1 2.8 0l8.01 8.012L23 13a2 2 0 0 0-.74-.14A2.13 2.13 0 0 0 20.37 14H12a2.08 2.08 0 0 0-1.86-1.14 2.14 2.14 0 0 0 0 4.28A2.08 2.08 0 0 0 12 16h8l-3.82 3.83h-.01a1.9 1.9 0 0 0-.63-.1 2.135 2.135 0 1 0 2.14 2.13 1.8 1.8 0 0 0-.1-.61l4.17-4.17a2 2 0 0 0 .51.06A2.14 2.14 0 0 0 24.4 15a2 2 0 0 0-.06-.51l2.49-2.48 2.592 2.59a1.986 1.986 0 0 1 0 2.8"></path>
</svg>
;
};

function CommitizenIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CommitizenSvg} {...props} />
};

export default CommitizenIcon;
