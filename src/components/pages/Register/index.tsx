import React from "react";
import useCustomForm from "hooks/useCustomForm";
import axios from "axios"
import { axiosAuth } from "asyncService/axiosCountries"
export default function RegisterPage(props: any) {
    const initialState = { email: "", password: "", first_name: "gal", last_name: "a" };
    const [formData, onChangeInput] = useCustomForm(initialState);

    const registeration = async () => {
        const result = await axiosAuth.post("/register", formData)
        const { data } = result;
        if (data.message) props.history.push("/login")
    }
    return (
        <React.Fragment>
            <div className="container mt-4" style={{ width: "500px" }}>
                <h1> Register </h1>

                <form noValidate>
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
                        onClick={registeration}
                        type="button"
                        className="btn btn-primary"
                    >
                        Register
          </button>
                </form>
            </div>
        </React.Fragment>
    );
}
