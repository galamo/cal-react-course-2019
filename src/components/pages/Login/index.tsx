import React, { useState } from "react";
import useCustomForm from "hooks/useCustomForm";
import { axiosAuth } from "asyncService/axiosCountries"
import { useSelector, useDispatch } from "react-redux"
import { SAVE_TOKEN } from "redux/actions"
export default function LoginPage(props: any) {
    console.log("login page rendered");
    const initialState = { email: "gal@walla.com", password: "1234" };
    // const [state, setState] = useState(initialState)
    const [formData, onChangeInput] = useCustomForm(initialState);
    const [failedLogins, setFailedLogins] = useState(0);
    const dispatch = useDispatch();

    const login = async () => {
        const result = await axiosAuth.post("/login", formData)
        const { data } = result;
        const { token } = data;
        if (token) {
            // i got the token
            dispatch(SAVE_TOKEN({ token }))
            localStorage.setItem("token", token);
            props.history.push("/countries")
        }
    }

    console.log("login before return");
    return (
        <React.Fragment>
            <div className="container mt-4" style={{ width: "500px" }}>
                <h1> Login </h1>
                <span> failed: {failedLogins} </span>
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
                        onClick={login}
                        type="button"
                        className="btn btn-primary"
                    >
                        Login
          </button>
                </form>
            </div>
        </React.Fragment>
    );
}
