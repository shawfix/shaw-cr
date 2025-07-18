import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function CudaSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="1em" height="1em">
  <path fill="var(--material-icon-color, #7CB342)" d="M12.496 10.16c-.184 0-.314.01-.496.022V12a7 7 0 0 1 .991-.062 7.34 7.34 0 0 1 5.335 2.457l-2.72 2.156c-1.213-1.922-1.568-2.767-3.606-3v5.468a4.8 4.8 0 0 0 1.486.234c3.969 0 7.667-4.847 7.667-4.847s-3.427-4.402-8.657-4.246m-9.222 4.468A12.46 12.46 0 0 1 12 10.184V8.715c-6.407.489-12 5.602-12 5.602s3.202 8.56 12 9.337v-1.641c-6.454-.756-8.726-7.385-8.726-7.385"></path>
  <path fill="var(--material-icon-color, #7CB342)" d="M12 13.54V12a11.17 11.17 0 0 0-6.3 2.828s1.424 4.791 6.3 5.614v-1.423a6.48 6.48 0 0 1-3.72-3.913A5.04 5.04 0 0 1 12 13.54m0-7.566v2.74l.496-.032c7.267-.234 12.014 5.624 12.014 5.624s-5.442 6.247-11.107 6.247A8.4 8.4 0 0 1 12 20.431V22a11 11 0 0 0 1.19.108c5.276 0 9.058-2.478 12.757-5.479.612.467 3.12 1.59 3.64 2.079-3.51 2.779-11.696 5.013-16.337 5.013a12 12 0 0 1-1.25-.066V26h20V6Z"></path>
</svg>
;
};

function CudaIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={CudaSvg} {...props} />
};

export default CudaIcon;
