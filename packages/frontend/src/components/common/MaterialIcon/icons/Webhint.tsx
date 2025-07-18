import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function WebhintSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="1em" height="1em">
  <path fill="var(--material-icon-color, #1e88e5)" d="M115.45 23.033S97.961 33.27 97.534 33.412c-.427.284-.852.57-1.137.854-1.422 1.421-1.848 3.41-1.422 5.26.285.852.711 1.849 1.422 2.56.711.71 1.564 1.137 2.559 1.422 1.848.426 3.84 0 5.262-1.422q.638-.64.851-1.28l.143-.427 2.56-4.692zm-39.102 9.242c-27.441 0-31.99 13.08-31.99 29.29 0 3.838.569 7.962-1.99 11.942-3.84 5.972-8.957 5.828-10.236 5.828-1.706 0-7.962-.993-8.246-2.841h.994c6.682 0 11.658-5.404 11.658-12.655v-2.56h-5.686c-4.123 0-7.82 1.849-10.238 5.12-2.417-3.271-6.113-5.12-10.236-5.12h-5.83v2.56c0 7.11 5.688 12.795 12.797 12.795h1.848c0 4.124 5.687 20.332 47.63 20.332 16.352 0 40.665-2.843 40.665-33.697 0-5.829-1.848-11.23-4.691-15.78-.996.284-1.992.568-3.13.568a8.92 8.92 0 0 1-8.956-8.957q0-1.493.425-2.986c-4.265-2.702-8.53-3.838-14.787-3.838z"></path>
</svg>
;
};

function WebhintIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={WebhintSvg} {...props} />
};

export default WebhintIcon;
