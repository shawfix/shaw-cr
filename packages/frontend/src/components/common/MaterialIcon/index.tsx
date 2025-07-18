import type { ComponentType } from 'react';
import type { MaterialIconProps } from './MaterialIconProps';

import { lazy, useEffect, useState } from 'react';

import { getFileIcons } from './fileIcons';
import { getFolderIcons } from './folderIcons';

const iconModules = import.meta.glob('./icons/**.tsx');

function MeterialIcon({
  name,
  isFolder = false,
  style,
  ...rest
}: MaterialIconProps): React.ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [LazyIcon, setLazyIcon] = useState<React.LazyExoticComponent<ComponentType<any>>>();
  const [materialIconColor, setMaterialIconColor] = useState<string>('');

  useEffect(() => {
    const icon = isFolder ? getFolderIcons(name) : getFileIcons(name);

    const lazyLoader = () =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      iconModules[`./icons/${icon.name}.tsx`]() as Promise<{ default: ComponentType<any> }>;

    setLazyIcon(lazy(lazyLoader));
    setMaterialIconColor(icon.color);
  }, [name, isFolder]);

  return LazyIcon ? (
    <LazyIcon style={{ ...style, '--material-icon-color': materialIconColor }} {...rest} />
  ) : (
    <></>
  );
}

export default MeterialIcon;
