import { NgDocConfiguration } from '@ng-doc/builder';

const config: NgDocConfiguration = {
  docsPath: 'src/app/home/docs',
  // guide: {
  // headerTemplate: 'src/app/home/layout/header/header.component.html',
  // anchorHeadings: ['h1', 'h2', 'h3'],
  // },

  repoConfig: {
    url: 'https://github.com/Mazen-Embaby/stackfusion-angular-docs/',
    mainBranch: 'main',
    releaseBranch: 'main',
  },

  shiki: {
    themes: {
      light: 'material-theme-lighter',
      dark: 'material-theme',
    },
  },
};

export default config;
