import { Collapse } from 'antd';

import styles from './index.module.css';

import type { CollapseProps } from 'antd/es/collapse/Collapse';

function CollapseWrap(props: CollapseProps): React.ReactNode {
  return (
    <div className={styles['collapse-wrap']}>
      <Collapse {...props} />
    </div>
  );
}

export default CollapseWrap;
