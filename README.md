# webpack-showroom

Introduction to the power of Webpack 🚀!

Navigate through the branches to begin your **webpack/typescript** tiny journey 😀!

The goal of this repo is to demonstrate quickly how webpack work and the importance of type definition in your project.

It will help you

- Begin with **webpack**
- Make you use and understand **@types** in your typescript project
- Be aware that size matters when you're building your bundle for prod

## 01-simple_webpack

Quick setup to show how **webpack** and **ts-loader** can transcompiled a **.ts** file

## 02-environment_specific_webpack

Showing how to setup different webpack-config for prod or dev with **webpack-merge** and passing argument.

- Run `npm run build` and then show result
  - plugins
  - source map
- Run `npm start` then show local server

  - auto refresh thanks to **webpack-dev-server**
  - why typing with typescript? => trigger error with color and show result

  ## 03-typings_files

  Search for typings files to trigger autocomplete, make code more robust and fail fast. Explain what is a [types](https://www.npmjs.com/search?q=%40types) file.

- tsconfig configuration [docs](https://www.typescriptlang.org/tsconfig)
- show how does it work without typings => No autocomplete/no type checking
- do `npm i -D @types/lodash`
- show autocomplete with some lodash methods and type checking and why it fail faster with the following code snippet

```typescript
// Begin with
displayCar(find(cars, { color: 'green' }));
// And then refactor to next lines thanks to @types
const greenCar = find(cars, { color: 'green' });
if (greenCar) {
  displayCar(greenCar);
}
```

- talk about other examples if any ([mapbox](https://docs.mapbox.com/mapbox-gl-js/api/map/)/[@types/mapbox](https://www.npmjs.com/package/@types/mapbox-gl))

## Author

Thomas Le Gougaud [@thomas-lg](https://github.com/thomas-lg)
