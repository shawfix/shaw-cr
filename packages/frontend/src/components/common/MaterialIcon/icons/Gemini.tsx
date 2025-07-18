import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function GeminiSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #81c784)" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m11.3 10h-5.64a22.5 22.5 0 0 0-2.705-7.616A12.03 12.03 0 0 1 27.3 12M20 16c0 .693-.037 1.357-.094 2h-7.811A22 22 0 0 1 12 16c0-.693.037-1.357.094-2h7.811c.058.643.095 1.307.095 2m-4 12c-.115 0-.226-.014-.34-.017A20.4 20.4 0 0 1 12.368 20h7.264a20.4 20.4 0 0 1-3.292 7.983c-.114.003-.225.017-.34.017m-3.632-16a20.4 20.4 0 0 1 3.292-7.983c.114-.003.225-.017.34-.017s.226.014.34.017A20.4 20.4 0 0 1 19.632 12Zm.683-7.618A22.4 22.4 0 0 0 10.339 12H4.7a12.03 12.03 0 0 1 8.35-7.618ZM4.18 14h5.91c-.052.647-.091 1.307-.091 2s.039 1.353.091 2H4.18a11.2 11.2 0 0 1 0-4m.52 6h5.638a22.4 22.4 0 0 0 2.712 7.618A12.03 12.03 0 0 1 4.7 20m14.255 7.616A22.5 22.5 0 0 0 21.661 20H27.3a12.03 12.03 0 0 1-8.344 7.616ZM27.819 18h-5.91c.052-.647.091-1.307.091-2s-.039-1.353-.091-2h5.91a11.2 11.2 0 0 1 0 4"></path>
</svg>
;
};

function GeminiIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={GeminiSvg} {...props} />
};

export default GeminiIcon;
