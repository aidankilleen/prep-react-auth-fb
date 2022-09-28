import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {

    const { user } = useAuth0();

    return (
        <main style={{padding: "1rem 0"}}>
            <h2>Profile</h2>
            <h3>{user.name}</h3>
            <img src={user.picture} alt={user.name} width="100"/>
        </main>
    )

    
}