import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {

    const { loginWithRedirect } = useAuth0();

    return(
        <main>
            <button onClick={loginWithRedirect({ redirectUri:`${window.location.origin}/members`})}>Login</button>
        </main>
    )

}

export default Login;

