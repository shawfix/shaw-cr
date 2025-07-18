import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FolderSnippetSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ff9800)" d="m13.84 7.54-1.28-1.08A2 2 0 0 0 11.28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.12a2 2 0 0 1-1.28-.46"></path>
  <path fill="var(--material-icon-color, #ffe0b2)" d="M20 10s-2 1.86-2 4 6 8 6 8l-.89.88a3 3 0 0 0-5.1 2A3.01 3.01 0 0 0 20.87 28a3.02 3.02 0 0 0 3.11-3.24L26 23.5l.25.31A3.02 3.02 0 0 0 28.88 28 3.01 3.01 0 0 0 32 25.12a3.01 3.01 0 0 0-4.38-2.78zm10 0-4 8 2 2s4-3.94 4-6-2-4-2-4m-9.06 14h.1c.51.02.9.4.95.89v.2a.98.98 0 0 1-1.03.91.99.99 0 0 1-.96-1.04.98.98 0 0 1 .94-.96m8 0h.1c.56.02.98.48.96 1.04a.98.98 0 0 1-1.04.96.98.98 0 0 1-.96-1.04.98.98 0 0 1 .94-.96" style="-inkscape-stroke:none"></path>
</svg>
;
};

function FolderSnippetIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FolderSnippetSvg} {...props} />
};

export default FolderSnippetIcon;
