export default {
  init: ($router) => {
    const routes = [];
    let currentRoute = $router.currentRoute.fullPath;
    $router.options.routes.forEach((item) => {
      if (item.path == currentRoute) {
        if (item.children) {
          item.children.forEach((el) => {
            routes.push({
              name: el.name,
              path: el.path,
            });
          });
        }
      }
    });
    return routes;
  },
};
