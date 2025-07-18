import type { FileInfo } from '../../../../../models/FileInfo';

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
      {props.data.map(({ name, status }) => {
        return (
          <button
            key={name}
            className={`text-btn ${styles['file-item-container']} ${activeFileName === name ? styles['file-item-container__active'] : ''}`}
            onClick={() => touchFile(name)}
          >
            <div className={styles['file-item']}>
              <MaterialIcon className={styles['file-icon']} name={name} />
              <span>{name}</span>
              <span className={styles[`file-status-${status}`]}>{status}</span>
            </div>
          </button>
        );
      })}
    </ul>
  );
}

export default GitToolFileList;
