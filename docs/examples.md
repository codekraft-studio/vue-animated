# Examples

In this section there are some usage examples to show the plugin functionalities. In all the examples is used the generic animation component because is always registered but you can also use the generated named functional components based on __animate.css__ animation names.

## Simple animation

Animate both enter and leave state of any element.

```html
<Animated name="bounce">
  <div v-if="show"></div>
</Animated>
```

<DemoBox name="bounce" />

## Enter and Leave

Use a different animation for enter and leave states.

```html
<Animated enter="bounce" leave="hinge">
  <div v-if="show"></div>
</Animated>
```

<DemoBox enter="bounce" leave="hinge" />

## Animation duration

You can also customize the duration as you would with the transition component.

```html
<Animated name="jello" duration="2000">
  <div v-if="show"></div>
</Animated>
```

You can also specify separate values for enter and leave durations.

```html
<Animated name="jello" :duration="{ enter: 1000, leave: 0 }">
  <div v-if="show"></div>
</Animated>
```

<DemoBox name="jello" :duration="{ enter: 1000, leave: 0 }" />

## Transition modes

The mode property is supported as in a normal transition component, by default is "out-in"

```html
<Animated leave="fadeOut" :mode="mode">
  <div v-key="toggler"></div>
</Animated>
```

<DemoModeBox leave="fadeOut" />
