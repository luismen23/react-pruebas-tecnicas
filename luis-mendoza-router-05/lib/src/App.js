import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{lazy}from"react";import{Router}from"./Router";import{Page404}from"./pages/Page404";import SearchPage from"./pages/Search";import Route from"./Route";import{Suspense}from"react";const LazyAbout=lazy(()=>import("./pages/About"));const LazyHome=lazy(()=>import("./pages/Home"));const routes=[{path:"/search/:query",Component:SearchPage}];function App(){return _jsx("main",{children:_jsx(Suspense,{fallback:_jsx("div",{children:"Loading ..."}),children:_jsxs(Router,{routes:routes,defaultComponent:Page404,children:[_jsx(Route,{path:"/",Component:LazyHome}),_jsx(Route,{path:"/about",Component:LazyAbout})]})})})}export default App;