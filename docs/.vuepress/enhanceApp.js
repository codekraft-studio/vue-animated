import pageComponents from '@internal/page-components'
import VueAnimated, {AnimatedGeneric} from "../../src"

export default ({
  Vue,
  options,
  router,
  siteData
}) => {

  // fix for Unknown Custom Element - <v-#####>
  // @see https://github.com/vuejs/vuepress/issues/1173
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }

  Vue.use(VueAnimated, {
    functional: true
  });

  Vue.component("HingeAnimation", new AnimatedGeneric("hinge", {
    defaultDuration: {
      enter: 0,
      leave: 2500
    }
  }));

}
