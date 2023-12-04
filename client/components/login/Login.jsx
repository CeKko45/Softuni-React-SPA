import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });
    return (
        <section id="loginPage">
            <form id='loginForm' onSubmit={onSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name={LoginFormKyes.Email}
                    placeholder="Email"
                    onChange={onChange}
                    value={values[LoginFormKyes.Email]}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name={LoginFormKyes.Password}
                    placeholder="Password"
                    onChange={onChange}
                    value={values[LoginFormKyes.Password]}
                />

                <input type="submit" className="register" value="Login" />
            </form>
        </section>
    );
}