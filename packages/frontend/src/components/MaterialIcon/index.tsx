import { useEffect, useState } from 'react';

import { fileIcons } from './fileIcons';

console.log('fileIcons', fileIcons);

const modules = import.meta.glob('./icons/**.svg');

function MeterialFileIcon(): React.ReactNode {
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    modules['./icons/3d.svg']().then((m) => {
      setImageSrc((m as { default: string }).default);
    });
  }, []);

  return imageSrc ? <img src={imageSrc} alt="meterial-icon" /> : null;
}

export default MeterialFileIcon;
