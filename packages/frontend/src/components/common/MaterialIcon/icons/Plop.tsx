import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PlopSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="1em" height="1em">
  <path fill="var(--material-icon-color, #00bfa5)" d="M60.095 155.16c2.82 36.962 27.499 69.519 64.554 69.541h.702c37.056-.022 61.735-32.579 64.554-69.541q.12-1.556.12-3.197v-.044c-.008-16.32-8.724-38.965-25.764-65.777a5571 5571 0 0 0-26.79-41.696 5949 5949 0 0 0-8.84-13.598l-2.479-3.796-.653-1-.499-.76-.498.76-.654 1-2.478 3.797a5896 5896 0 0 0-8.842 13.597A5572 5572 0 0 0 85.74 86.142c-17.047 26.825-25.764 49.479-25.764 65.799q0 1.653.12 3.22zm31.661-2.755c1.444 18.924 14.084 35.594 33.065 35.605h.359c18.98-.012 31.62-16.681 33.065-35.605q.06-.796.061-1.637v-.023c-.004-8.355-4.468-19.95-13.197-33.678a2858 2858 0 0 0-13.72-21.348 3425 3425 0 0 0-5.8-8.906l-.589-.901-.59.901a2608 2608 0 0 0-5.798 8.906 2858 2858 0 0 0-13.72 21.348c-8.732 13.734-13.197 25.333-13.197 33.69q0 .846.061 1.647z" clip-rule="evenodd"></path>
</svg>
;
};

function PlopIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PlopSvg} {...props} />
};

export default PlopIcon;
