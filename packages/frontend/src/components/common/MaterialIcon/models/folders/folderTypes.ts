import type { DefaultIcon } from '../defaultIcon';
import type { FolderIcon } from './folderIcon';

export type FolderTypes = {
  /**
   * Define the default icon for folders in a theme.
   */
  defaultIcon: DefaultIcon;

  /**
   * Defines folder icons for specific folder names.
   */
  icons: FolderIcon[];
};

export type FolderThemeName = 'specific' | 'classic' | 'none';
