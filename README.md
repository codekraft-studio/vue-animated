# vue-animated

> transition component for Animate.css

Check out the project [demo](https://codekraft-studio.github.io/vue-animated/) to see it in action.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## Installation

Download the project using your favorite package manager:

```
npm install @codekraft-studio/vue-animated
yarn add @codekraft-studio/vue-animated
```

Then load it in your project:

```js
import VueAnimated from '@codekraft-studio/vue-animated'

Vue.use(VueAnimated)
```

Than use it in your application as you would with transitions:

```html
<AnimatedTransition>
  <div v-if="show" class="box"></div>
</AnimatedTransition>
```

Or customize it as you want, it will adapt the css animation to your settings

```html
<AnimatedTransition enter="slideInDown" leave="slideInDown" duration="5000">
  <!-- Normal transition content -->
</AnimatedTransition>
```

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

## License

This project depends to [animate.css](https://github.com/daneden/animate.css) which is also licensed under [MIT](https://github.com/daneden/animate.css/blob/master/LICENSE), this project is also released under the MIT License by [codekraft-studio](https://codekraft.it/),


[npm-image]: https://badge.fury.io/js/%40codekraft-studio%2Fvue-animated.svg

[npm-url]: https://npmjs.org/package/@codekraft-studio/vue-animated

[daviddm-image]: https://david-dm.org/codekraft-studio/vue-animated.svg?theme=shields.io

[daviddm-url]: https://david-dm.org/codekraft-studio/vue-animated

[travis-image]: https://travis-ci.org/codekraft-studio/vue-animated.svg?branch=master

[travis-url]: https://travis-ci.org/codekraft-studio/vue-animated

[coveralls-image]: https://coveralls.io/repos/codekraft-studio/vue-animated/badge.svg

[coveralls-url]: https://coveralls.io/r/codekraft-studio/vue-animated
