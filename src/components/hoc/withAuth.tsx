import React from "react"
import { Redirect } from "react-router-dom"

export const withAuth = (isAuth: any) => (WrappedComponent: any) => {
    return class LoadingHOC extends React.Component<any, any>{
        render() {
            console.log(this.props)
            if (!localStorage.getItem("token")) return <Redirect to={"/login"} />
            return <WrappedComponent {...this.props} />
        }
    }
}

// export const withLoading = (loadingProps: any) => (WrappedComponent: any) => {
//     return class LoadingHOC extends React.Component<any, any>{
//         render() {
//             return !loadingProps ? <div className="loader"></div> : <WrappedComponent  />
//         }
//     }
// } 