import React from "react"

export default class LoginPage extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = { email: "", password: "" }
    }
    onChangeInput = (e: any) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {

        return (
            <React.Fragment>
                <h1> Login </h1>
                <form noValidate className="container">
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            name="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={this.onChangeInput}

                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                </small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={this.onChangeInput}

                        />
                    </div>
                    <button
                        onClick={() => {
                            console.log(this.state)
                        }}
                        type="button"
                        className="btn btn-primary"

                    >
                        Login
              </button>

                </form>
            </React.Fragment>

        );
    }
}


