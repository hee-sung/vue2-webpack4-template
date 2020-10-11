const devRoutes = [
  {
    path: '/test',
    name: 'TestMain',
    component: () => import(/* webpackChunkName: "test" */ '@/test/pages/TestMain')
  }
];

export {
  devRoutes
}
