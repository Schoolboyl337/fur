"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _callback = _interopRequireDefault(require("../views/callback.vue"));

var _games = _interopRequireDefault(require("../views/games.vue"));

var _ = _interopRequireDefault(require("../components/pages/404.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/callback',
  name: 'callback',
  component: _callback["default"]
}, {
  path: '/games',
  name: 'games',
  component: _games["default"]
}, {
  path: '/404',
  component: _["default"]
}, {
  path: '/:catchAll(.*)',
  redirect: '404'
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(process.env.BASE_URL),
  routes: routes
});
var _default = router;
exports["default"] = _default;