# quichify

Quichify is a Vue 3 Library handcrafted components using latest technologies.

## Using it

1. Add it to your `package.json` : `npm i quichtify`
2. Declare it to your vue app vy refactoring your `main.js` like this :

```js
import { createApp } from 'vue';
import App from './App.vue';
import quichify from 'quichtify';
import 'quichtify/dist/style.css';

const app = createApp(App);

app.use(quichtify);
app.mount('#app');
```

## Contribute

This library is has 2 builds configurations. One for developement with a full Vue app and another for building.

When you develop you only need to setup the project like any other vue project using `npm install`.

After that, you have all [Vitejs CLI commands](https://vitejs.dev/guide/#command-line-interface).
The dev serve will display the `src/App.vue` scafold.
**There is no router**, the demo page need to be used only for developping. It'll never be visible by the end user.

### Create new component

1. Setup the project by cloning it and install dependencies using `npm install`
2. Create a new folder for your component in `src/components` like the example one `src/components/QHelloWorld` : One main component _(You can have multiple in one folder)_ and a unit testing folder ready to test you component. **Pay attention to name your component in PascalCase with a "`Q`" at the begining**
3. Import your new component in `src/components/index.js` on top of `// TODO: 2`
4. Declare your new component in `src/components/index.js` as `QHelloWorld` on top of `// TODO: 3`
5. Run development server using `npm run dev` and voila ! :D \
   Test your component in `src/App.vue` and you favorite browser at http://localhost:3000 _(usually)_
6. Update the example [story](https://storybook.js.org/docs/vue/writing-stories/introduction) copied with the `QHelloWorld` previously to be able to play with in [StorybookJs](https://storybook.js.org/). Follow `TODO` upper than 6.
7. Test your story in Storybook UI using your browser and this command : `npm run storybook`
8. **Remove all `TODO` from your new files**
9. Increment version number using `npm version minor` for new component or `npm version patch` for a bug fix
10. Create a pretty pull request to be accepted 😉

### Basic commands

#### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Library documentation

[Chromatic's StorybookJs](https://master--629673e43b21dd004ace66f2.chromatic.com)

## Related documentation

- [VueJs](https://vuejs.org/)
- [Tailwindcss](https://tailwindcss.com)
- [Vites](https://vitejs.dev/)
- [Cypress - e2e testing](https://www.cypress.io/)
- [Vitest - unit testing](https://vitest.dev/)
- [Postcss](https://postcss.org)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [StorybookJs - our components showcase](https://storybook.js.org/docs/vue/writing-stories/introduction)
