import React from "react"
import useCustomForm from "hooks/useCustomForm"


export default function RegisterPage() {
    const initialState = { email: "", password: "" }
    const [formData, onChangeInput] = useCustomForm(initialState)

    return (
        <React.Fragment>
            <h1> Register </h1>

            <form noValidate className="container">
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        name="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={onChangeInput}
                        value={formData.email}

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
                        onChange={onChangeInput}
                        value={formData.password}

                    />
                </div>
                <button
                    onClick={() => {
                        console.log("hook")
                        console.log(formData)
                    }}
                    type="button"
                    className="btn btn-primary"

                >
                    Register
              </button>

            </form>
        </React.Fragment>

    );

}


