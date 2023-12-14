import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    return (

        <section id="registerPage">
            <form id='registerForm' onSubmit={onSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="alex@abv.bg"
                    onChange={onChange}
                    value={values[RegisterFormKeys.Email]}
                    required
                />

                <label htmlFor="username">Username:</label>
                <input
                    type="username"
                    id="username"
                    name="username"
                    placeholder="Alex"
                    onChange={onChange}
                    value={values[RegisterFormKeys.Username]}
                    pattern="^[A-Z].*"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChange}
                    value={values[RegisterFormKeys.Password]}
                    minLength={6}
                    required
                />

                <label htmlFor="con-pass">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="Confirm Password"
                    onChange={onChange}
                    value={values[RegisterFormKeys.ConfirmPassword]}
                    minLength={6}
                    required
                />

                <input type="submit" className="register" value="Register" />
            </form>
        </section>
    );
}