import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AdvplSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7986cb)" fill-rule="evenodd" d="M6.752 1.158C2.234 1.96-.271 6.943 1.758 11.09c2.537 5.185 10.047 5.142 12.511-.07C16.69 5.9 12.321.17 6.752 1.159m.587 2.335c2.576.517 5.233 1.323 5.326 1.615.26.808.256 4.849-.004 5.34-.066.125-1.209-.012-2.08-.247l-.351-.094-.001-.437c-.005-1.308-.138-2.547-.29-2.7-.176-.176-1.312-.545-3.052-.99L5.78 5.697l-.014-.267c-.033-.6.117-1.95.232-2.093.063-.079.315-.05 1.34.157M4.029 5.39c.5.066 1.083.178 1.492.289l.178.048.03.984c.058 1.844.117 2.13.475 2.29.448.2 2.083.679 3.62 1.061l.34.084-.01.653c-.012.735-.083 1.393-.175 1.617l-.062.15-.261-.03c-.976-.113-4.175-.896-5.567-1.362-.611-.205-.759-.284-.811-.435-.23-.66-.23-4.905 0-5.337.054-.1.08-.1.75-.012"></path>
</svg>
;
};

function AdvplIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AdvplSvg} {...props} />
};

export default AdvplIcon;
