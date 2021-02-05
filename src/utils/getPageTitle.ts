export function getPageTitle(router: any) {
  return router.route === '/' ? 'Home' : router.route.split('/').pop();
}
