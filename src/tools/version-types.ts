import {App} from "vue";
import {Options as classOptions, Vue as SuperVue} from "vue-class-component";
import {RouteLocationNormalizedLoaded, RouteLocationRaw, Router} from "vue-router";

export type VueApp = App;

export const Options = classOptions;
export const Component = classOptions;
export const Vue = SuperVue;
export type Vue = SuperVue;
export type VueRouter = Router
export type VueLink = RouteLocationRaw;
export type VueRoute = RouteLocationNormalizedLoaded;
