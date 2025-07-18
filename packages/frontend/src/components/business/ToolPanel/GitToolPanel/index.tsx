import type { CollapseProps } from 'antd';

import GitToolFileList from './GitToolFileList';
import CollapseWrap from '../../../common/CollapseWrap';

import styles from './index.module.css';
import { GitToolMock } from '../../../../mock/GitToolMock';

const items: CollapseProps['items'] = [
  {
    key: GitToolMock.label,
    label: <button className="text-btn">{GitToolMock.label}</button>,
    children: <GitToolFileList data={GitToolMock.fileList} />,
  },
];

function GitToolPanel(): React.ReactNode {
  return (
    <div className={styles['git-tool-panel']}>
      <CollapseWrap items={items} defaultActiveKey={[GitToolMock.label]} />
    </div>
  );
}

export default GitToolPanel;
