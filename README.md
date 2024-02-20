# NgAssetsWk : Angular Assets Workspace

Angular workspace with a library exposing scss resources, font files and images to be integrated in an Angular application.

The main goal here is to have an Angular application that doesn’t require the library scss to be previously built.

The whole process is explained in this article [Adding scss assets to Angular library](https://coco-boudard.medium.com/adding-scss-assets-to-angular-library-33a9ed0654fa).

## Using the library

With the provided scripts, we can publish the library on a local Verdaccio server and use it in an Angular application.

```json
"publish:lib": "ng build @abo/ng-lib && cd dist/abo/ng-lib && npm publish --registry http://localhost:4873/",
```
