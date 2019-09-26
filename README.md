# vue-animated

> functional transition components for Animate.css

Check out the project [demo](https://codekraft-studio.github.io/vue-animated/) to see it in action.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## Installation

Download the project using your favorite package manager:

```
npm install @codekraft-studio/vue-animated
```

Load it in your project with or without options:

```js
import Vue from 'vue'
import VueAnimated from '@codekraft-studio/vue-animated'

Vue.use(VueAnimated)
```

```js
import Vue from 'vue'
import VueAnimated from '@codekraft-studio/vue-animated'

Vue.use(VueAnimated, {
  functional: true,
  defaultDuration: 2000
})
```

The module comes with animate.css bundled to ensure the compatibility so you don't have to load it manually.

## Usage

It work like a normal transition component but allow you to specify the animation names and control the duration:

```html
<Animated enter="slideInRight" leave="slideOutLeft" duration="500">
  <div v-if="show" class="box"></div>
</Animated>
```

You can also use __all the components__ in the __kebab-kase__ form:

```html
<animated enter="bounce"></animated>
<animated-bounce></animated-bounce>
<AnimatedBounce></AnimatedBounce>
```

The above code will produce the same effect.


#### Functional animation components

To enable the functional components registration pass `true` to the init function options, __by default are disabled__.

```js
Vue.use(VueAnimated, {
  functional: true
})
```

Than quickly add animations to your application using the global components:

```html
<AnimatedBounce>
  <!-- ... -->
</AnimatedBounce>

<AnimatedSwing duration="500">
  <!-- ... -->
</AnimatedSwing>

<AnimatedHeartBeat duration="3000" appear>
  <!-- ... -->
</AnimatedHeartBeat>
```

Please note that __only__ the _attention seekers_ and _special animation_ components are available, all the components relative to animation that includes enter or leaving animations can be created with the generic component:

```html
<Animated enter="rotateInDownRight" leave="rotateOutDownRight" duration="2000" mode="out-in" appear>
  <div class="box"></div>
</Animated>
```

---

## License

This project is released under the [MIT License](./LICENSE) by [codekraft-studio](https://codekraft.it/)


[npm-image]: https://badge.fury.io/js/%40codekraft-studio%2Fvue-animated.svg

[npm-url]: https://npmjs.org/package/@codekraft-studio/vue-animated

[daviddm-image]: https://david-dm.org/codekraft-studio/vue-animated.svg?theme=shields.io

[daviddm-url]: https://david-dm.org/codekraft-studio/vue-animated

[travis-image]: https://travis-ci.org/codekraft-studio/vue-animated.svg?branch=master

[travis-url]: https://travis-ci.org/codekraft-studio/vue-animated

[coveralls-image]: https://coveralls.io/repos/codekraft-studio/vue-animated/badge.svg

[coveralls-url]: https://coveralls.io/r/codekraft-studio/vue-animated
