import type { GetProps } from 'antd';

import Icon from '@ant-design/icons';

export type MaterialIconProps = GetProps<typeof Icon> & { name: string; isFolder?: boolean };
