import type { MaterialIconProps } from '../MaterialIconProps.ts';

import Icon from '@ant-design/icons';

function LbxSvg(): React.ReactNode {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1em" height="1em">
  <path fill="var(--material-icon-color, #2e7d32)" d="M128 704v128c0 70.692 57.308 128 128 128h608c17.728 0 32-14.272 32-32V704z"></path>
  <path fill="var(--material-icon-color, #ffe082)" d="M704 704v192h128V704z"></path>
  <path fill="var(--material-icon-color, #fff8e1)" d="M192 704v96c0 53.184 42.816 96 96 96h544a96 96 0 0 1-96-96 96 96 0 0 1 96-96z"></path>
  <path fill="var(--material-icon-color, #ff1744)" d="M320 832h192v192l-96-96-96 96z"></path>
  <path fill="var(--material-icon-color, #4caf50)" d="M256 64c-70.692 0-128 57.308-128 128v640c0 11.088 1.557 21.787 4.207 32.047C146.767 807.565 197.672 768.07 256 768h608c17.728 0 32-14.272 32-32V96c0-17.728-14.272-32-32-32z"></path>
  <path fill="var(--material-icon-color, #e8f5e9)" d="M448 128v64H256v64h256c0 33.778-26.676 86.11-73.947 144.959-7.257 9.034-15.068 18.276-23.123 27.611-4.479-5.242-8.838-10.461-13.002-15.634C370.55 373.95 352 336 352 320h-64c0 48 29.45 90.049 64.072 133.064 6.302 7.83 12.933 15.627 19.68 23.39-35.13 37.553-74.249 76.79-114.379 116.919l45.254 45.254c38.924-38.924 77.278-77.307 112.568-114.883 17.182 17.87 34.328 35.033 50.178 50.883l45.254-45.254c-16.799-16.799-34.744-34.801-52.309-53.17 10.301-11.813 20.31-23.56 29.63-35.162C538.675 377.889 576 318.222 576 256h128v-64H512v-64zm192 192L512 704h64l21.334-64h149.332L768 704h64L704 320zm32 96 53.334 160H618.666z"></path>
</svg>
;
};

function LbxIcon(props: Partial<MaterialIconProps>): React.ReactNode {
  return <Icon component={LbxSvg} {...props} />
};

export default LbxIcon;
