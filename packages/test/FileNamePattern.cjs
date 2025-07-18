const FileNamePattern = {
  /** Adds the following extensions to the file name: `js`, `mjs`, `cjs`, `ts`, `mts`, `cts`. */
  Ecmascript: 'ecmascript',

  /** Adds the following extensions to the file name: `json`, `jsonc`, `json5`, `yaml`, `yml`, `toml`. */
  Configuration: 'configuration',

  /** Adds the following extensions to the file name: `js`, `mjs`, `cjs`, `ts`, `mts`, `cts`, `json`, `jsonc`, `json5`, `yaml`, `yml`, `toml`. */
  NodeEcosystem: 'nodeEcosystem',

  /** It adjusts the name with the following patterns: `.fileNamerc`, `.config/fileNamerc`, `fileName.config` and combines that with the pattern `NodeEcosystem` */
  Cosmiconfig: 'cosmiconfig',

  /** Adds the following extensions to the file name: `yaml`, `yml`. */
  Yaml: 'yaml',

  /** It adjusts the name with the following patterns: `.${fileName}`, `${fileName}`. */
  Dotfile: 'dotfile',
};

module.exports = FileNamePattern;
