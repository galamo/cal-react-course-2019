import React from "react"
import { Link, Route } from "react-router-dom"
import { routes } from "./routes.config"


// export default class AppRouter extends React.Component {
//     render() {
//         return (
//             <>
//                 {/* route = { exact: true, path: "/", component: HomePage } */}
//                 {routes.map((route) => <Route {...route} />)}
//             </>
//         )
//     }
// }
export default function AppRouter() {
    return (
        <>
            {/* route = { exact: true, path: "/", component: HomePage } */}
            {routes.map((route) => <Route {...route} />)}
        </>
    )
}

export function AppLinks() {
    return (
        <>
            {/* route = { exact: true, path: "/", component: HomePage } */}
            {routes.map((route) => {
                const { path, title } = route;
                return <Link to={path}>{title}</Link>
            })}
        </>
    )
}

// export class AppLinks extends React.Component {
//     render() {
//         return (
//             <>
//                 {/* route = { exact: true, path: "/", component: HomePage } */}
//                 {routes.map((route) => {
//                     const { path, title } = route;
//                     return <Link to={path}>{title}</Link>
//                 })}
//             </>
//         )
//     }
// }
    // export const AppRouter:  = () => {
//     // const { routes } = props;
//     return routes.map((route) => <Route {...route} />)
// }

