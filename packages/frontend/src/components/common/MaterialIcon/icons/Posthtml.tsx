import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function PosthtmlSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
  <g fill="#f57f17">
    <path d="M6.176 16.747c1.271 0 2.471-.494 3.327-1.35l6.203-5.506a2.97 2.97 0 0 1 2.118-.873c1.65 0 3 1.332 3 2.982s-1.35 2.982-3 2.982a3 3 0 0 1-2.153-.908l-.997-.883-1.35 1.183 1.129.979c.9.9 2.1 1.394 3.37 1.394 2.63 0 4.765-2.135 4.765-4.747s-2.135-4.747-4.764-4.747c-1.271 0-2.471.494-3.327 1.35l-6.203 5.506a2.97 2.97 0 0 1-2.117.873c-1.65 0-3-1.332-3-2.982s1.35-2.982 3-2.982c.794 0 1.552.308 2.152.908l1.024.892 1.323-1.183-1.129-.988a4.75 4.75 0 0 0-3.37-1.385c-2.63 0-4.765 2.126-4.765 4.738a4.74 4.74 0 0 0 4.764 4.747" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;solid-color:#000;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"></path>
    <path d="M17.824 6.963c-1.345 0-2.619.52-3.531 1.432l-.002.001-6.197 5.5-.006.006a2.67 2.67 0 0 1-1.912.79c-1.494 0-2.71-1.2-2.71-2.692s1.216-2.691 2.71-2.691c.718 0 1.398.275 1.947.824l.008.006 1.224 1.066 1.76-1.572-1.363-1.194H9.75a5.05 5.05 0 0 0-3.574-1.468C3.389 6.97 1.12 9.229 1.12 12c0 2.803 2.27 5.037 5.055 5.037 1.345 0 2.618-.52 3.53-1.432l6.2-5.502.006-.006a2.67 2.67 0 0 1 1.912-.789c1.493 0 2.709 1.2 2.709 2.692s-1.216 2.691-2.709 2.691c-.728 0-1.398-.274-1.947-.824l-.008-.006-1.195-1.058-1.793 1.572 1.367 1.183a5.03 5.03 0 0 0 3.576 1.479c2.787 0 5.055-2.267 5.055-5.037s-2.268-5.037-5.055-5.037zm0 .58c2.472 0 4.473 2.004 4.473 4.457s-2.001 4.457-4.473 4.457a4.45 4.45 0 0 1-3.166-1.31l-.006-.006-.887-.768.907-.795.793.701.002.002a3.3 3.3 0 0 0 2.357.992c1.807 0 3.291-1.464 3.291-3.273s-1.484-3.273-3.291-3.273c-.877 0-1.704.34-2.322.957l-.002.002-6.198 5.5-.005.006c-.8.799-1.926 1.265-3.122 1.265A4.444 4.444 0 0 1 1.703 12c0-2.453 2-4.447 4.472-4.447 1.205 0 2.32.462 3.166 1.3l.008.006.887.778-.887.793-.814-.71a3.32 3.32 0 0 0-2.36-.993c-1.806 0-3.29 1.464-3.29 3.273s1.484 3.273 3.29 3.273a3.27 3.27 0 0 0 2.323-.957l6.199-5.502.006-.005c.8-.8 1.926-1.266 3.12-1.266z" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;solid-color:#000;text-decoration-color:#000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"></path>
  </g>
</svg>
;
};

function PosthtmlIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={PosthtmlSvg} {...props} />
};

export default PosthtmlIcon;
