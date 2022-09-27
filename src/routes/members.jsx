import { useAuth0 } from "@auth0/auth0-react"
import Login from "./login";

export default function Members() {
    
    const { isAuthenticated } = useAuth0();
    
    if (isAuthenticated) {
        return (
            <main style={{padding: "1rem 0"}}>
                <h2>Members Only Section</h2>
            </main>
        )
    } else {
        return (
            <Login/>
        )
    }
}