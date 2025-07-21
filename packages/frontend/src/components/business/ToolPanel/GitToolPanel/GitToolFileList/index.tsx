import type { FileInfo } from '../../../../../models/FileInfo';

import { AlertOutlined } from '@ant-design/icons';
import { useState } from 'react';

import MaterialIcon from '../../../../common/MaterialIcon';

import styles from './index.module.css';

export type GitToolFileListProps = {
  data: FileInfo[];
};

function GitToolFileList(props: GitToolFileListProps): React.ReactNode {
  const [activeFileName, setActivedFileName] = useState<string>('');

  const touchFile = (fileName: string): void => {
    setActivedFileName(activeFileName === fileName ? '' : fileName);
  };

  if (!props.data || !props.data.length) {
    return null;
  }

  return (
    <ul className={styles['file-list']}>
      {props.data.map(({ name, relativePath, status }) => {
        return (
          <button
            key={name}
            className={`text-btn ${styles['file-item-container']} ${activeFileName === name ? styles['file-item-container__active'] : ''}`}
            onClick={() => touchFile(name)}
          >
            <div className={styles['file-item']}>
              <MaterialIcon className={styles['file-icon']} name={name} />
              <span className={styles['file-info']}>
                <span>{name}</span>
                <span className={styles['file-path']}>{relativePath}</span>
              </span>
              <span className={styles['file-item-space']}></span>
              <span className={styles['file-operation']}>
                <button className="text-btn">
                  <AlertOutlined />
                </button>
              </span>
              <span className={styles[`file-status-${status}`]}>{status}</span>
            </div>
          </button>
        );
      })}
    </ul>
  );
}

export default GitToolFileList;
