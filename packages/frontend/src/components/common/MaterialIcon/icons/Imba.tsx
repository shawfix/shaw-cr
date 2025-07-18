import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function ImbaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd" viewBox="0 0 201 201" width="1em" height="1em">
  <path fill="var(--material-icon-color, #ffc400)" d="M161.96 61.952c-3.043 13.905-32.633 79.576-36.431 94.457-2.698 10.575 11.229 23.851 13.555 15.159 6.84-25.548 37.32-86.251 39.023-98.893 1.468-10.897-14.66-17.516-16.147-10.723m-37.128 48.192a4.97 4.97 0 0 1 5.726 6.91c.023.012.021.015.021.016a19.04 19.04 0 0 1-13.667 10.676c-3.4.645-7.236 1.182-11.504 1.588-15.316 1.453-31.743-17.007-20.624-16.49 16.552.77 29.747-.447 40.047-2.7zm16.256-17.347a13.36 13.36 0 0 1-9.677 8.152c-20.232 4.242-49.32 2.59-63.662-.888-13.94-3.38-23.102-23.665-14.05-20.64 21.019 7.024 60.118 9.347 82.248 6.838a4.808 4.808 0 0 1 5.133 6.523c.011.004.011.004.008.015m8.398-23.8a11.39 11.39 0 0 1-9.973 8.037c-40.633 2.924-92.83-6.466-107.91-22.019C20.273 43.326 21 20.85 27.442 27.992c24.417 27.072 84.437 34.865 117.12 34.521a5.022 5.022 0 0 1 4.92 6.481q.003.002.001.003z"></path>
</svg>
;
};

function ImbaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={ImbaSvg} {...props} />
};

export default ImbaIcon;
