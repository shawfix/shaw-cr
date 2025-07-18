import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function MarkojsSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2196f3)" d="M5.287 8.001c-.873 1.333-1.76 2.663-2.634 3.995C1.779 13.32.909 14.665.035 15.998L.038 16l-.003.002c.874 1.333 1.744 2.678 2.618 4 .873 1.332 1.76 2.665 2.634 4h4.44c-.885-1.333-1.757-2.667-2.632-4C6.225 18.67 5.353 17.33 4.481 16c.872-1.33 1.744-2.674 2.614-4.004q1.31-2.001 2.632-3.995Z"></path>
  <path fill="var(--material-icon-color, #26a69a)" d="m5.283 8.001-.002.001c.873 1.333 1.746 2.68 2.618 4 .874 1.333 1.76 2.665 2.632 3.998h4.442a703 703 0 0 1-2.632-3.998c-.871-1.33-1.742-2.67-2.614-4.002Z"></path>
  <path fill="var(--material-icon-color, #8bc34a)" d="m20.222 8.001.003.001c-.874 1.333-1.747 2.68-2.62 4-.874 1.333-1.759 2.665-2.632 3.998h-4.44q1.322-1.995 2.63-3.998c.872-1.33 1.743-2.67 2.615-4.002Z"></path>
  <path fill="var(--material-icon-color, #ffc107)" d="M15.783 8.001q1.323 1.994 2.632 3.995c.871 1.33 1.743 2.674 2.615 4.004-.872 1.33-1.744 2.671-2.615 4.001Q17.106 22.004 15.783 24h4.44c.874-1.334 1.759-2.666 2.632-3.999.874-1.32 1.747-2.665 2.622-3.997L25.474 16l.003-.002c-.874-1.333-1.747-2.68-2.622-4.002-.873-1.332-1.758-2.664-2.632-3.996Z"></path>
  <path fill="var(--material-icon-color, #f44336)" d="M22.271 8.001q1.323 1.994 2.632 3.995c.871 1.33 1.74 2.674 2.614 4.004-.874 1.33-1.743 2.671-2.614 4.001-.873 1.333-1.746 2.666-2.632 4h4.44c.874-1.332 1.759-2.666 2.632-3.999.874-1.322 1.747-2.667 2.622-4L31.962 16l.003-.002c-.874-1.333-1.747-2.68-2.622-4.002-.873-1.332-1.758-2.664-2.632-3.996Z"></path>
</svg>
;
};

function MarkojsIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={MarkojsSvg} {...props} />
};

export default MarkojsIcon;
