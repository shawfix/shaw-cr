import type { FolderTypes } from './models/folders/folderTypes';

import { getColorByKey } from './color';
import { IconPack } from './models/iconPack';

/**
 * Defines folder icons
 */
export const folderIcons: FolderTypes = {
  defaultIcon: {
    name: 'Folder',
  },
  icons: [
    {
      name: 'FolderRust',
      folderNames: ['rust'],
    },
    {
      name: 'FolderRobot',
      folderNames: ['bot', 'bots', 'robot', 'robots'],
    },
    {
      name: 'FolderSrc',
      folderNames: ['src', 'srcs', 'source', 'sources', 'code'],
    },
    {
      name: 'FolderDist',
      folderNames: [
        'dist',
        'out',
        'output',
        'build',
        'builds',
        'release',
        'bin',
        'distribution',
        'built',
        'compiled',
      ],
    },
    {
      name: 'FolderCss',
      folderNames: ['css', 'stylesheet', 'stylesheets', 'style', 'styles'],
    },
    {
      name: 'FolderSass',
      folderNames: ['sass', 'scss'],
    },
    {
      name: 'FolderTelevision',
      folderNames: ['tv', 'television'],
    },
    {
      name: 'FolderDesktop',
      folderNames: ['desktop', 'display'],
    },
    {
      name: 'FolderConsole',
      folderNames: ['console', 'xbox', 'ps4', 'ps5', 'switch', 'game', 'games'],
    },
    {
      name: 'FolderImages',
      folderNames: [
        'images',
        'image',
        'imgs',
        'img',
        'icons',
        'icon',
        'icos',
        'ico',
        'figures',
        'figure',
        'figs',
        'fig',
        'screenshot',
        'screenshots',
        'screengrab',
        'screengrabs',
        'pic',
        'pics',
        'picture',
        'pictures',
        'photo',
        'photos',
        'photograph',
        'photographs',
        'texture',
        'textures',
      ],
    },
    {
      name: 'FolderScripts',
      folderNames: ['script', 'scripts', 'scripting'],
    },
    {
      name: 'FolderNode',
      folderNames: ['node', 'nodejs', 'node_modules'],
    },
    {
      name: 'FolderJavascript',
      folderNames: ['js', 'javascript', 'javascripts', 'cjs', 'mjs'],
    },
    {
      name: 'FolderJson',
      folderNames: ['json', 'jsons', 'jsonc', 'jsonl'],
    },
    {
      name: 'FolderFont',
      folderNames: ['font', 'fonts', 'typeface', 'typefaces'],
    },
    {
      name: 'FolderBower',
      folderNames: ['bower_components'],
    },
    {
      name: 'FolderTest',
      folderNames: ['test', 'tests', 'testing', 'snapshots', 'spec', 'specs', 'testfiles'],
    },
    {
      name: 'FolderDirective',
      folderNames: ['directive', 'directives'],
    },
    {
      name: 'FolderJinja',
      folderNames: ['jinja', 'jinja2', 'j2'],
      light: true,
    },
    {
      name: 'FolderMarkdown',
      folderNames: ['markdown', 'md'],
    },
    {
      name: 'FolderPdm',
      folderNames: ['pdm-plugins', 'pdm-build'],
    },
    {
      name: 'FolderPhp',
      folderNames: ['php'],
    },
    {
      name: 'FolderPhpmailer',
      folderNames: ['phpmailer'],
    },
    {
      name: 'FolderSublime',
      folderNames: ['sublime'],
    },
    {
      name: 'FolderDocs',
      folderNames: [
        'doc',
        'docs',
        'document',
        'documents',
        'documentation',
        'post',
        'posts',
        'article',
        'articles',
        'wiki',
        'news',
      ],
    },
    {
      name: 'FolderGhWorkflows',
      folderNames: ['github/workflows'],
    },
    {
      name: 'FolderGit',
      folderNames: ['git', 'patches', 'githooks', 'submodules'],
    },
    {
      name: 'FolderGithub',
      folderNames: ['github'],
    },
    {
      name: 'FolderGitea',
      folderNames: ['gitea'],
    },
    {
      name: 'FolderGitlab',
      folderNames: ['gitlab'],
    },
    {
      name: 'FolderForgejo',
      folderNames: ['forgejo'],
    },
    {
      name: 'FolderVscode',
      folderNames: ['vscode', 'vscode-test'],
    },
    {
      name: 'FolderViews',
      folderNames: ['view', 'views', 'screen', 'screens', 'page', 'pages', 'public_html', 'html'],
    },
    {
      name: 'FolderVue',
      folderNames: ['vue'],
    },
    {
      name: 'FolderVuepress',
      folderNames: ['vuepress'],
    },
    {
      name: 'FolderExpo',
      folderNames: ['expo', 'expo-shared'],
    },
    {
      name: 'FolderConfig',
      folderNames: [
        'cfg',
        'cfgs',
        'conf',
        'confs',
        'config',
        'configs',
        'configuration',
        'configurations',
        'setting',
        'settings',
        'META-INF',
        'option',
        'options',
        'pref',
        'prefs',
        'preference',
        'preferences',
        'props',
        'properties',
      ],
    },
    {
      name: 'FolderIoneEightN',
      folderNames: [
        'i18n',
        'internationalization',
        'lang',
        'langs',
        'language',
        'languages',
        'locale',
        'locales',
        'l10n',
        'localization',
        'translation',
        'translate',
        'translations',
        'tx',
      ],
    },
    {
      name: 'FolderComponents',
      folderNames: ['components', 'widget', 'widgets', 'fragments'],
    },
    {
      name: 'FolderVerdaccio',
      folderNames: ['verdaccio'],
    },
    {
      name: 'FolderAurelia',
      folderNames: ['aurelia_project'],
    },
    {
      name: 'FolderResource',
      folderNames: [
        'resource',
        'resources',
        'res',
        'asset',
        'assets',
        'static',
        'report',
        'reports',
      ],
    },
    {
      name: 'FolderLib',
      folderNames: [
        'lib',
        'libs',
        'library',
        'libraries',
        'vendor',
        'vendors',
        'third-party',
        'lib64',
      ],
    },
    {
      name: 'FolderTheme',
      folderNames: [
        'themes',
        'theme',
        'color',
        'colors',
        'design',
        'designs',
        'palette',
        'palettes',
      ],
    },
    {
      name: 'FolderWebpack',
      folderNames: ['webpack'],
    },
    {
      name: 'FolderGlobal',
      folderNames: ['global'],
    },
    {
      name: 'FolderPublic',
      folderNames: [
        'public',
        'www',
        'wwwroot',
        'web',
        'website',
        'websites',
        'site',
        'browser',
        'browsers',
      ],
    },
    {
      name: 'FolderInclude',
      folderNames: ['inc', 'include', 'includes', 'partial', 'partials', 'inc64'],
    },
    {
      name: 'FolderDocker',
      folderNames: ['docker', 'dockerfiles', 'dockerhub'],
    },
    {
      name: 'FolderNgrxStore',
      folderNames: ['store'],
      enabledFor: [IconPack.Ngrx],
    },
    {
      name: 'FolderNgrxEffects',
      folderNames: ['effects'],
      enabledFor: [IconPack.Ngrx],
      clone: {
        base: 'FolderNgrxStore',
        color: 'cyan-500',
      },
    },
    {
      name: 'FolderNgrxState',
      folderNames: ['states', 'state'],
      enabledFor: [IconPack.Ngrx],
      clone: {
        base: 'FolderNgrxStore',
        color: 'lime-800',
      },
    },
    {
      name: 'FolderNgrxReducer',
      folderNames: ['reducers', 'reducer'],
      enabledFor: [IconPack.Ngrx],
      clone: {
        base: 'FolderNgrxStore',
        color: 'red-400',
      },
    },
    {
      name: 'FolderNgrxActions',
      folderNames: ['actions'],
      enabledFor: [IconPack.Ngrx],
      clone: {
        base: 'FolderNgrxStore',
        color: 'purple-400',
      },
    },
    {
      name: 'FolderNgrxEntities',
      folderNames: ['entities'],
      enabledFor: [IconPack.Ngrx],
      clone: {
        base: 'FolderNgrxStore',
        color: 'yellow-700',
      },
    },
    {
      name: 'FolderNgrxSelectors',
      folderNames: ['selectors'],
      enabledFor: [IconPack.Ngrx],
      clone: {
        base: 'FolderNgrxStore',
        color: 'deep-orange-A200',
      },
    },
    {
      name: 'FolderReduxReducer',
      folderNames: ['reducers', 'reducer'],
      enabledFor: [IconPack.Redux],
    },
    {
      name: 'FolderReduxActions',
      folderNames: ['actions'],
      enabledFor: [IconPack.Redux],
      clone: {
        base: 'FolderReduxReducer',
        color: 'purple-400',
      },
    },
    {
      name: 'FolderReduxSelector',
      folderNames: ['selectors', 'selector'],
      enabledFor: [IconPack.Redux],
      clone: {
        base: 'FolderReduxReducer',
        color: 'deep-orange-A200',
      },
    },
    {
      name: 'FolderReduxStore',
      folderNames: ['store', 'stores'],
      enabledFor: [IconPack.Redux],
      clone: {
        base: 'FolderReduxReducer',
        color: 'light-green-500',
      },
    },
    {
      name: 'FolderReactComponents',
      folderNames: ['components', 'react', 'jsx', 'reactjs', 'react-components'],
      enabledFor: [IconPack.React, IconPack.Redux],
    },
    {
      name: 'FolderAstro',
      folderNames: ['astro'],
    },
    {
      name: 'FolderDatabase',
      folderNames: ['db', 'data', 'database', 'databases', 'sql'],
    },
    {
      name: 'FolderLog',
      folderNames: ['log', 'logs', 'logging'],
    },
    {
      name: 'FolderTarget',
      folderNames: ['target'],
    },
    {
      name: 'FolderTemp',
      folderNames: ['temp', 'tmp', 'cached', 'cache'],
    },
    {
      name: 'FolderAws',
      folderNames: ['aws', 'azure', 'gcp'],
    },
    {
      name: 'FolderAudio',
      folderNames: [
        'aud',
        'auds',
        'audio',
        'audios',
        'music',
        'song',
        'songs',
        'sound',
        'sounds',
        'voice',
        'voices',
        'recordings',
      ],
    },
    {
      name: 'FolderVideo',
      folderNames: ['vid', 'vids', 'video', 'videos', 'movie', 'movies', 'media'],
    },
    {
      name: 'FolderKubernetes',
      folderNames: ['kubernetes', 'k8s'],
    },
    {
      name: 'FolderImport',
      folderNames: ['import', 'imports', 'imported'],
    },
    {
      name: 'FolderExport',
      folderNames: ['export', 'exports', 'exported'],
    },
    {
      name: 'FolderWakatime',
      folderNames: ['wakatime'],
    },
    {
      name: 'FolderCircleci',
      folderNames: ['circleci'],
    },
    {
      name: 'FolderWordpress',
      folderNames: ['wordpress-org', 'wp-content'],
    },
    {
      name: 'FolderGradle',
      folderNames: ['gradle'],
    },
    {
      name: 'FolderCoverage',
      folderNames: [
        'coverage',
        'nyc-output',
        'nyc_output',
        'e2e',
        'it',
        'integration-test',
        'integration-tests',
      ],
    },
    {
      name: 'FolderClass',
      folderNames: ['class', 'classes', 'model', 'models', 'schemas', 'schema'],
    },
    {
      name: 'FolderOther',
      folderNames: ['other', 'others', 'misc', 'miscellaneous', 'extra', 'extras', 'etc'],
    },
    {
      name: 'FolderLua',
      folderNames: ['lua'],
    },
    {
      name: 'FolderTurborepo',
      folderNames: ['turbo'],
    },
    {
      name: 'FolderTypescript',
      folderNames: ['typescript', 'ts', 'typings', '@types', 'types', 'cts', 'mts'],
    },
    {
      name: 'FolderGraphql',
      folderNames: ['graphql', 'gql'],
    },
    {
      name: 'FolderRoutes',
      folderNames: ['routes', 'router', 'routers', 'navigation', 'navigations', 'routing'],
    },
    {
      name: 'FolderCi',
      folderNames: ['ci'],
    },
    {
      name: 'FolderBenchmark',
      folderNames: [
        'benchmark',
        'benchmarks',
        'bench',
        'performance',
        'perf',
        'profiling',
        'measure',
        'measures',
        'measurement',
      ],
    },
    {
      name: 'FolderMessages',
      folderNames: [
        'messages',
        'messaging',
        'forum',
        'chat',
        'chats',
        'conversation',
        'conversations',
        'dialog',
        'dialogs',
      ],
    },
    {
      name: 'FolderLess',
      folderNames: ['less'],
    },
    {
      name: 'FolderGulp',
      folderNames: [
        'gulp',
        'gulp-tasks',
        'gulpfile.js',
        'gulpfile.mjs',
        'gulpfile.ts',
        'gulpfile.babel.js',
        'gulpfiles',
      ],
    },
    {
      name: 'FolderPython',
      folderNames: ['python', 'pycache', 'pytest_cache'],
    },
    {
      name: 'FolderSandbox',
      folderNames: ['sandbox', 'sandboxes', 'playground', 'playgrounds'],
    },
    {
      name: 'FolderScons',
      folderNames: ['scons', 'sconf_temp', 'scons_cache'],
    },
    {
      name: 'FolderMojo',
      folderNames: ['mojo'],
    },
    {
      name: 'FolderMoon',
      folderNames: ['moon'],
    },
    {
      name: 'FolderDebug',
      folderNames: ['debug', 'debugger', 'debugging'],
    },
    {
      name: 'FolderFastlane',
      folderNames: ['fastlane'],
    },
    {
      name: 'FolderPlugin',
      folderNames: [
        'plugin',
        'plugins',
        'mod',
        'mods',
        'modding',
        'extension',
        'extensions',
        'addon',
        'addons',
        'addin',
        'addins',
        'module',
        'modules',
      ],
    },
    {
      name: 'FolderMiddleware',
      folderNames: ['middleware', 'middlewares'],
    },
    {
      name: 'FolderController',
      folderNames: [
        'controller',
        'controllers',
        'controls',
        'service',
        'services',
        'provider',
        'providers',
        'handler',
        'handlers',
      ],
    },
    {
      name: 'FolderAnsible',
      folderNames: ['ansible'],
    },
    {
      name: 'FolderServer',
      folderNames: ['server', 'servers', 'backend', 'backends'],
    },
    {
      name: 'FolderClient',
      folderNames: ['client', 'clients', 'frontend', 'frontends', 'pwa', 'spa'],
    },
    {
      name: 'FolderTasks',
      folderNames: ['tasks', 'tickets'],
    },
    {
      name: 'FolderAndroid',
      folderNames: ['android'],
    },
    {
      name: 'FolderIos',
      folderNames: ['ios'],
    },
    {
      name: 'FolderUi',
      folderNames: ['presentation', 'gui', 'ui', 'ux'],
    },
    {
      name: 'FolderUpload',
      folderNames: ['uploads', 'upload'],
    },
    {
      name: 'FolderDownload',
      folderNames: ['downloads', 'download', 'downloader', 'downloaders'],
    },
    {
      name: 'FolderTools',
      folderNames: [
        'tools',
        'toolkit',
        'toolkits',
        'toolbox',
        'toolboxes',
        'tooling',
        'devtools',
        'kit',
        'kits',
      ],
    },
    {
      name: 'FolderHelper',
      folderNames: ['helpers', 'helper'],
    },
    {
      name: 'FolderServerless',
      folderNames: ['serverless'],
    },
    {
      name: 'FolderApi',
      folderNames: ['api', 'apis', 'restapi'],
    },
    {
      name: 'FolderApp',
      folderNames: ['app', 'apps', 'application', 'applications'],
    },
    {
      name: 'FolderApollo',
      folderNames: ['apollo', 'apollo-client', 'apollo-cache', 'apollo-config'],
    },
    {
      name: 'FolderArchive',
      folderNames: ['arc', 'arcs', 'archive', 'archives', 'archival'],
    },
    {
      name: 'FolderBackup',
      folderNames: [
        'bkp',
        'bkps',
        'bak',
        'baks',
        'backup',
        'backups',
        'back-up',
        'back-ups',
        'history',
        'histories',
      ],
    },
    {
      name: 'FolderBatch',
      folderNames: ['batch', 'batchs', 'batches'],
    },
    {
      name: 'FolderBuildkite',
      folderNames: ['buildkite'],
    },
    {
      name: 'FolderCluster',
      folderNames: ['cluster', 'clusters'],
    },
    {
      name: 'FolderCommand',
      folderNames: ['command', 'commands', 'commandline', 'cmd', 'cli', 'clis'],
    },
    {
      name: 'FolderConstant',
      folderNames: ['constant', 'constants', 'const', 'consts'],
    },
    {
      name: 'FolderContainer',
      folderNames: ['container', 'containers', 'devcontainer'],
    },
    {
      name: 'FolderContent',
      folderNames: ['content', 'contents'],
    },
    {
      name: 'FolderContext',
      folderNames: ['context', 'contexts'],
    },
    {
      name: 'FolderCore',
      folderNames: ['core'],
    },
    {
      name: 'FolderDelta',
      folderNames: ['delta', 'deltas', 'changes'],
    },
    {
      name: 'FolderDump',
      folderNames: ['dump', 'dumps'],
    },
    {
      name: 'FolderExamples',
      folderNames: ['demo', 'demos', 'example', 'examples', 'sample', 'samples', 'sample-data'],
    },
    {
      name: 'FolderEnvironment',
      folderNames: ['env', 'envs', 'environment', 'environments', 'venv'],
    },
    {
      name: 'FolderFunctions',
      folderNames: [
        'func',
        'funcs',
        'function',
        'functions',
        'lambda',
        'lambdas',
        'logic',
        'math',
        'maths',
        'calc',
        'calcs',
        'calculation',
        'calculations',
      ],
    },
    {
      name: 'FolderGenerator',
      folderNames: ['generator', 'generators', 'generated', 'cfn-gen', 'gen', 'gens', 'auto'],
    },
    {
      name: 'FolderHook',
      folderNames: ['hook', 'hooks'],
    },
    {
      name: 'FolderTrigger',
      folderNames: ['trigger', 'triggers'],
    },
    {
      name: 'FolderJob',
      folderNames: ['job', 'jobs'],
    },
    {
      name: 'FolderKeys',
      folderNames: ['key', 'keys', 'token', 'tokens', 'jwt', 'secret', 'secrets'],
    },
    {
      name: 'FolderLayout',
      folderNames: ['layout', 'layouts'],
    },
    {
      name: 'FolderMail',
      folderNames: ['mail', 'mails', 'email', 'emails', 'smtp', 'mailers'],
    },
    {
      name: 'FolderMappings',
      folderNames: ['mappings', 'mapping'],
    },
    {
      name: 'FolderMeta',
      folderNames: ['meta'],
    },
    {
      name: 'FolderChangesets',
      folderNames: ['changesets', 'changeset'],
    },
    {
      name: 'FolderPackages',
      folderNames: [
        'package',
        'packages',
        'pkg',
        'pkgs',
        'serverpackages',
        'devpackages',
        'dependencies',
      ],
    },
    {
      name: 'FolderShared',
      folderNames: ['shared', 'common'],
    },
    {
      name: 'FolderShader',
      folderNames: ['glsl', 'hlsl', 'shader', 'shaders'],
    },
    {
      name: 'FolderStack',
      folderNames: ['stack', 'stacks'],
    },
    {
      name: 'FolderTemplate',
      folderNames: [
        'template',
        'templates',
        'github/ISSUE_TEMPLATE',
        'github/PULL_REQUEST_TEMPLATE',
      ],
    },
    {
      name: 'FolderUtils',
      folderNames: ['util', 'utils', 'utility', 'utilities'],
    },
    {
      name: 'FolderSupabase',
      folderNames: ['supabase'],
    },
    {
      name: 'FolderPrivate',
      folderNames: ['private'],
    },
    {
      name: 'FolderLinux',
      folderNames: [
        'linux',
        'linuxbsd',
        'unix',
        'wsl',
        'ubuntu',
        'deb',
        'debian',
        'deepin',
        'centos',
        'popos',
        'mint',
      ],
    },
    {
      name: 'FolderWindows',
      folderNames: [
        'windows',
        'win',
        'win32',
        'windows11',
        'windows10',
        'windowsxp',
        'windowsnt',
        'win11',
        'win10',
        'winxp',
        'winnt',
      ],
    },
    {
      name: 'FolderMacos',
      folderNames: [
        'macos',
        'mac',
        'osx',
        'DS_Store',
        'iPhone',
        'iPad',
        'iPod',
        'macbook',
        'macbook-air',
        'macosx',
        'apple',
      ],
    },
    {
      name: 'FolderError',
      folderNames: ['error', 'errors', 'err', 'errs', 'crash', 'crashes'],
    },
    {
      name: 'FolderEvent',
      folderNames: ['event', 'events'],
    },
    {
      name: 'FolderSecure',
      folderNames: [
        'auth',
        'authentication',
        'secure',
        'security',
        'cert',
        'certs',
        'certificate',
        'certificates',
        'ssl',
        'cipher',
        'cypher',
        'tls',
      ],
    },
    {
      name: 'FolderCustom',
      folderNames: ['custom', 'customs'],
    },
    {
      name: 'FolderMock',
      folderNames: [
        'draft',
        'drafts',
        'mock',
        'mocks',
        'fixture',
        'fixtures',
        'concept',
        'concepts',
        'sketch',
        'sketches',
      ],
    },
    {
      name: 'FolderSyntax',
      folderNames: ['syntax', 'syntaxes', 'spellcheck', 'spellcheckers'],
    },
    {
      name: 'FolderVm',
      folderNames: ['vm', 'vms'],
    },
    {
      name: 'FolderStylus',
      folderNames: ['stylus'],
    },
    {
      name: 'FolderFlow',
      folderNames: ['flow-typed'],
    },
    {
      name: 'FolderRules',
      folderNames: ['rule', 'rules', 'validation', 'validations', 'validator', 'validators'],
    },
    {
      name: 'FolderReview',
      folderNames: ['review', 'reviews', 'revisal', 'revisals', 'reviewed', 'preview', 'previews'],
    },
    {
      name: 'FolderAnimation',
      folderNames: [
        'anim',
        'anims',
        'animation',
        'animations',
        'animated',
        'motion',
        'motions',
        'transition',
        'transitions',
        'easing',
        'easings',
      ],
    },
    {
      name: 'FolderGuard',
      folderNames: ['guard', 'guards'],
    },
    {
      name: 'FolderPrisma',
      folderNames: ['prisma', 'prisma/schema'],
    },
    {
      name: 'FolderPipe',
      folderNames: ['pipe', 'pipes', 'pipeline', 'pipelines'],
    },
    {
      name: 'FolderSvg',
      folderNames: ['svg', 'svgs'],
    },
    {
      name: 'FolderVuexStore',
      folderNames: ['store', 'stores'],
      enabledFor: [IconPack.Vuex],
    },
    {
      name: 'FolderNuxt',
      folderNames: ['nuxt'],
    },
    {
      name: 'FolderVueDirectives',
      folderNames: ['directives'],
      enabledFor: [IconPack.Vuex, IconPack.Vue],
    },
    {
      name: 'FolderVue',
      folderNames: ['components'],
      enabledFor: [IconPack.Vuex, IconPack.Vue],
    },
    {
      name: 'FolderTerraform',
      folderNames: ['terraform'],
    },
    {
      name: 'FolderMobile',
      folderNames: ['mobile', 'mobiles', 'portable', 'portability', 'phone', 'phones'],
    },
    {
      name: 'FolderStencil',
      folderNames: ['stencil'],
    },
    {
      name: 'FolderFirebase',
      folderNames: ['firebase'],
    },
    {
      name: 'FolderFirestore',
      folderNames: ['firestore', 'cloud-firestore', 'firebase-firestore'],
    },
    {
      name: 'FolderCloudFunctions',
      folderNames: [
        'cloud-functions',
        'cloudfunctions',
        'firebase-cloud-functions',
        'firebase-cloudfunctions',
      ],
    },
    {
      name: 'FolderSvelte',
      folderNames: ['svelte', 'svelte-kit'],
    },
    {
      name: 'FolderUpdate',
      folderNames: ['update', 'updates', 'upgrade', 'upgrades'],
    },
    {
      name: 'FolderIntellij',
      folderNames: ['idea'],
      light: true,
    },
    {
      name: 'FolderAzurePipelines',
      folderNames: ['azure-pipelines', 'azure-pipelines-ci'],
    },
    {
      name: 'FolderMjml',
      folderNames: ['mjml'],
    },
    {
      name: 'FolderAdmin',
      folderNames: ['admin', 'admins', 'manager', 'managers', 'moderator', 'moderators'],
    },
    {
      name: 'FolderJupyter',
      folderNames: ['jupyter', 'notebook', 'notebooks', 'ipynb'],
    },
    {
      name: 'FolderScala',
      folderNames: ['scala'],
    },
    {
      name: 'FolderConnection',
      folderNames: [
        'connection',
        'connections',
        'integration',
        'integrations',
        'remote',
        'remotes',
      ],
    },
    {
      name: 'FolderQuasar',
      folderNames: ['quasar'],
    },
    {
      name: 'FolderNext',
      folderNames: ['next'],
    },
    {
      name: 'FolderCobol',
      folderNames: ['cobol'],
    },
    {
      name: 'FolderYarn',
      folderNames: ['yarn'],
    },
    {
      name: 'FolderHusky',
      folderNames: ['husky'],
    },
    {
      name: 'FolderStorybook',
      folderNames: ['storybook', 'stories'],
    },
    {
      name: 'FolderBase',
      folderNames: ['base', 'bases'],
    },
    {
      name: 'FolderCart',
      folderNames: ['cart', 'shopping-cart', 'shopping', 'shop'],
    },
    {
      name: 'FolderHome',
      folderNames: ['home', 'start', 'main', 'landing'],
    },
    {
      name: 'FolderProject',
      folderNames: ['project', 'projects'],
    },
    {
      name: 'FolderInterface',
      folderNames: ['interface', 'interfaces'],
    },
    {
      name: 'FolderNetlify',
      folderNames: ['netlify'],
    },
    {
      name: 'FolderEnum',
      folderNames: ['enum', 'enums'],
    },
    {
      name: 'FolderContract',
      folderNames: [
        'pact',
        'pacts',
        'contract',
        'contracts',
        'contract-testing',
        'contract-test',
        'contract-tests',
      ],
    },
    {
      name: 'FolderHelm',
      folderNames: ['helm', 'helmchart', 'helmcharts'],
    },
    {
      name: 'FolderQueue',
      folderNames: ['queue', 'queues', 'bull', 'mq'],
    },
    {
      name: 'FolderVercel',
      folderNames: ['vercel', 'now'],
    },
    {
      name: 'FolderCypress',
      folderNames: ['cypress'],
    },
    {
      name: 'FolderDecorators',
      folderNames: ['decorator', 'decorators'],
    },
    {
      name: 'FolderJava',
      folderNames: ['java'],
    },
    {
      name: 'FolderResolver',
      folderNames: ['resolver', 'resolvers'],
    },
    {
      name: 'FolderAngular',
      folderNames: ['angular'],
    },
    {
      name: 'FolderUnity',
      folderNames: ['unity'],
    },
    {
      name: 'FolderPdf',
      folderNames: ['pdf', 'pdfs'],
    },
    {
      name: 'FolderProto',
      folderNames: ['protobuf', 'protobufs', 'proto', 'protos'],
    },
    {
      name: 'FolderPlastic',
      folderNames: ['plastic'],
    },
    {
      name: 'FolderGamemaker',
      folderNames: ['gamemaker', 'gamemaker2'],
    },
    {
      name: 'FolderMercurial',
      folderNames: ['hg', 'hghooks', 'hgext'],
    },
    {
      name: 'FolderGodot',
      folderNames: ['godot', 'godot-cpp'],
    },
    {
      name: 'FolderLottie',
      folderNames: ['lottie', 'lotties', 'lottiefiles'],
    },
    {
      name: 'FolderTaskfile',
      folderNames: ['taskfile', 'taskfiles'],
    },
    {
      name: 'FolderDrizzle',
      folderNames: ['drizzle'],
    },
    {
      name: 'FolderCloudflare',
      folderNames: ['cloudflare'],
    },
    {
      name: 'FolderSeeders',
      folderNames: ['seeds', 'seeders', 'seed', 'seeding'],
    },
    {
      name: 'FolderStore',
      folderNames: ['store', 'stores'],
      enabledFor: [IconPack.Angular],
    },
    {
      name: 'FolderBicep',
      folderNames: ['bicep'],
    },
    {
      name: 'FolderSnapcraft',
      folderNames: ['snap', 'snapcraft'],
    },
    {
      name: 'FolderDevelopment',
      folderNames: ['dev', 'development'],
      clone: {
        base: 'FolderSrc',
        color: 'light-blue-700',
      },
    },
    {
      name: 'FolderFlutter',
      folderNames: ['flutter'],
    },
    {
      name: 'FolderSnippet',
      folderNames: ['snippet', 'snippets'],
    },
    {
      name: 'FolderElement',
      folderNames: ['element', 'elements'],
    },
    {
      name: 'FolderSrcTauri',
      folderNames: ['src-tauri'],
    },
    {
      name: 'FolderFavicon',
      folderNames: ['favicon', 'favicons'],
    },
    {
      name: 'FolderLefthook',
      folderNames: ['lefthook', 'lefthook-local'],
    },
    {
      name: 'FolderBloc',
      folderNames: ['bloc', 'cubit', 'blocs', 'cubits'],
    },
    {
      name: 'FolderPowershell',
      folderNames: ['powershell', 'ps', 'ps1'],
    },
    {
      name: 'FolderRepository',
      folderNames: ['repository', 'repositories', 'repo', 'repos'],
    },
    {
      name: 'FolderLuau',
      folderNames: ['luau'],
    },
    {
      name: 'FolderObsidian',
      folderNames: ['obsidian'],
    },
    {
      name: 'FolderTrash',
      folderNames: ['trash'],
    },
    {
      name: 'FolderCline',
      folderNames: ['cline_docs'],
    },
    {
      name: 'FolderLiquibase',
      folderNames: ['liquibase'],
    },
    {
      name: 'FolderDart',
      folderNames: ['dart', 'dart_tool', 'dart_tools'],
    },
    {
      name: 'FolderZeabur',
      folderNames: ['zeabur'],
    },
    {
      name: 'FolderKusto',
      folderNames: ['kusto', 'kql'],
    },
    {
      name: 'FolderPolicy',
      folderNames: ['policy', 'policies'],
    },
    {
      name: 'FolderAttachment',
      folderNames: ['attachment', 'attachments'],
    },
    {
      name: 'FolderBibliography',
      folderNames: ['bibliography', 'bibliographies', 'book', 'books'],
    },
    {
      name: 'FolderLink',
      folderNames: ['link', 'links'],
    },
    {
      name: 'FolderPytorch',
      folderNames: ['pytorch', 'torch'],
    },
    {
      name: 'FolderBlender',
      folderNames: [
        'blender',
        'blender-assets',
        'blender-files',
        'blender-project',
        'blender-models',
      ],
    },
    {
      name: 'FolderAtom',
      folderNames: ['atoms', 'atom'],
    },
    {
      name: 'FolderMolecule',
      folderNames: ['molecules', 'molecule'],
    },
    {
      name: 'FolderOrganism',
      folderNames: ['organisms', 'organism'],
    },
  ],
};

export function getFolderIcons(fileName: string): { color: string; name: string } {
  let name = folderIcons.defaultIcon.name;
  let color: string = '';

  for (const folderIcon of folderIcons.icons) {
    if (
      folderIcon.folderNames &&
      folderIcon.folderNames.length &&
      folderIcon.folderNames.includes(fileName)
    ) {
      const { base, color: colorKey } = folderIcon.clone || {};

      if (colorKey) {
        color = getColorByKey(colorKey) ?? '';
      }

      name = base ?? folderIcon.name;
      name = folderIcon.light ? `${name}Light` : name;

      break;
    }
  }

  return { color, name };
}
