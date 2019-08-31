# ngx-plug-n-play

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

The `ngx-plug-n-play` library is an Angular library that contains services, components, directives, pipes, etc that are easily implemented into any project. The goal is to provide functionality while not defining any default styles. Directives don't provide a template, so those will inherently use the styles defined by the user. Components will use `ng-template`, `ng-content`, and other forms of transclusion so that the user can style components to match their application.

Demo Sites:

-   [ngx-plug-n-play.netlify.com](https://ngx-plug-n-play.netlify.com)
-   [Stackblitz Demo](https://stackblitz.com/edit/ngx-plug-n-play-demo)

> In both of these example apps, we used Bootstrap to make it look nice. However, this library does not require the use of Bootstrap or any other UI framework or requirements. You can use your own styles on all the elements.

## Installation

```bash
npm i ngx-plug-n-play
```

## More Info

Each module is exported, so only what's needed in a given application will be imported.

The library contains the following modules:

-   [Typeahead Module](https://github.com/pjlamb12/ngx-plug-n-play/blob/master/projects/ngx-plug-n-play-lib/src/lib/typeahead/README.md)
-   [Alert Toaster Module](https://github.com/pjlamb12/ngx-plug-n-play/blob/master/projects/ngx-plug-n-play-lib/src/lib/alert-toaster/README.md)
-   [Dropdown Module](https://github.com/pjlamb12/ngx-plug-n-play/blob/master/projects/ngx-plug-n-play-lib/src/lib/dropdown/README.md)
-   [Accordion Module](https://github.com/pjlamb12/ngx-plug-n-play/blob/master/projects/ngx-plug-n-play-lib/src/lib/accordion/README.md)

## Developing Locally

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name --project=ngx-plug-n-play-lib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
Run `npm run build:demo` to build the demo project and `npm run build:demo:prod` to build the demo project for production.
Run `npm run build:lib` to build the library project and `npm run build:lib:prod` to build the library for production.

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `npm run test:lib` to execute the unit tests for the library via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Contributions

Please [submit an issue](https://github.com/pjlamb12/ngx-plug-n-play/issues/new) for desired components or services or anything else to be added to the library or if any issues are found.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://www.prestonlamb.com"><img src="https://avatars3.githubusercontent.com/u/2006222?v=4" width="100px;" alt="Preston Lamb"/><br /><sub><b>Preston Lamb</b></sub></a><br /><a href="https://github.com/pjlamb12/ngx-plug-n-play/commits?author=pjlamb12" title="Tests">⚠️</a> <a href="https://github.com/pjlamb12/ngx-plug-n-play/commits?author=pjlamb12" title="Code">💻</a></td><td align="center"><a href="https://wesleygrimes.com"><img src="https://avatars0.githubusercontent.com/u/324308?v=4" width="100px;" alt="Wes Grimes"/><br /><sub><b>Wes Grimes</b></sub></a><br /><a href="https://github.com/pjlamb12/ngx-plug-n-play/commits?author=wesleygrimes" title="Code">💻</a> <a href="https://github.com/pjlamb12/ngx-plug-n-play/commits?author=wesleygrimes" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
