# Getting started

## Installation

Download the project using your favorite package manager:

```
npm install @codekraft-studio/vue-animated
```

Than load the plugin into Vue to register its global components.

```js
import Vue from 'vue'
import VueAnimated from '@codekraft-studio/vue-animated'

Vue.use(VueAnimated)
```

The plugin can also accept options to customize the default animation behavior and to choose which animation transitions should be created and globally registered.

### Customization

When adding the plugin to the Vue instance you can pass it default properties and customize what is loaded.

#### duration

An integer that represents the default animation duration when not specified as property.

```js
Vue.use(VueAnimated, {
  duration: 750
})
```

#### functional

A boolean to indicate if built-in functional components of the common animations (such as _attention seekers_ and _special animation_) should be loaded or not, by default they are not loaded.

```js
Vue.use(VueAnimated, {
  functional: true
})
```

You can also pass an array of __existing animation names__ to register only the transition components you need.

```js
Vue.use(VueAnimated, {
  functional: ['shake', 'pulse']
})
```

```html
<AnimatedShake></AnimatedShake>
<AnimatedPulse></AnimatedPulse>
```

---

## Usage

### Generic component

The plugin expose an extended functional component called `Animated` that is designed to work with __animate.css__ classes out of the box. It works like a normal transition component but allow you to specify the animation enter and leave names directly from properties.

```html
<Animated enter="slideInRight" leave="slideOutLeft">
  <!-- ... -->
</Animated>
```

The example above will use `slideInRight` animation while entering and `slideOutLeft` animation while leaving, all the others transition component properties such as [duration](https://vuejs.org/v2/guide/transitions.html#Explicit-Transition-Durations) and [hooks](https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks) can be used normally.

When using __enter__ and __leave__ properties you should specify the name of an existing [animate.css](https://github.com/daneden/animate.css/) class as shown in their documentation.

You can also use the same animation for both enter and leave states using the __name__ property as you would do in a normal transition element.

```html
<Animated name="pulse" duration="1000" appear>
  <!-- ... -->
</Animated>
```

The `Animated` base component for generic transitions and the built-in functional components based on existing classes can be used also in __kebab-case__, the following example show codes that will produce the same result.

```html
<animated name="bounce"></animated>

<animated-bounce></animated-bounce>

<AnimatedBounce></AnimatedBounce>
```

### Named components

When registering the plugin to your Vue application you can enable the generated built-in animation components registration.

```js
Vue.use(VueAnimated, {
  functional: true
})
```

This will register globally a set of pre-defined transitions based on the _attention seekers_ and _special animation_ groups of [animate.css](https://github.com/daneden/animate.css/).

```html
<AnimatedBounce></AnimatedBounce>
<AnimatedFlip></AnimatedFlip>
<AnimatedPulse></AnimatedPulse>
```

### Custom component

The plugin provides also a generic component class to let you create any functional component based on the __animate.css__ animations class names. This allow you to customize what is registered as component and loaded in your application. Also is useful if you want to add any custom animation to __animate.css__ and have it as functional component.

```js
import Vue from 'vue'
import {AnimatedGeneric} from '@codekraft-studio/vue-animated'

Vue.component("HingeAnimation", new AnimatedGeneric("hinge", {
  defaultDuration: {
    enter: 0,
    leave: 2500
  }
}))
```

Now you will be able to use `HingeAnimation` component everywhere in your app.

```html
<HingeAnimation>
  <!-- ... -->
</HingeAnimation>
```
