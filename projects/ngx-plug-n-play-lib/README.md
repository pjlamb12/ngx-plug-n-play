# ngx-plug-n-play

The `ngx-plug-n-play` library is an Angular library that contains services, components, directives, pipes, etc that are easily implemented into any project. The goal is to provide functionality while not defining any default styles. Directives don't provide a template, so those will inherently use the styles defined by the user. Components will use `ng-template`, `ng-content`, and other forms of transclusion so that the user can style components to match their application.

## Installation

```bash
npm i ngx-plug-n-play
```

## More Info

Each module is exported, so only what's needed in a given application will be imported.

The library contains the follwing modules:

-   [Typeahead Module](https://github.com/pjlamb12/ngx-plug-n-play/blob/master/projects/ngx-plug-n-play-lib/src/lib/typeahead/README.md)
-   [Alert Toaster Module](https://github.com/pjlamb12/ngx-plug-n-play/blob/master/projects/ngx-plug-n-play-lib/src/lib/alert-toaster/README.md)

## Contributions

Please [submit an issue](https://github.com/pjlamb12/ngx-plug-n-play/issues/new) for desired components or services or anything else to be added to the library or if any issues are found.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://www.prestonlamb.com"><img src="https://avatars3.githubusercontent.com/u/2006222?v=4" width="100px;" alt="Preston Lamb"/><br /><sub><b>Preston Lamb</b></sub></a><br /><a href="https://github.com/pjlamb12/ngx-plug-n-play/commits?author=pjlamb12" title="Tests">⚠️</a> <a href="https://github.com/pjlamb12/ngx-plug-n-play/commits?author=pjlamb12" title="Code">💻</a></td><td align="center"><a href="https://wesleygrimes.com"><img src="https://avatars0.githubusercontent.com/u/324308?v=4" width="100px;" alt="Wes Grimes"/><br /><sub><b>Wes Grimes</b></sub></a><br /><a href="https://github.com/pjlamb12/ngx-plug-n-play/commits?author=wesleygrimes" title="Code">💻</a> <a href="https://github.com/pjlamb12/ngx-plug-n-play/commits?author=wesleygrimes" title="Documentation">📖</a></td></tr></table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
