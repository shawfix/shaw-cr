import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function FuseboxSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.99 160.01" width="1em" height="1em">
  <g data-name="Layer 2">
    <g data-name="Fuse Box">
      <path fill="#FAFAFA" d="m76.995 12.087 64.783 21.76-6.72 76.61-57.094 37.236-60.916-38.345-4.975-75.178z" data-mit-no-recolor></path>
      <path fill="#424242" d="m77.982 149.831-62.688-39.444-5.124-77.518 66.817-22.694 66.729 22.406-6.93 78.906zM18.794 108.31l59.153 37.235 55.382-36.127 6.52-74.306-62.845-21.105-63.028 21.437z" data-mit-no-recolor></path>
      <path fill="#0277BD" d="M76.856 140.055V64.012l58.42-26.028-5.229 68.754z"></path>
      <path fill="#424242" d="M76.856 140.055 24.179 107.42l-5.603-69.487 58.28 26.08z" data-mit-no-recolor></path>
      <path fill="#FAFAFA" d="m32.498 56.2.47 13.905L65.57 85.973l.105 12.822-32.296-15.894 1.432 32.383-12.71-7.856-4.407-70.308 59.17 26.901v13.494z" data-mit-no-recolor></path>
      <path fill="#FAFAFA" d="M128.799 89.404c-.07 11.451-5.525 23.209-14.638 28.908l-37.358 24.38V64.038L113.7 47.594c4.504-2.103 8.3-1.248 10.823 2.715 1.658 2.618 2.523 6.31 2.496 10.657a31.15 31.15 0 0 1-3.954 15.546c3.745 1.745 5.814 5.717 5.735 12.892zm-11.268-23.576c0-4.05-1.746-6.049-4.295-4.757L87.923 73.71l-.07 15.022 25.697-13.608c2.182-1.152 3.98-5.159 3.98-9.296zm1.876 28.14c0-4.983-2.112-7.192-5.717-5.175l-25.836 14.463v17.09l25.61-15.24c3.866-2.304 5.926-6.345 5.943-11.137z" data-mit-no-recolor></path>
      <path fill="#424242" d="m76.856 17.874-58.21 20.031 95.812 2.078-73.337 8.039 35.735 15.99 18.12-8.073-24.204-1.196 43.45-7.385 21.054-9.374z" data-mit-no-recolor></path>
    </g>
  </g>
</svg>
;
};

function FuseboxIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={FuseboxSvg} {...props} />
};

export default FuseboxIcon;
