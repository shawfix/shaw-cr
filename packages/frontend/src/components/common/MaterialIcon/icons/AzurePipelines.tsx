import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function AzurePipelinesSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #64b5f6)" d="M3.98 22.01h1.803v4.208H9.99v1.803H3.98Z"></path>
  <path fill="var(--material-icon-color, #1565c0)" d="M3.98 10.991v5.51l3.505 3.61 1.503-1.606 4.508 4.508-1.502 1.502 3.506 3.506h5.51a1 1 0 0 0 1.001-1.002v-8.014L12.995 9.99H4.982a1 1 0 0 0-1.003 1.001Z"></path>
  <path fill="var(--material-icon-color, #1e88e5)" d="M8.317 18.44a1 1 0 0 1-.125-1.265L16.407 4.87a2 2 0 0 1 1.666-.891h8.946A1 1 0 0 1 28.02 4.98v8.946a2 2 0 0 1-.891 1.667l-12.305 8.215a1 1 0 0 1-1.265-.126Z"></path>
  <path fill="var(--material-icon-color, #64b5f6)" d="m8.976 21.542 7.648-7.648 1.48 1.481-7.647 7.648Z"></path>
  <path fill="var(--material-icon-color, #42a5f5)" d="m11.68 21.801-1.481-1.48 6.426-6.427 1.48 1.481Z"></path>
  <path fill="var(--material-icon-color, #90caf9)" d="M22.011 12.995a3.006 3.006 0 0 0 .096-6.011h-.096a3.006 3.006 0 0 0 0 6.01Z"></path>
</svg>
;
};

function AzurePipelinesIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={AzurePipelinesSvg} {...props} />
};

export default AzurePipelinesIcon;
