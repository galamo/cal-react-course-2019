import React from "react"

export default class HomePage extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        // if (!localStorage.getItem("token")) {
        //     this.props.history.push("/login")
        // }
    }
    render() {

        return <div className="container">
            <h1>
                Home component
            </h1>
        </div>
    }
}