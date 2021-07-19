// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// const Route = ({ component: Component, roles, path }) => {
//     roles = roles || [];
//     return (
//         <Route
//             path={path}
//             exact={true}
//             render={(props) => 
//                 hasRoles(roles) ? (
//                     <Component {...props} />
//                 ) : (
//                     isAuth() ? (
//                         <Unauthorized />
//                     ) : (
//                         <Redirect to="/login" />
//                     )
//                 )
//             }
//         />
//     );
// }
type Route = {
    name: string,
    path: string,
    component?: React.AbstractComponent<any>,
    roles?: string[],
    routes?: Route[],
 };

const routes = [
    {
        'name': 'login',
        'path': '/login',
        'component': Login,
    },
    {
        'name': 'index',
        'path': '/',
        'component': Index,
        'roles': ['ROLE_USER'],
    },
 ];
const compile = (parentRoute: Route, subRoutes: Route[]): Route[] => {
    return subRoutes.flatMap(subRoute => {
        const newRoute: Route = {
            'name': subRoute.name,
            'path': parentRoute.path + subRoute.path,
            'component': subRoute.component,
            'roles': (parentRoute.roles || []).concat((subRoute.roles || [])),
        };
        return (subRoute.routes) ? [...compile(newRoute, subRoute.routes)] : newRoute;
    });
 }
 
 export const getRoutes = () => {
    const parentRoute = {
        'name': '',
        'path': '',
    };
    const flatRoutes = compile(parentRoute, routes);
    return flatRoutes;
 }