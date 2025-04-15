import{jsx as _jsx}from"react/jsx-runtime";import{useState}from"react";import{EVENTS}from"./consts";import{useEffect}from"react";import{match}from"path-to-regexp";import{Children}from"react";import{getCurrentPath}from"./utils";export function Router({children,routes=[],defaultComponent:DefaultComponent=()=>_jsx("h1",{children:"404"})}){const[currenPath,setCurrentPath]=useState(getCurrentPath());useEffect(()=>{const onLocationChange=()=>{setCurrentPath(window.location.pathname)};window.addEventListener(EVENTS.PUSHSTATE,onLocationChange);window.addEventListener(EVENTS.POPSTATE,onLocationChange);return()=>{window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange);window.removeEventListener(EVENTS.POPSTATE,onLocationChange)}},[]);let routeParams={};const routesFromChildren=Children.map(children,({props,type})=>{const{name}=type;const isRoute=name==="Route";if(!isRoute)return null;return props});const routesToUse=routes.concat(routesFromChildren).filter(Boolean);const Page=routesToUse.find(({path})=>{if(path===currenPath)return true;const matcherUrl=match(path,{decode:decodeURIComponent});const matched=matcherUrl(currenPath);if(!matched)return false;routeParams=matched.params;return true})?.Component;return Page?_jsx(Page,{routeParams:routeParams}):_jsx(DefaultComponent,{routeParams:routeParams})}