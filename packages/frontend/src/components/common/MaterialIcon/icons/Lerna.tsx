import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LernaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <path fill="var(--material-icon-color, #448aff)" d="M7.57 8.21c-.41.08-.99.06-1.26.06-.4 0-1.27-.48-1.75-.98-.25-.26-.71-.82-1.01-1.25-.31-.43-.62-.78-.71-.78-.17 0-.28.6-.29 1.6 0 .12-.01.22-.01.31l.01.03-.14 8.47c.27.07.54.13.82.19.58.12 1.06.22 1.08.23.01.02-.19.34-.45.71-.95 1.35-1.14 2-.6 2 .17 0 .53-.07.82-.17.33-.1.93-.16 1.58-.16 1.34 0 2.68.33 4.37 1.08 1.61.71 2.14.88 4 1.25.85.18 1.59.37 1.64.41.05.05-.07.22-.28.38s-.38.33-.38.37.22.04.51-.01c.27-.04.89-.14 1.36-.19 1.43-.18 2.45-.82 2.47-1.56.04-.94-.25-3.03-.43-3.14-.02-.01-.38.11-.46.24-.07.13-.16.33-.25.56-.18.46-.15.56-1.57.66-1.03.05-2.02-.19-2.82-.65-.67-.39-1.66-.74-2.18-1.54-.42-.65-.86-1.72-.78-1.87.03-.04.17-.03.32.02.39.15.96.38 2.73.15 1.54-.2 3-.04 3.39.16s.92.47.94.99c.01.52.33.63.36.63.17-.03.59-1.42.83-1.83.2-.32.31-.5 1.1-1.04.62-.43 1.13-.83 1.11-.9-.01-.06-.36-.47-.77-.92-.65-.7-.83-.82-1.42-1.02-2.05-.67-4.23-2.12-5.36-3.54-1.25-1.58-1.6-1.94-2.5-2.53-1.01-.67-2.32-1.24-3.3-1.43-1-.19-.72.13-.29.8 1.53 1.75 1.49 1.81 1.49 2.97-.16.9-1 1.03-1.92 1.24m3.17 1.03c.17 0 .58.11 1.29.35 1.74.58 1.84.85 2.41 1.85.13.22.22.41.21.42s-.17.05-.35.09c-.45.09-1.16.09-1.58 0-.76-.16-.72-.19-1.11-.57-.16-.16-.35-.42-.41-.56-.04-.1-.03-.12.19-.3.05-.04.1-.11.1-.15 0-.07-.22-.37-.34-.47-.13-.11-.49-.54-.49-.59 0-.03.03-.05.1-.05z"></path>
</svg>
;
};

function LernaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LernaSvg} {...props} />
};

export default LernaIcon;
