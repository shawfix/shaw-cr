import type { DefaultIcon } from '../defaultIcon';
import type { IconPack } from '../iconPack';
import type { LightSettingsWithCloneOptions } from '../lightSettings';

export type FolderIcon = DefaultIcon &
  LightSettingsWithCloneOptions & {
    /**
     * Define the folder names that should apply the icon.
     * E.g. `['src', 'source']`
     */
    folderNames: string[];

    /**
     * Defines a pack to which this icon belongs. A pack can be toggled and all icons inside this pack can be enabled or disabled together.
     */
    enabledFor?: IconPack[];
  };
