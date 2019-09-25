# Resume

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy on Github
`npm install -g angular-cli-ghpages`

`ng build --prod --base-href "https://laquesisa.github.io/resume/"`

`ngh`
(https://alligator.io/angular/deploying-angular-app-github-pages/)

--> install ngx to be able to execute npm-packages

### Problem with image rendering
There's a known issue (https://github.com/angular/angular-cli/issues/9347) that the url to the images on the deployed github-page is wrong (the project-name is missed). Workaround: for deploy on gh-pages you should add the project-name into to url.

src='../assets/images/img.png' -> src='../resume/assets/images/img.png'