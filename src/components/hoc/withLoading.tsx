import React from "react"


export const withLoading = (loadingProps: any) => (WrappedComponent: any) => {
    return class LoadingHOC extends React.Component<any, any>{
        render() {

            return !loadingProps ? <div className="loader"></div>
                : <WrappedComponent {...this.props} />
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