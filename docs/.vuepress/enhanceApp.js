import VueAnimated from "../../src"

export default ({
  Vue,
  options,
  router,
  siteData
}) => {

  Vue.use(VueAnimated, {
    functional: true
  });

}
